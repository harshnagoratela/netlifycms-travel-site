import React, { useState } from 'react'
import styled from 'styled-components'
import { BodyWrap } from '../../helpers/common'
import logo from '../../img/travelr_logo.png'
import { smallerScreen } from '../../helpers/breakpoints'
import BurgerMenu from '../BurgerMenu'
import { Link } from 'gatsby'

const Logo = styled.img`
  max-width: 100px;
`
const NavbarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  width: 100%;
  box-sizing: border-box;

  ${smallerScreen} {
    padding: 0 20px;
  }
`

const NavbarLink = styled(Link)`
  color: #fff;
  padding: 0 15px;
  margin: 0 10px;
  font-size: 15px;
  font-weight: 400;
  cursor: pointer;
  letter-spacing: 0.01rem;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.29);
  text-decoration: none;
`

const MenuWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${smallerScreen} {
    display: none;
  }
`

export const ShowOnMobile = styled.div`
  display: none;
  ${smallerScreen} {
    display: block;
  }
`

export const MobileNavigationProps = styled.nav`
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;
  z-index: 8;
  display: none;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => '#4F2AAB'};
  height: 100vh;
  text-align: left;
  position: fixed;
  top: 0;
  left: 0;

  ${smallerScreen} {
    width: 100%;
    display: flex;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;

    ${smallerScreen} {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #fff;
    }
  }

  p {
    margin-top: 20px;
    color: #fff;
    text-align: center;
  }
`

const MENU_ITEMS = [
  { name: 'Home', link: '/' },
  { name: 'About', link: '/about' },
  { name: 'Karaoke', link: '/karaoke' },
  { name: 'Blog', link: '/blog' },
  { name: 'Contact', link: '/contact' },
]

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <BodyWrap>
        <NavbarWrapper>
          <Link to="/">
            <Logo src={logo} alt="" />
          </Link>
          <MenuWrapper>
            {MENU_ITEMS.map(item => (
              <NavbarLink to={item.link} key={item.link}>{item.name}</NavbarLink>
            ))}
          </MenuWrapper>

          <ShowOnMobile>
            <div
              style={{ position: 'relative', width: '32px', display: 'block' }}
            >
              <BurgerMenu open={open} setOpen={() => setOpen(!open)} />
            </div>
          </ShowOnMobile>
        </NavbarWrapper>
      </BodyWrap>

      <MobileNavigationProps open={open}>
        {MENU_ITEMS.map(item => (
          <Link to={item.link} key={item.link}>
            {item.name}
          </Link>
        ))}
      </MobileNavigationProps>
    </>
  )
}

export default Navbar
