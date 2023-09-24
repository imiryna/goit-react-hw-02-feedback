import React, { Component } from 'react';
import { Buttons } from './buttons/buttons';

import { ContainerCss, DescriptionCss, TextCss } from './feedback.styled';

export class FeedbackClass extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  handleIncrementBad = () => {
    this.setState(preState => {
      return {
        bad: preState.bad + 1,
      };
    });
    this.countTotalFeedback();
  };

  handleIncrementGood = () => {
    this.setState(preState => {
      return {
        good: preState.good + 1,
      };
    });
    this.countTotalFeedback();
  };

  handleIncrementNeutral = () => {
    this.setState(preState => {
      return {
        neutral: preState.neutral + 1,
      };
    });
    this.countTotalFeedback();
  };

  countTotalFeedback = () => {
    this.setState(() => {
      return {
        total: this.state.good + this.state.neutral + this.state.bad,
      };
    });
  };

  render() {
    return (
      <ContainerCss>
        <DescriptionCss>Please leave feedback</DescriptionCss>
        <Buttons
          onIncrementGood={this.handleIncrementGood}
          onIncrementNeutral={this.handleIncrementNeutral}
          onIncrementBad={this.handleIncrementBad}
        />

        <DescriptionCss>Statistics</DescriptionCss>
        <TextCss>Good: {this.state.good}</TextCss>
        <TextCss>Neutral: {this.state.neutral}</TextCss>
        <TextCss>Bad: {this.state.bad}</TextCss>
        <TextCss>Total: {this.state.total}</TextCss>
      </ContainerCss>
    );
  }
}
