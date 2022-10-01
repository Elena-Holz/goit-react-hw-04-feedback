

import Section from 'components/Section/Section.jsx';
import Statistics from 'components/Statistics/Statistics.jsx';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions.jsx';
import Notification from 'components/Notification/Notification.jsx';
import { useState } from "react";

export function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const onLeaveFeedback = (propertyName) => {
        switch (propertyName) {
            case 'good':
                return setGood((prev) => prev + 1);
            case 'neutral':
                return setNeutral((prev) => prev + 1);
            case 'bad':
                return setBad((prev) => prev + 1);
                
            default:
                return;
        }
    }

   const countTotalFeedback = () => {
       return good + neutral + bad;
        
    }

    const countPositiveFeedbackPercentage = () => {
        const total = countTotalFeedback();
        if (!total) {
            return 0;
        }

        const property = good + neutral;
        const result = (property/ total) * 100;
        return Number(result.toFixed(2));
    }
   
    const total = countTotalFeedback();
     const options = Object.keys(this.state);
   

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
                    <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
                </Section>
                <Section title='Statistic'>
                    {!total ? <Notification message="There is no feedback" /> : <Statistics
                        good={good}
                        neutral={neutral}
                        bad={bad}
                        total={total}
                        positivePercentage={countPositiveFeedbackPercentage}
                    />}
                </Section>
            </div>
        );
}

