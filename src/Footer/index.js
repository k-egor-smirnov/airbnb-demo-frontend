import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import instagram from './instagram.svg'
import media from '../media'

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
  display: flex;
  flex-flow: column nowrap;  

  @media (max-width: 572px) {
    display: none;
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
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
`

const Credits = styled.div `
  display: flex;
  align-items: center;
  display: flex;
  height: 100px;
  font-size: 12px;
  flex-flow: row nowrap; 
  justify-content: space-between;  
  align-items: center; 
  max-width: 100%;
`
const About = styled.div `
  display: flex;
  align-items: center;
`

const Logo = styled.img `
  height: 30px;

`
const Credit = styled.span `
  margin-left: 12px;
`

const Links = styled.div `
  display: flex;
  flex: 1 auto;
  justify-content: space-between;
  align-items: center;
`

const Link = styled.a `
  color: black;
  text-decoration: none;
  padding: 8px;
  padding-top: 16px;
`
const ChooseContainer = styled.div `
  display: flex;
  flex-flow: column nowrap; 
  width: 100%;

  @media (max-width: 572px) {
    flex-flow: row nowrap; 
  }
`

const Select = styled.select `
  margin-bottom: 16px;  
  border: none;
  outline: none;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  height: 48px;
  width: 100%;

  @media (max-width: 572px) {
    width: 100%;
  }
`

export default() => {
  return (
    <Footer>
      <Content>
        <Information>
          <div
            className="col-lg-4 col-md-3 col-sm-6 col-xs-12">
            <ChooseContainer>
              <div
                className="
                  col-xs-12
                  col-sm-8
                ">
                <Select>
                  <option value="English">English</option>
                </Select>
              </div>

              <div
                className="
                  col-xs-12
                  col-sm-8
                ">
                <Select>
                  <option value="United States dollar">United States dollar</option>
                </Select>
              </div>
            </ChooseContainer>
          </div>

          <div className="
            col-lg-3
            col-md-3
          ">
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

          <div className="
            col-lg-3
            col-md-3
          ">
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

          <div className="
            col-lg-2
            col-md-2
          ">
            <Category>
              <CategoryTitle>Hosting</CategoryTitle>

              <CategoryItem href="#">Why Host</CategoryItem>
              <CategoryItem href="#">Hospitability</CategoryItem>
              <CategoryItem href="#">Response Hosting</CategoryItem>
              <CategoryItem href="#">Community Center</CategoryItem>
            </Category>
          </div>
        </Information>

        <Credits className="
          col-sm-12
          col-xs-9
        ">
          <About>
            <Logo src={logo} alt=""/>
            <Credit>© Airbnb Inc.</Credit>
          </About>

          <Links className="
              col-sm-6
              col-xs-9
            ">

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
        </Credits>
      </Content>
    </Footer>
  )
}