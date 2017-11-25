import React from 'react';
import 'react-dates/initialize';
import { DayPickerRangeController } from 'react-dates';
import styled from 'styled-components';
import momentPropTypes from 'react-moment-proptypes';
import PropTypes from 'prop-types';
import moment from 'moment';
import { forbidExtraProps } from 'airbnb-prop-types';
import { START_DATE, END_DATE, HORIZONTAL_ORIENTATION } from '../constants';
import omit from 'lodash/omit';
import './react_dates_overrides.css';
import arrow from './arrow.svg';

const propTypes = forbidExtraProps({
  // example props for the demo
  autoFocusEndDate: PropTypes.bool,
  initialStartDate: momentPropTypes.momentObj,
  initialEndDate: momentPropTypes.momentObj,

  keepOpenOnDateSelect: PropTypes.bool,
  minimumNights: PropTypes.number,
  isOutsideRange: PropTypes.func,
  isDayBlocked: PropTypes.func,
  isDayHighlighted: PropTypes.func,

  // DayPicker props
  enableOutsideDays: PropTypes.bool,
  numberOfMonths: PropTypes.number,
  withPortal: PropTypes.bool,
  initialVisibleMonth: PropTypes.func,
  renderCalendarInfo: PropTypes.func,

  navPrev: PropTypes.node,
  navNext: PropTypes.node,

  onPrevMonthClick: PropTypes.func,
  onNextMonthClick: PropTypes.func,
  onOutsideClick: PropTypes.func,
  renderDay: PropTypes.func,

  // i18n
  monthFormat: PropTypes.string,

  isRTL: PropTypes.bool
});

const defaultProps = {
  // example props for the demo
  autoFocusEndDate: false,
  initialStartDate: null,
  initialEndDate: null,

  // day presentation and interaction related props
  renderDay: null,
  minimumNights: 1,
  isDayBlocked: () => false,
  isDayHighlighted: () => false,
  enableOutsideDays: false,

  // calendar presentation and interaction related props
  withPortal: false,
  initialVisibleMonth: null,
  numberOfMonths: 2,
  onOutsideClick() {},
  keepOpenOnDateSelect: false,
  renderCalendarInfo: null,
  isRTL: false,

  // navigation related props
  navPrev: null,
  navNext: null,
  onPrevMonthClick() {},
  onNextMonthClick() {},

  // internationalization
  monthFormat: 'MMMM YYYY'
};

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

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

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
          onDatesChange={this.onDatesChange}
          onFocusChange={this.onFocusChange}
          focusedInput={focusedInput}
        />
      </DatePickerWrapper>
    );
  }
}

export default DatePicker;
