import css from 'components/FeedbackOptions/FeedbackOptions.module.css';
import PropTypes from 'prop-types';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
   const blockBotton = options.map((option) => {
       return <li>
           <button type='button' className={css.btn} onClick={() => onLeaveFeedback(option)}>{option}</button>
           </li>
    })
    return ( 
        <ul className={css.listStatistic}>{blockBotton}</ul>
    )
}

FeedbackOptions.propTypes = {

    onLeaveFeedback: PropTypes.func.isRequired,
    
}
/* <button className={css.btn} onClick={() => onLeaveFeedback('good')}>Good</button>
            <button className={css.btn} onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
            <button className={css.btn} onClick={() => onLeaveFeedback('bad')}>Bad</button>  */

//             function ContactsItem({ items, removeContact }) {
//     const elements = items.map(({ name, number, id }) => {
//         return <li className={css.listItem} key={id}>{name}: {number}
//             <span className={css.deleteItem} onClick={() => removeContact(id)}>Delete</span></li>
//     })
//         return (
//            <>
//             <ol>{elements}</ol>
//         </>
//         )
// }
