import React from 'react';
import styled from 'styled-components';
import minus from '../minus.svg';
import plus from '../plus.svg';

const Wrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin: 0 auto;
  max-width: 572px;
  margin-botttom: 24px;
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
`;

const Plus = styled.a`
  margin-left: 18px;
  content: url(${plus});
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
      </Wrapper>
    );
  }
}

export default Guests;
