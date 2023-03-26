import React from 'react';
import { Badge } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { useSelector } from 'react-redux';
import { AntdTopDropdwon } from './auth-info-style';
import { Popover } from '../../popup/popup';
import Heading from '../../heading/heading';

function NotificationBox() {
  function renderThumb({ style, ...props }) {
    const thumbStyle = {
      borderRadius: 6,
      backgroundColor: '#F1F2F6',
    };
    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  }

  const renderTrackVertical = () => {
    const thumbStyle = {
      position: 'absolute',
      width: '6px',
      transition: 'opacity 200ms ease 0s',
      opacity: 0,
      left: '2px',
      bottom: '2px',
      top: '2px',
      borderRadius: '3px',
    };
    return <div className="hello" style={thumbStyle} />;
  };

  function renderView({ style, ...props }) {
    const customStyle = {
      'marginLeft': '-17px',
    };
    return <div {...props} style={{ ...style, ...customStyle }} />;
  }

  renderThumb.propTypes = {
    style: PropTypes.shape(PropTypes.object),
  };

  renderView.propTypes = {
    style: PropTypes.shape(PropTypes.object),
  };

  const content = (
    <AntdTopDropdwon className="antd-top-dropdwon">
      <Heading as="h5" className="antd-top-dropdwon__title">
        <span className="title-text">Notifications</span>
        <Badge className="badge-success" count={3} />
      </Heading>
      <Scrollbars
        autoHeight
        autoHide
        renderThumbVertical={renderThumb}
        renderView={renderView}
        renderTrackVertical={renderTrackVertical}
      >
        <ul className="antd-top-dropdwon__nav notification-list">
          <li>
            <Link to="#">
              <div className="antd-top-dropdwon__content notifications">
                <div className="notification-icon bg-primary">
                  <FeatherIcon icon="hard-drive" />
                </div>
                <div className="notification-content d-flex">
                  <div className="notification-text">
                    <Heading as="h5">
                      <span>James</span> sent you a message
                    </Heading>
                    <p>5 hours ago</p>
                  </div>
                  <div className="notification-status">
                    <Badge dot />
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="antd-top-dropdwon__content notifications">
                <div className="notification-icon bg-secondary">
                  <FeatherIcon icon="share" />
                </div>
                <div className="notification-content d-flex">
                  <div className="notification-text">
                    <Heading as="h5">
                      <span>James</span> sent you a message
                    </Heading>
                    <p>5 hours ago</p>
                  </div>

                  <div className="notification-status">
                    <Badge dot />
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="antd-top-dropdwon__content notifications">
                <div className="notification-icon bg-secondary">
                  <FeatherIcon icon="share" />
                </div>
                <div className="notification-content d-flex">
                  <div className="notification-text">
                    <Heading as="h5">
                      <span>James</span> sent you a message
                    </Heading>
                    <p>5 hours ago</p>
                  </div>

                  <div className="notification-status">
                    <Badge dot />
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="antd-top-dropdwon__content notifications">
                <div className="notification-icon bg-secondary">
                  <FeatherIcon icon="share" />
                </div>
                <div className="notification-content d-flex">
                  <div className="notification-text">
                    <Heading as="h5">
                      <span>James</span> sent you a message
                    </Heading>
                    <p>5 hours ago</p>
                  </div>

                  <div className="notification-status">
                    <Badge dot />
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link to="#">
              <div className="antd-top-dropdwon__content notifications">
                <div className="notification-icon bg-secondary">
                  <FeatherIcon icon="share" />
                </div>
                <div className="notification-content d-flex">
                  <div className="notification-text">
                    <Heading as="h5">
                      <span>James</span> sent you a message
                    </Heading>
                    <p>5 hours ago</p>
                  </div>

                  <div className="notification-status">
                    <Badge dot />
                  </div>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </Scrollbars>
      <Link className="btn-seeAll" to="#">
        See all incoming activity
      </Link>
    </AntdTopDropdwon>
  );

  return (
    <div className="notification">
      <Popover placement="bottomLeft" content={content} action="click">
        <Badge dot offset={[-8, -5]}>
          <Link to="#" className="head-example">
            <FeatherIcon icon="bell" size={20} />
          </Link>
        </Badge>
      </Popover>
    </div>
  );
}

export default NotificationBox;
