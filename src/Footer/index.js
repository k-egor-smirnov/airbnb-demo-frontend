import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import instagram from './instagram.svg'

const Footer = styled.header`
  box-sizing: border-box;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  margin-top: 64px;
  margin-left: 8px;
`

const SelectContainer = styled.div`
  margin-bottom: 16px;
`

const Select = styled.select`
  border: none;
  outline: none;
  border: 1px solid rgba(72, 72, 72, 0.2);
  border-radius: 4px;
  height: 48px;
  width: 230px;
`

const Content = styled.div`
  margin-top: 48px;
`

const Category = styled.div`
  display: flex;
  flex-flow: column nowrap;  
`

const CategoryTitle = styled.span`
  font-weight: bold;  
`

const CategoryItem = styled.a`
  color: black;
  text-decoration: none;
  padding-top: 12px;
`

const Information = styled.div`
  flex-flow: row nowrap;
  display: flex;
  padding-bottom: 40px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);  
`

const Credits = styled.div`
  display: flex;
  height: 100px;
  flex-flow: row nowrap; 
  justify-content: space-between;  
  align-items: center; 
`
const About = styled.div`
`

const Logo = styled.img`
  height: 20px;
`
const Credit = styled.span`
  margin-left: 12px;
`

const Links = styled.div`
`

const Link = styled.a`
  color: black;
  text-decoration: none;
  padding: 8px;
  padding-top: 16px;
`

export default () => {
  return (
    <Footer>
      <Content>
        <Information>
          <div className="col-4">
            <div className="col-3">
              <SelectContainer>
                <Select>

                </Select>
              </SelectContainer>
              
              <SelectContainer>
                <Select>

                </Select>
              </SelectContainer>
            </div>
          </div>      

          <div className="col-3">
            <Category>
              <CategoryTitle>Airbnb</CategoryTitle>
            
              <CategoryItem href="#" >About us</CategoryItem>
              <CategoryItem href="#" >Careers</CategoryItem>
              <CategoryItem href="#" >Press</CategoryItem>
              <CategoryItem href="#" >Policies</CategoryItem>
              <CategoryItem href="#" >Help</CategoryItem>
              <CategoryItem href="#" >Diversity & Belonging</CategoryItem>
            </Category>          
          </div>
          
          <div className="col-3">
            <Category>        
            <CategoryTitle>Discover</CategoryTitle>

              <CategoryItem href="#" >Trust & Safety </CategoryItem>
              <CategoryItem href="#" >Travel Credit</CategoryItem>
              <CategoryItem href="#" >Gift Cards</CategoryItem>
              <CategoryItem href="#" >Airbnb Citizen</CategoryItem>
              <CategoryItem href="#" >Business Travel</CategoryItem>
              <CategoryItem href="#" >Guidebooks</CategoryItem>
              <CategoryItem href="#" >Airbnbmag</CategoryItem>
            </Category>          
          </div>

          <div className="col-2">
            <Category>        
              <CategoryTitle>Hosting</CategoryTitle>

              <CategoryItem href="#" >Why Host</CategoryItem>
              <CategoryItem href="#" >Hospitability</CategoryItem>
              <CategoryItem href="#" >Response Hosting</CategoryItem>
              <CategoryItem href="#" >Community Center</CategoryItem>
            </Category>
          </div>
        </Information>   

        <Credits>           
          <About>
            <Logo src={logo} alt=""/>
            <Credit>© Airbnb Inc.</Credit>
          </About>

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
        </Credits>
      </Content>
    </Footer>
  )
}