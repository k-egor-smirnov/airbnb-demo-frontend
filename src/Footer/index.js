import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import instagram from './instagram.svg'

const Footer = styled.footer `
  box-sizing: border-box;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  margin-top: 64px;
  width: inherit;
`

const Content = styled.div `
  margin: 0 auto;  
  margin-top: 48px;
  max-width: 976px;
`

const Category = styled.div `
  display: none;
  flex-flow: column nowrap;  

  @media (min-width: 768px) {
      display: flex;
  }
`

const CategoryTitle = styled.span `
  font-weight: bold;  
`

const CategoryItem = styled.a `
  color: black;
  text-decoration: none;
  padding-top: 12px;
`

const Information = styled.div `
  flex-flow: row nowrap;
  display: flex;
  overflow: hidden;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
`

const Credits = styled.div `
  display: flex;
  font-size: 12px;
  margin-top: 16px;
  margin-bottom: 16px;
  flex-flow: column nowrap;
  justify-content: flex-start;

  @media (min-width: 768px) {
    flex-flow: row nowrap;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`
const About = styled.div `
  display: flex;
  align-items: center;
  width: 100%;

  @media (min-width: 992px) {
    font-size: 15px;
  }
`

const Logo = styled.img `
  height: 30px;

`
const Credit = styled.span `
  margin-left: 12px;
`

const Links = styled.div `
  display: flex;
  width: 100%;
  flex: 1 auto;
  align-items: center;

  @media (min-width: 768px) {
    justify-content: flex-end;  
  }
`

const Link = styled.a `
  color: black;
  text-decoration: none;
  white-space: nowrap;
  padding-right: 12px;
  padding-top: 16px;
  font-size: 12px;

  @media (min-width: 992px) {
    font-size: 15px;
  }
`
const ChooseContainer = styled.div `
  display: flex;
  width: 100%;
  flex-flow : row nowrap;

  @media (min-width: 768px) {
    flex-flow : column nowrap;
  }
`

const Select = styled.select `
  padding-left: 8px;
  margin-bottom: 16px;  
  font-family: CircularAir;
  font-size: 12px;
  border: none;
  outline: none;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  height: 48px;
  width: 100%;

  @media (min-width: 768px) {
    font-size: 15px;
  }

  @media (min-width: 992px) {
    font-size: 18px;
  }
`

export default() => {
  return (
    <Footer>
      <Content>
        <Information>
          <div className="col-lg-4 col-md-4 col-xs-12">
            <ChooseContainer>
              <div className="col-xs-6 col-md-8">
                <Select>
                  <option value="English">English</option>
                </Select>
              </div>

              <div className="col-xs-6 col-md-8">
                <Select>
                  <option value="United States dollar">United States dollar</option>
                </Select>
              </div>
            </ChooseContainer>
          </div>

          <div className="col-lg-3 col-md-3">
            <Category>
              <CategoryTitle>Airbnb</CategoryTitle>

              <CategoryItem href="#">About us</CategoryItem>
              <CategoryItem href="#">Careers</CategoryItem>
              <CategoryItem href="#">Press</CategoryItem>
              <CategoryItem href="#">Policies</CategoryItem>
              <CategoryItem href="#">Help</CategoryItem>
              <CategoryItem href="#">Diversity & Belonging</CategoryItem>
            </Category>
          </div>

          <div className="col-lg-3 col-md-3">
            <Category>
              <CategoryTitle>Discover</CategoryTitle>

              <CategoryItem href="#">Trust & Safety
              </CategoryItem>
              <CategoryItem href="#">Travel Credit</CategoryItem>
              <CategoryItem href="#">Gift Cards</CategoryItem>
              <CategoryItem href="#">Airbnb Citizen</CategoryItem>
              <CategoryItem href="#">Business Travel</CategoryItem>
              <CategoryItem href="#">Guidebooks</CategoryItem>
              <CategoryItem href="#">Airbnbmag</CategoryItem>
            </Category>
          </div>

          <div className="col-lg-2 col-md-2">
            <Category>
              <CategoryTitle>Hosting</CategoryTitle>

              <CategoryItem href="#">Why Host</CategoryItem>
              <CategoryItem href="#">Hospitability</CategoryItem>
              <CategoryItem href="#">Response Hosting</CategoryItem>
              <CategoryItem href="#">Community Center</CategoryItem>
            </Category>
          </div>
        </Information>

        <div className="col-sm-12 col-xs-9">
          <Credits>
            <div className="col-md-6">
              <About>
                <Logo src={logo} alt=""/>
                <Credit>© Airbnb Inc.</Credit>
              </About>
            </div>

            <div className="col-md-6">
              <Links>
                <Link href="#">Terms</Link>
                <Link href="#">Privacy</Link>
                <Link href="#">Site map</Link>
                <Link href="#">
                  <img src={facebook} alt=""/>
                </Link>

                <Link href="#">
                  <img src={twitter} alt=""/>
                </Link>

                <Link href="#">
                  <img src={instagram} alt=""/>
                </Link>
              </Links>
            </div>
          </Credits>
        </div>
      </Content>
    </Footer>
  )
}