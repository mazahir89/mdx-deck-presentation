import React from 'react';
import * as styled from './aboutMe.styled';

function LinkedIconImage({ link, name }) {
    return (
      <a href={link} target="_blank">
        <styled.IconImage src={`public/standard/${name}`} />
      </a>
    )
  }

function AboutMe() {
      return (
        <div>
          <styled.Container>
            <styled.IconImageContainer>
              <LinkedIconImage
                link="https://www.google.com/maps/place/Utah"
                name="house.png"
              />
              <span>Utah</span>
            </styled.IconImageContainer>
            <styled.IconImageContainer>
              <styled.Family>
                <LinkedIconImage
                  link="https://www.lds.org/topics/family-proclamation"
                  name="woman.png"
                />
                <LinkedIconImage
                  link="https://www.lds.org/topics/family-proclamation"
                  name="girl.png"
                />
                <LinkedIconImage
                  link="https://www.lds.org/topics/family-proclamation"
                  name="boy.png"
                />
                <LinkedIconImage
                  link="https://www.lds.org/topics/family-proclamation"
                  name="boy.png"
                />
                <LinkedIconImage
                  link="https://www.lds.org/topics/family-proclamation"
                  name="boy.png"
                />
                <LinkedIconImage
                  link="https://photos.google.com/search/_cAF1QipNRwO3NP-6XsiM36GnFIhCiZW9nB6UFB60_Gemma/photo/AF1QipNUOABnMsdf4cEXs-D32qIIyHmrbTYT2FBIoa1j"
                  name="dog.png"
                />
              </styled.Family>
              <span>wife, 4 kids, & a dog</span>
            </styled.IconImageContainer>
            <styled.IconImageContainer>
              <LinkedIconImage
                link="https://goo.gl/maps/WBspiX9s6zz"
                name="office.png"
              />
              <span>PayPal</span>
            </styled.IconImageContainer>
          </styled.Container>
          <styled.LogoRow>
            <LinkedIconImage
              link="https://github.com/kentcdodds"
              name="github.png"
            />
            <LinkedIconImage link="http://kcd.im/news" name="kcd-news.png" />
            <LinkedIconImage
              link="https://blog.kentcdodds.com/"
              name="medium.png"
            />
            <LinkedIconImage
              link="https://kentcdodds.com/talks/"
              name="speaking.png"
            />
            <LinkedIconImage
              link="http://kcd.im/3-mins"
              name="3-minutes-with-kent.png"
            />
            <LinkedIconImage link="http://kcd.im/ama" name="ama.png" />
          </styled.LogoRow>
          <styled.LogoRow>
            <LinkedIconImage link="http://kcd.im/egghead" name="eggheadio.png" />
            <LinkedIconImage link="http://kcd.im/fem" name="fem.png" />
            <a
              href="https://twitter.com/kentcdodds"
              style={{ fontSize: '1.6em', color: '#1da1f2' }}
            >
              @kentcdodds
            </a>
            <LinkedIconImage link="http://kcd.im/gde" name="gde.png" />
            <LinkedIconImage link="http://kcd.im/youtube" name="youtube.png" />
          </styled.LogoRow>
        </div>
      )
  }

  export default AboutMe;
  export { styled };