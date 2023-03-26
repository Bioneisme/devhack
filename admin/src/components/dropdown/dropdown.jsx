import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Content, DropdownStyle } from './dropdown-style';

const Dropdown = props => {
  const { content, placement, title, action, children, style, className } = props;

  return (
    <DropdownStyle
      overlayClassName={className}
      style={style}
      placement={placement}
      title={title}
      menu={<Content>{content}</Content>}
      trigger={action}
    >
      {children}
    </DropdownStyle>
  );
};

const content = (
  <>
    <Link to="#">
      <span>Export to CSV</span>
    </Link>
    <Link to="#">
      <span>Export to XML</span>
    </Link>
    <Link to="#">
      <span>Export to Drive</span>
    </Link>
  </>
);

Dropdown.defaultProps = {
  action: ['hover'],
  placement: 'bottomRight',
  content,
  style: {},
  className: 'strikingDash-dropdown',
};

Dropdown.propTypes = {
  placement: PropTypes.string,
  title: PropTypes.string,
  action: PropTypes.array,
  content: PropTypes.node,
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string,
};

export { Dropdown };
