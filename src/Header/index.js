import React from 'react'
import logo from './ic-airbnb.svg';
import search from './search.svg'
import styled from 'styled-components'
import media from '../media'

const Header = styled.header`
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
  width: 100%;
  box-sizing: border-box;
`;

const Content = styled.div`
  max-width: 976px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: inherit;
  box-sizing: border-box;
`

const Logo = styled.img`
  display: flex;
  padding: 16px;
  content: url(${logo});
`;

const Nav = styled.nav`
  margin-right: 8px;
  display: flex;
  justify-content: flex-end;
  flex-flow: row nowrap;

  ${media.tablet`
    display: none;
  `}
`

const Left = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: center;
`

const Link = styled.a`
  color: black;
  text-decoration: none;
  padding: 8px;
  padding-top: 16px;
`

const Search = styled.div`
  display: flex;
  border: 1px solid rgba(72, 72, 72, 0.2);  
  border-radius: 4px; 
  max-width: 512px;    

  ${media.desktop`
    max-width: 350px;        
  `}

  ${media.tablet`
    padding-right: 8px;
  `}
`

const SearchIcon = styled.img`
  margin-left: 8px;
  margin-right: 8px;
  content: url(${search})
`

const Input = styled.input.attrs({
	type: 'text',
})`
  height: 48px;
  width: 100%;
  border: none;
`;

export default () => {
  return (
    <Header>
      <Content>
        <Left>
          <Logo className="
              col-xs-2
            "/>    

          <Search>            
            <SearchIcon />
            <Input placeholder='Try "Miami"'/>
          </Search>
        </Left>

        <Nav className="
          col-xl-6        
        ">
          <Link href="#">Become a host</Link>
          <Link href="#">Help</Link>
          <Link href="#">Sign up</Link>
          <Link href="#">Log in</Link>
        </Nav>
      </Content>
    </Header>
  )
}