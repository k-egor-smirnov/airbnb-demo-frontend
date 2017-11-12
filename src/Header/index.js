import React from 'react'
import logo from './ic-airbnb.svg';
import search from './search.svg'
import styled from 'styled-components'
import media from '../media'
import downArrow from './downArrow.svg'

const Header = styled.header `
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
  width: 100%;
  box-sizing: border-box;
`;

const Content = styled.div `
  max-width: 976px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: inherit;
  box-sizing: border-box;
`

const Logo = styled.img `
  display: flex;
  padding: 16px;
  content: url(${logo});   
`;

const Nav = styled.nav `
  display: none;
  justify-content: flex-end;
  align-items: center;  
  flex-flow: row nowrap;
  
  @media only screen and (min-width: 768px){
    display: flex;
  }
`

const Left = styled.div `
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`

const Link = styled.a `
  color: black;
  text-decoration: none;
  padding: 8px;
  padding-top: 16px;
`

const Search = styled.div `
  display: flex;
  border: 1px solid rgba(72, 72, 72, 0.2);  
  border-radius: 4px; 
  max-width: 512px;    

  ${media.lg `
    max-width: 350px;        
  `}

  ${media.lg `
    padding-right: 8px;
  `}

  @media (min-width: 0px) and (max-width: 768px) {
    &:before {
      position: relative;
      right: 16px;
      content: url(${downArrow});
      margin: auto;
    }
  }

`

const SearchIcon = styled.img `
  margin-left: 8px;
  margin-right: 8px;
  content: url(${search})
`

const Input = styled.input `
  height: 48px;
  width: 100%;
  border: none;
`;

export default() => {
  return (
    <Header>
      <Content>
        <div className="row">
          <Left
            className="
            col-lg-8
            col-md-8
            col-sm-12
            col-xs-12
          ">
            <Logo/>
            <Search
              className="
              col-lg-7
              col-md-7
              col-sm-10
              col-xs-10
            ">
              <SearchIcon/>
              <Input placeholder='Try "Miami"'/>
            </Search>
          </Left>

          <Nav className="
            col-lg-4
            col-md-4
          ">
            <Link href="#">Become a host</Link>
            <Link href="#">Help</Link>
            <Link href="#">Sign up</Link>
            <Link href="#">Log in</Link>
          </Nav>
        </div>
      </Content>
    </Header>
  )
}