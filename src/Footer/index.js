import React from 'react'
import styled from 'styled-components'
import logo from './logo.svg'
import facebook from './facebook.svg'
import twitter from './twitter.svg'
import instagram from './instagram.svg'
import media from '../media'

const Footer = styled.footer`
  box-sizing: border-box;
  border-top: 1px solid rgba(72, 72, 72, 0.2);
  margin-top: 64px;
  width: 100%;
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
  max-width: 230px;
`

const Content = styled.div`
  margin: 0 auto;  
  margin-top: 48px;
  max-width: 976px;
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

  @media (orientation: portrait), not (max-width: 572px) {
    display: none;
  }
`

const Credits = styled.div`
  display: flex;
  align-items: center;
  display: flex;
  height: 100px;
  flex-flow: row nowrap; 
  justify-content: space-between;  
  align-items: center; 

  @media (orientation: portrait), not (max-width: 364px) {
    flex-flow: row wrap;     
  }  
`
const About = styled.div`
`

const Logo = styled.img`
  padding-left: 8px;
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
          <div className="
            col-lg-4
            col-md-3
          ">
            <div className="
              col-lg-4
              col-md-3
            ">
              <SelectContainer>
                <Select>
                  <option value="English">English</option>
                </Select>
              </SelectContainer>
              
              <SelectContainer>
                <Select>
                  <option value="United States dollar">United States dollar</option>    
                </Select>
              </SelectContainer>
            </div>
          </div>      

          <div className="
            col-lg-3
            col-md-3
          ">
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
          
          <div className="
            col-lg-3
            col-md-3
          ">
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

          <div className="
            col-lg-3
            col-md-3
          ">
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