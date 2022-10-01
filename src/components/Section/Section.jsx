import css from 'components/Section/Section.module.css';
import PropTypes from 'prop-types';

 const Section = ({ title, children }) => {
    return (
        <div>
            <h3 className={css.title}>{title}</h3>
            {children}
        </div>
    )
}

export default Section;      

Section.propTypes = {

    title: PropTypes.string.isRequired,
    
}