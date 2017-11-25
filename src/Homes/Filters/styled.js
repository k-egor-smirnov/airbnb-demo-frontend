import styled from 'styled-components';
import minus from './minus.svg';
import plus from './plus.svg';

const CountOption = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const CountOptionInformation = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-left: 8px;
`;

const CountOptionTitle = styled.span`
  font-size: 18px;
  font-weight: ${props => (props.bold ? 'bold' : '100')};
  color: #383838;
`;

const CountOptionDescription = styled.span`
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

const BottomButton = styled.button`
  position: fixed;
  bottom: 8px;
  max-width: 556px;
  width: calc(100% - 16px);
  margin-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  background: #ff5a5f;
  border: none;
  font-size: 18px;
  font-family: CircularAir;
  color: #fff;
  box-shadow: 0px -1px 0px #d5d5d5;
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-flow: column nowrap;
  margin: 0 auto;
  padding-left: 8px;
  padding-right: 8px;
  max-width: 556px;
  margin-bottom: 24px;
`;

export {
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
};
