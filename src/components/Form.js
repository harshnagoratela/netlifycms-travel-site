import React from "react"
import styled from "styled-components"
import { Formik } from "formik"
import * as Yup from "yup"
import { Input, TextArea } from "@purple/phoenix-components"
import { FormattedMessage, injectIntl } from "gatsby-plugin-intl"

import WidthContent from "./WidthContent"
import theme from "../styles/theme"

const schema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Your first name is too short")
    .max(50, "Your first name is too long")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Your last name is too short")
    .max(50, "Your last name is too long")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Required"),
  phoneNumber: Yup.string(),
  company: Yup.string(),
})

const Wrapper = styled(WidthContent)`
  margin-top: 150px;
  margin-bottom: 150px;
  display: flex;
  @media (max-width: ${({ theme }) => theme.media.mobile}px) {
    flex-direction: column;
  }
`
const Message = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  font-size: 1.5em;
  letter-spacing: -0.011em;
  color: #17171b;
  line-height: 1.67em;
  & > ref {
    color: ${({ theme }) => theme.colors.primary};
  }
`
const FormWrapper = styled.div`
  flex: 1;
`

const Names = styled.div`
  display: flex;
  flex-direction: row;
`

const Row = styled.div`
  margin-bottom: 10px;
`
const Status = styled(Row)`
  text-align: center;
  letter-spacing: -0.011em;
  color: #17171b;
`
const Name = styled.div`
  flex: 1;
  margin-bottom: 10px;
`

const Space = styled.div`
  width: ${({ space }) => space}px;
  height: ${({ space }) => space}px;
`

const Button = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary};
  height: 61px;
  border: none;
  color: white;
  font-size: 1rem;
  border-radius: 4px;
  font-size: 15px;
  cursor: pointer;
  outline: none;
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const Form = ({ intl: { formatMessage } }) => {
  return (
    <Wrapper id="contact">
      <Message>
        <FormattedMessage id="thinking_of_joining" />
        <ref>
          <FormattedMessage id="leave_message" />
        </ref>
      </Message>
      <Space space={20} />
      <FormWrapper>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phoneNumber: "",
            company: "",
            message: ""
          }}
          initialStatus={{}}
          validationSchema={schema}
          onSubmit={(values, actions) => {
            actions.setStatus({})
            // TODO: submit somewhere
            fetch("/", {
              method: "POST",
              headers: { "Content-Type": "application/x-www-form-urlencoded" },
              body: encode({ "form-name": "contact", ...values }),
            })
              .then(() => {
                actions.resetForm()
                actions.setStatus({ success: true })
              })
              .catch(error => {
                actions.setStatus({ error: true })
              })
          }}
          render={props => (
            <form
              name="contact"
              onSubmit={props.handleSubmit}
              data-netlify="true"
            >
              {props.status.success && (
                <Status>
                  <strong><FormattedMessage id="status_success" /></strong> <br />
                  <p><FormattedMessage id="status_success_description" /></p>
                </Status>
              )}
              {props.status.error && (
                <Status>
                  <FormattedMessage id="status_error" />
                </Status>
              )}
              <Names>
                <Name>
                  <Input
                    // TODO: intl
                    label={formatMessage({ id: "firstName" })}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.firstName}
                    error={props.touched.firstName && props.errors.firstName}
                    name="firstName"
                    withBorder
                  />
                </Name>
                <Space space={20} />
                <Name>
                  <Input
                    label={formatMessage({ id: "lastName" })}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.lastName}
                    error={props.touched.lastName && props.errors.lastName}
                    name="lastName"
                    withBorder
                  />
                </Name>
              </Names>
              <Row>
                <Input
                  label={formatMessage({ id: "email" })}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.email}
                  error={props.touched.email && props.errors.email}
                  name="email"
                  withBorder
                />
              </Row>
              <Row>
                <Input
                  label={formatMessage({ id: "phoneNumber" })}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.phoneNumber}
                  error={props.touched.phoneNumber && props.errors.phoneNumber}
                  name="phoneNumber"
                  withBorder
                />
              </Row>
              <Row>
                <Input
                  label={formatMessage({ id: "company" })}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.company}
                  error={props.touched.company && props.errors.company}
                  name="company"
                  withBorder
                />
              </Row>
              <Row>
                <TextArea label={formatMessage({ id: "message_body" })}
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.message}
                  error={props.touched.message && props.errors.message}
                  name="message"
                  withBorder
                />
              </Row>
              <Button type="submit">{formatMessage({ id: "send" })}</Button>
            </form>
          )}
        />
      </FormWrapper>
    </Wrapper>
  )
}

export default injectIntl(Form)
