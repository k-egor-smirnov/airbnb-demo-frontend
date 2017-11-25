import React from 'react';
import styled from 'styled-components';

import {
  CountOption,
  CountOptionInformation,
  CountOptionDescription,
  CountOptionTitle,
  CountPicker,
  Count,
  Minus,
  Plus,
  BottomButton,
  Wrapper
} from '../styled';

class Guests extends React.Component {
  render() {
    return (
      <Wrapper>
        <CountOption>
          <CountOptionInformation>
            <CountOptionTitle bold>Adults</CountOptionTitle>
          </CountOptionInformation>

          <CountPicker>
            <Minus alt="" />
            <Count>0</Count>
            <Plus alt="" />
          </CountPicker>
        </CountOption>
        <CountOption>
          <CountOptionInformation>
            <CountOptionTitle bold>Children</CountOptionTitle>
            <CountOptionDescription>Ages 2 — 12</CountOptionDescription>
          </CountOptionInformation>

          <CountPicker>
            <Minus alt="" />
            <Count>0</Count>
            <Plus alt="" />
          </CountPicker>
        </CountOption>
        <CountOption>
          <CountOptionInformation>
            <CountOptionTitle bold>Infants</CountOptionTitle>
            <CountOptionDescription>Under 2</CountOptionDescription>
          </CountOptionInformation>

          <CountPicker>
            <Minus alt="" />
            <Count>0</Count>
            <Plus alt="" />
          </CountPicker>
        </CountOption>

        <BottomButton>Save</BottomButton>
      </Wrapper>
    );
  }
}

export default Guests;
