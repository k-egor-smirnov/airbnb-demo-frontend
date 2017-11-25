import React from 'react';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import styled from 'styled-components';
import { START_DATE, END_DATE } from '../constants';
import omit from 'lodash/omit';
import './react_dates_overrides.css';
import arrow from './arrow.svg';


const DatePickerWrapper = styled.div`
  height: ${props => (props.height ? props.height : '100vh')};
  width: 100%;
`;

const ShowDateContainer = styled.div`
  margin-left: 8px;
  margin-bottom: 12px;

  @media (min-width: 768px) {
    display: none;
  }
`;

const DateText = styled.span`
  color: ${props => (props.focused ? '#0F7276' : '#636363')};
  border-bottom: ${props => (props.focused ? '1px solid #0F7276' : 'none')};
`;

const Arrow = styled.img`
  content: url(${arrow});
  margin-left: 16px;
  margin-right: 16px;
`;

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      focusedFirst: true,
      startDate: props.initialStartDate,
      endDate: props.initialEndDate,
      focusedInput: props.autoFocusEndDate ? END_DATE : START_DATE
    };

    this.onDatesChange = this.onDatesChange.bind(this);
    this.onFocusChange = this.onFocusChange.bind(this);
  }

  onDatesChange({ startDate, endDate }) {
    this.setState({ startDate, endDate });
  }

  onFocusChange(focusedInput) {
    this.setState({
      focusedFirst: !this.state.focusedFirst,
      focusedInput: !focusedInput ? START_DATE : focusedInput
    });
  }

  componentDidUpdate(prevProps, prevState) {}

  calculateOrientation(displaySize) {
    console.log(displaySize);
    let orientation = 'vertical';

    if (displaySize !== 'xs') {
      orientation = 'horizontal';
    }

    console.log(orientation);
    return orientation;
  }

  calculateHeight(displaySize) {
    let height = '100vh';

    if (displaySize !== 'xs') {
      height = '100%';
    }

    return height;
  }

  render() {
    const { focusedInput, startDate, endDate } = this.state;

    const props = omit(this.props, [
      'autoFocus',
      'autoFocusEndDate',
      'initialStartDate',
      'initialEndDate'
    ]);

    return (
      <DatePickerWrapper height={this.calculateHeight(this.props.displaySize)}>
        <ShowDateContainer>
          <DateText focused={this.state.focusedFirst}>
            {startDate ? startDate.format('DD-MM-YYYY') : 'Check-in'}
          </DateText>
          <Arrow />
          <DateText focused={!this.state.focusedFirst}>
            {endDate ? endDate.format('DD-MM-YYYY') : 'Check-out'}
          </DateText>
        </ShowDateContainer>

        <DayPickerRangeController
          {...props}
          orientation={this.calculateOrientation(this.props.displaySize)}
          verticalHeight="calc(100vh - 100px)"
          keepOpenOnDateSelect={this.state.keepOpenOnDateSelect}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          numberOfMonths={this.props.numberOfMonths}
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
        />
      </DatePickerWrapper>
    );
  }
}

export default DatePicker;
