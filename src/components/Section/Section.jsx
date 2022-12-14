import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ children }) => (
  <section className={css.section}>{children}</section>
);

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.element,
  ]).isRequired,
};
