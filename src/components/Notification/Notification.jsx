import css from 'components/Notification/Notification.module.css';
import PropTypes from 'prop-types';

const Notification = ({message}) => {
        return (
            <div className={css.listItem}>{message}</div> 
        )
}

export default Notification ;             

Notification.propTypes = {

    message: PropTypes.string.isRequired,
    
}