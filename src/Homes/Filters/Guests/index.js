import React from 'react';
import styled from 'styled-components';
import minus from '../minus.svg';
import plus from '../plus.svg';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  margin: 0 auto;
  max-width: 572px;
  margin-bottom: 24px;
`;

const Option = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const OptionInformation = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-left: 8px;
`;

const OptionTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #383838;
`;

const OptionDescription = styled.span`
  margin-top: 6px;
  font-size: 14px;
`;

const CountPicker = styled.div`
  display: flex;
  margin-right: 8px;
`;

const Count = styled.span`
  align-self: center;
`;

const Minus = styled.a`
  margin-right: 18px;
  content: url(${minus});
  opacity: 0.5;
`;

const Plus = styled.a`
  margin-left: 18px;
  content: url(${plus});
`;

const SaveButton = styled.button`
  position: fixed;
  bottom: 8px;
  max-width: 556px;
  width: 100%;
  margin-left: 8px;
  margin-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  background: #ff5a5f;
  border: none;
  font-size: 18px;
  font-family: CircularAir;
  color: #fff;
`;

class Guests extends React.Component {
  render() {
    return (
      <Wrapper>
        <Option>
          <OptionInformation>
            <OptionTitle>Adults</OptionTitle>
          </OptionInformation>

          <CountPicker>
            <Minus alt="" />
            <Count>0</Count>
            <Plus alt="" />
          </CountPicker>
        </Option>
        <Option>
          <OptionInformation>
            <OptionTitle>Children</OptionTitle>
            <OptionDescription>Ages 2 — 12</OptionDescription>
          </OptionInformation>

          <CountPicker>
            <Minus alt="" />
            <Count>0</Count>
            <Plus alt="" />
          </CountPicker>
        </Option>
        <Option>
          <OptionInformation>
            <OptionTitle>Infants</OptionTitle>
            <OptionDescription>Under 2</OptionDescription>
          </OptionInformation>

          <CountPicker>
            <Minus alt="" />
            <Count>0</Count>
            <Plus alt="" />
          </CountPicker>
        </Option>

        <SaveButton>Save</SaveButton>
      </Wrapper>
    );
  }
}

export default Guests;
