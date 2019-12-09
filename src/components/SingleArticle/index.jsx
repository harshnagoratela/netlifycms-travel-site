import React from 'react';
import styled from 'styled-components';

const ArticleWrap = styled.div`
  margin-bottom: 80px;
`

const Title = styled.title`

`

const Image = styled.div`
  background-image: url(${({ src }) => src});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  height: 220px;
  width: 100%;
`

const Description = styled.p`
  font-size: 14px;
  color: rgba(0,0,0,0.66);
  line-height: 24px;
`

const ReadMore = styled.a`
  font-size: 14px;
  color: #5F2EA9;
  background: none;
  font-weight: 600;
  font-size: 14px;
`

const SingleArticle = () => {

  return (
    <ArticleWrap>
      <Title>How to behave in Onsen</Title>
      <Image src="https://enjoyonsen.city.beppu.oita.jp/wp-content/uploads/2018/06/what_main.jpg" />
      <Description>
        An onsen  (温泉) is a Japanese hot spring; the term also extends to cover the bathing facilities and traditional inns frequently situated around a hot spring. As a volcanically active country, Japan has thousands of onsens scattered throughout all of its major islands.[1] Onsens come in many types and shapes, including outdoor (露天風呂 or 野天風呂 roten-buro or noten-buro) and indoor baths (内湯 uchiyu). Baths may be either publicly run by a municipality or privately, often as part of a hotel, ryokan, or bed and breakfast (民宿 minshuku).
      </Description>
      <ReadMore href="/blog/kek">
        Read full story
        </ReadMore>
    </ArticleWrap>
  );
}

export default SingleArticle;