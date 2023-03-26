import React from 'react';
import PropTypes from 'prop-types';
import * as headings from './style';

const Heading = props => {
  const { as, children, className, id } = props;
  const StyledHeading = as ? headings[as.toUpperCase()] : headings.H1;

  return (
    <StyledHeading className={className} id={id}>
      {children}
    </StyledHeading>
  );
};

Heading.defaultProps = {
  as: 'h1',
};

Heading.propTypes = {
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']),
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.node]),
  className: PropTypes.string,
  id: PropTypes.string,
};

export default Heading;
