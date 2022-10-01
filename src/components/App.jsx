import { Component } from "react";

import Section from 'components/Section/Section.jsx';
import Statistics from 'components/Statistics/Statistics.jsx';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions.jsx';
import Notification from 'components/Notification/Notification.jsx';



export class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }
  
    onLeaveFeedback = (counter) => {
        this.setState((prevState) => {
            const value = prevState[counter];
            return {
                [counter]: value + 1
            }
        })
    }

    countTotalFeedback() {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }

    countPositiveFeedbackPercentage() {
        const total = this.countTotalFeedback();
        if (!total) {
            return 0;
        }
        const { good, neutral } = this.state;
        const result = ((good + neutral) / total) * 100;
        return Number(result.toFixed(2));
    }
   

    render() {
        const { good, neutral, bad } = this.state;
        const options = Object.keys(this.state);
        const total = this.countTotalFeedback();
        const positivePercentage = this.countPositiveFeedbackPercentage();
        const account = this.onLeaveFeedback;
     
        return (
            <div
                style={{
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 40,
                    color: '#010101',
                    flexDirection: 'column',
                }}
            >
                <Section title='Please leave fidback'>
                    <FeedbackOptions options={options} onLeaveFeedback={account} />
                </Section>
                <Section title='Statistic'>
                    {!total ? <Notification message="There is no feedback" /> : <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={positivePercentage}
                    />}
                </Section>
            </div>
        );
    };
}

