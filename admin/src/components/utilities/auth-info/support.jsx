import React from 'react';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { NestedDropdwon } from './auth-info-style';
import { Popover } from '../../popup/popup';
import Heading from '../../heading/heading';

function Support() {
  const content = (
    <NestedDropdwon>
      <div className="support-dropdwon">
        <ul>
          <Heading as="h5">Documentation</Heading>
          <li>
            <Link to="#">How to customize admin</Link>
          </li>
          <li>
            <Link to="#">How to use</Link>
          </li>
          <li>
            <Link to="#">The relation of vertical spacing</Link>
          </li>
        </ul>
        <ul>
          <Heading as="h5">Payments</Heading>
          <li>
            <Link to="#">How to customize admin</Link>
          </li>
          <li>
            <Link to="#">How to use</Link>
          </li>
        </ul>
        <ul>
          <Heading as="h5">Content Planner</Heading>
          <li>
            <Link to="#">How to customize admin</Link>
          </li>
          <li>
            <Link to="#">How to use</Link>
          </li>
        </ul>
      </div>
    </NestedDropdwon>
  );

  return (
    <div className="support">
      <Popover placement="bottomLeft" content={content} action="click">
        <Link to="#" className="head-example">
          <FeatherIcon icon="help-circle" size={20} />
        </Link>
      </Popover>
    </div>
  );
}

export default Support;
