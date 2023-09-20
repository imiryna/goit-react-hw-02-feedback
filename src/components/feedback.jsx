import React, { Component } from 'react';
import {
  ContainerCss,
  DescriptionCss,
  BoxButtonCss,
  BtnCss,
  TextCss,
} from './feedback.styled';

export class FeedbackClass extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementBad = () => {
    this.setState(preState => {
      return {
        bad: preState.bad + 1,
      };
    });
  };

  handleIncrementGood = () => {
    this.setState(preState => {
      return {
        good: preState.good + 1,
      };
    });
  };

  handleIncrementNeutral = () => {
    this.setState(preState => {
      return {
        neutral: preState.neutral + 1,
      };
    });
  };

  render() {
    return (
      <ContainerCss>
        <DescriptionCss>Please leave feedback</DescriptionCss>
        <BoxButtonCss>
          <BtnCss type="button" onClick={this.handleIncrementGood}>
            Good
          </BtnCss>
          <BtnCss type="button" onClick={this.handleIncrementNeutral}>
            Neutral
          </BtnCss>
          <BtnCss type="button" onClick={this.handleIncrementBad}>
            Bad
          </BtnCss>
        </BoxButtonCss>
        <DescriptionCss>Statistics</DescriptionCss>
        <TextCss>Good: {this.state.good}</TextCss>
        <TextCss>Neutral: {this.state.neutral}</TextCss>
        <TextCss>Bad: {this.state.bad}</TextCss>
      </ContainerCss>
    );
  }
}
