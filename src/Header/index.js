import React from 'react'
import logo from './ic-airbnb.svg';
import search from './search.svg'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
  height: 80px;
  width: 100%;
  box-sizing: border-box;
`;

const Logo = styled.img`
  height: 40px;
  padding: 16px;
  content: url(${logo});
`;

const Nav = styled.nav`
  margin-right: 8px;
`

const Left = styled.div`
  display: flex;
  align-items: center;
`

const Link = styled.a`
  color: black;
  text-decoration: none;
  padding: 8px;
  padding-top: 16px;
`

const Search = styled.div`
  border: 1px solid rgba(72, 72, 72, 0.2);  
  border-radius: 4px;
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
  width: 324px;
  border: none;
  outline: none;
`;

export default () => {
  return (
    <Header>
      <Left>
        <Logo />    
        <Search>            
          <SearchIcon />
          <Input placeholder='Try "Miami"'/>
        </Search>
      </Left>

      <Nav>
        <Link href="#">Become a host</Link>
        <Link href="#">Help</Link>
        <Link href="#">Sign up</Link>
        <Link href="#">Log in</Link>
      </Nav>
    </Header>
  )
}