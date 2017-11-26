import React from 'react';
import styled from 'styled-components';
import Rheostat from 'rheostat';
import '../../rheostat.css';
import Bar from './Bar';
import circle from '../circle.svg';
// import Toggle from 'react-toggle';
import toggleImage from './toggle.svg';
import 'react-toggle/style.css';
import downArrow from '../../downArrow.svg';
import '../react_dates_overrides.css';
import entireImage from './entire.svg';
import privateImage from './privat.svg';
import sharedImage from './shared.svg';

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
  Wrapper,
  MoreWrapper,
  SwitchOption,
  SwitchOptionInfromation,
  SwitchOptionInfromationTitle,
  SwitchOptionInfromationDescription,
  Link
} from '../styled';

const Toggle = styled.img`
  content: url(${toggleImage});
`;

const Section = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 32px;
  border-bottom: 1px solid rgba(72, 72, 72, 0.3);
`;

const SectionTitle = styled.span`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 24px;
`;

const SelectOption = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
  white-space: pre-wrap;
`;

const RoomSelectOption = SelectOption.extend`
  justify-content: space-between;
`;

const SelectOptionCheckbox = styled.input.attrs({
  type: 'checkbox'
})`
  height: 24px;
  width: 24px;
  border: 1px solid rgba(72, 72, 72, 0.3);
  border-radius: 4px;

  &:checked {
    background-color: #008489;
  }
`;

const SelectOptionInformation = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-left: 12px;
`;

const SelectOptionInformationTitle = styled.span`
  font-size: 16px;
`;

const SelectOptionInformationDescription = styled.span`
  margin-top: 3px;
  font-size: 12px;
`;

const CostWrapper = styled.div`
  padding-bottom: 32px;
  width: calc(100% - 64px);
  margin-left: 16px;
  margin-right: 16px;
`;

const Handle = styled.img`
  position: absolute;
  background: none;
  bottom: -20px;
  content: url(${circle});
  border: none;
  height: 32px;
  width: 32px;
`;

const Slider = styled.div`
  background-color: #008489;
  height: 6px;
`;

const Price = styled.span`
  font-size: 18px;
`;

const PriceDescription = styled.span`
  margin-top: 8px;
  font-size: 14px;
`;

const ExpandLink = Link.extend`
  margin-left: 8px;
  margin-bottom: 32px;

  &:after {
    margin-left: 8px;
    content: url(${downArrow});
  }
`;

const TwoColumnWrapper = styled.div`
  display: none;
  flex-flow: row nowrap;

  @media (min-width: 768px) {
    display: flex;
  }
`;

const TypeImage = styled.img`
  display: none;

  @media (min-width: 768px) {
    display: block;
  }
`;

const Left = styled.div`
  display: flex;
`;

const PriceSection = Section.extend`
  @media (min-width: 992px) {
    display: none;
  }
`;

const RoomSection = Section.extend`
  @media (min-width: 992px) {
    display: none;
  }
`;

const InstantBookSwitchOption = SwitchOption.extend`
  @media (min-width: 992px) {
    display: none;
  }
