import React, { useEffect } from 'react';
import { Badge } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Popover } from '../../../popup/popup';
import { readNotificationList } from '../../../../redux/notification/actionCreator';

function NotificationBox() {
  const dispatch = useDispatch();
  const notification = useSelector(state => state.notification.data);

  useEffect(() => {
    if (readNotificationList) {
      dispatch(readNotificationList());
    }
  });

  const popoverContent = (
    <div>
      {notification.map(item => {
        const { id, from } = item;
        return (
          <NavLink key={id} to="#">
            {from}
          </NavLink>
        );
      })}
      <p>
        <NavLink style={{ display: 'block', textAlign: 'center' }} to="#">
          Read more
        </NavLink>
      </p>
    </div>
  );

  return (
    <div className="notification" style={{ marginTop: 10 }}>
      <Popover placement="bottomLeft" title="Notification List" content={popoverContent} trigger="click">
        <Badge dot offset={[-8, -5]}>
          <NavLink to="#" className="head-example">
            <FeatherIcon icon="bell" size={20} />
          </NavLink>
        </Badge>
      </Popover>
    </div>
  );
}

export default NotificationBox;
