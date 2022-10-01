import css from 'components/Statistics/Statistics.module.css';
import PropTypes from 'prop-types';

export default function  Statistics({good, neutral, bad, total, positivePercentage}) {
    return (
        <div>
            <ul className={css.listStatistic}>
                <li className={css.listItem}>Good: {good}</li>
                <li className={css.listItem}>Neutral: {neutral}</li>
                <li className={css.listItem}>Bad: {bad}</li>
                <li className={css.listItem}>Total: {total}</li>
                <li className={css.listItem}>Positive feedback: {positivePercentage}</li>
            </ul>
        </div>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,

}