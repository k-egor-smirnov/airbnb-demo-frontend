import React from 'react';
import logo from './ic-airbnb.svg';
import search from './search.svg';
import styled from 'styled-components';
import downArrow from './downArrow.svg';

const Header = styled.header`
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.2);
  width: 100%;
  box-sizing: border-box;
  overflow: hidden;
  color: #383838;
  position: fixed;
  background: #fff;
  z-index: 10;
`;

const Content = styled.div`
  max-width: 976px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  box-sizing: border-box;
  width: 100%;
  position: relative;
  & > div:last-child {
    margin-left: auto; /* setting nav to right*/
  }
`;

const Logo = styled.img`
  margin: 0 auto;
  content: url(${logo});
`;

const ExpandButton = styled.a`
  content: url(${downArrow});
  margin-top: auto;
  position: absolute;
  top: 0;
  bottom: 44%;
  margin-left: 5px;

  @media (min-width: 768px) {
    margin-left: 7px;
  }

  @media (min-width: 992px) {
    display: none;
  }
`;

const Nav = styled.nav`
  display: none;
  justify-content: flex-end;
  align-items: center;
  flex-flow: row nowrap;

  @media only screen and (min-width: 992px) {
    display: flex;
  }
`;
const Link = styled.a`
  color: #383838;
  font-size: 14px;
  line-height: 24px;
  text-decoration: none;
  padding: 8px;
  padding-top: 16px;
`;
const Search = styled.input`
  box-sizing: border-box;
  border: 1px solid rgba(72, 72, 72, 0.2);
  height: 48px;
  width: 100%;
  border-radius: 4px;
  margin-left: 4px;
  padding-left: 35px;
  background: url(${search}) no-repeat scroll 16px 16px;
  background-size: 14px;
  font-size: 14px;
  line-height: 24px;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export default () => {
  return (
    <Header>
      <Content>
        <div className="col-xs-2 col-md-1">
          <Logo />
          <ExpandButton />
        </div>

        <div className="col-xs-10 col-md-7 col-lg-5">
          <Search placeholder="Try &quot;Miami&quot;" />
        </div>

        <div className="col-lg-4">
          <Nav>
            <Link href="#">Become a host</Link>
            <Link href="#">Help</Link>
            <Link href="#">Sign up</Link>
            <Link href="#">Log in</Link>
          </Nav>
        </div>
      </Content>
    </Header>
  );
};