`;

class More extends React.Component {
  render() {
    return (
      <MoreWrapper>
        <RoomSection>
          <SectionTitle>Room type</SectionTitle>
          <RoomSelectOption>
            <Left>
              <SelectOptionCheckbox disabled />
              <SelectOptionInformation>
                <SelectOptionInformationTitle>
                  Entire home
                </SelectOptionInformationTitle>
                <SelectOptionInformationDescription>
                  Have a place to yourself
                </SelectOptionInformationDescription>
              </SelectOptionInformation>
            </Left>
            <TypeImage src={entireImage} />
          </RoomSelectOption>

          <RoomSelectOption>
            <Left>
              <SelectOptionCheckbox disabled />
              <SelectOptionInformation>
                <SelectOptionInformationTitle>
                  Private room
                </SelectOptionInformationTitle>
                <SelectOptionInformationDescription>
                  Have your own room and share some common spaces
                </SelectOptionInformationDescription>
              </SelectOptionInformation>
            </Left>

            <TypeImage src={privateImage} />
          </RoomSelectOption>

          <RoomSelectOption>
            <Left>
              <SelectOptionCheckbox disabled />
              <SelectOptionInformation>
                <SelectOptionInformationTitle>
                  Shared room
                </SelectOptionInformationTitle>
                <SelectOptionInformationDescription>
                  Stay in a shared space, like a common room
                </SelectOptionInformationDescription>
              </SelectOptionInformation>
            </Left>

            <TypeImage src={sharedImage} />
          </RoomSelectOption>
        </RoomSection>

        <PriceSection>
          <SectionTitle>Price range</SectionTitle>

          <Price>$10 — $1000+</Price>
          <PriceDescription>The average nightly price is 75$</PriceDescription>

          <CostWrapper>
            <Bar />
            <Rheostat
              handle={Handle}
              progressBar={Slider}
              min={1}
              max={100}
              values={[1, 100]}
            />
          </CostWrapper>
        </PriceSection>

        <Section>
          <div className="col-xs-12 col-md-6">
            <SectionTitle>Rooms and beds</SectionTitle>
            <CountOption>
              <CountOptionTitle>Bedrooms</CountOptionTitle>
              <CountPicker>
                <Minus />
                <Count>0+</Count>
                <Plus />
              </CountPicker>
            </CountOption>
            <CountOption>
              <CountOptionTitle>Beds</CountOptionTitle>
              <CountPicker>
                <Minus />
                <Count>0+</Count>
                <Plus />
              </CountPicker>
            </CountOption>
            <CountOption>
              <CountOptionTitle>Bathrooms</CountOptionTitle>
              <CountPicker>
                <Minus />
                <Count>0+</Count>
                <Plus />
              </CountPicker>
            </CountOption>
          </div>
        </Section>
        <Section>
          <div className="col-xs-12 col-md-6">
            <SectionTitle>More options</SectionTitle>
            <InstantBookSwitchOption>
              <SwitchOptionInfromation>
                <SwitchOptionInfromationTitle>
                  Instant Book
                </SwitchOptionInfromationTitle>
                <SwitchOptionInfromationDescription>
                  Secure a reservation instantly.
                </SwitchOptionInfromationDescription>
                <Link>Learn more</Link>
              </SwitchOptionInfromation>

              <Toggle />
            </InstantBookSwitchOption>

            <SwitchOption>
              <SwitchOptionInfromation>
                <SwitchOptionInfromationTitle>
                  Superhost
                </SwitchOptionInfromationTitle>
                <SwitchOptionInfromationDescription>
                  Stay with recognized
                </SwitchOptionInfromationDescription>
                <Link>Learn more</Link>
              </SwitchOptionInfromation>

              <Toggle />
            </SwitchOption>
          </div>
        </Section>

        <Section>
          <SectionTitle>Amenities</SectionTitle>

          <TwoColumnWrapper>
            <div className="col-md-5">
              <SelectOption>
                <SelectOptionCheckbox disabled />
                <SelectOptionInformation>
                  <SelectOptionInformationTitle>
                    Heating
                  </SelectOptionInformationTitle>
                </SelectOptionInformation>
              </SelectOption>
              <SelectOption>
                <SelectOptionCheckbox disabled />
                <SelectOptionInformation>
                  <SelectOptionInformationTitle>
                    TV
                  </SelectOptionInformationTitle>
                </SelectOptionInformation>
              </SelectOption>
            </div>
            <div className="col-md-5">
              <SelectOption>
                <SelectOptionCheckbox disabled />
                <SelectOptionInformation>
                  <SelectOptionInformationTitle>
                    Kitchen
                  </SelectOptionInformationTitle>
                </SelectOptionInformation>
              </SelectOption>
              <SelectOption>
                <SelectOptionCheckbox disabled />
                <SelectOptionInformation>
                  <SelectOptionInformationTitle>
                    Wireless Internet
                  </SelectOptionInformationTitle>
                </SelectOptionInformation>
              </SelectOption>
            </div>
          </TwoColumnWrapper>

          <ExpandLink>See all amenities</ExpandLink>
        </Section>

        <Section>
          <SectionTitle>Facilities</SectionTitle>

          <TwoColumnWrapper>
            <div className="col-md-5">
              <SelectOption>
                <SelectOptionCheckbox disabled />
                <SelectOptionInformation>
                  <SelectOptionInformationTitle>
                    Elevator
                  </SelectOptionInformationTitle>
                </SelectOptionInformation>
              </SelectOption>
              <SelectOption>
                <SelectOptionCheckbox disabled />
                <SelectOptionInformation>
                  <SelectOptionInformationTitle>
                    Pool
                  </SelectOptionInformationTitle>
                </SelectOptionInformation>
              </SelectOption>
            </div>
            <div className="col-md-5">
              <SelectOption>
                <SelectOptionCheckbox disabled />
                <SelectOptionInformation>
                  <SelectOptionInformationTitle>
                    Free parking on premises
                  </SelectOptionInformationTitle>
                </SelectOptionInformation>
              </SelectOption>
              <SelectOption>
                <SelectOptionCheckbox disabled />
                <SelectOptionInformation>
                  <SelectOptionInformationTitle>
                    Wheelchair accessible
                  </SelectOptionInformationTitle>
                </SelectOptionInformation>
              </SelectOption>
            </div>
          </TwoColumnWrapper>

          <ExpandLink>See all amenities</ExpandLink>
        </Section>
      </MoreWrapper>
    );
  }
}

export default More;
