import React, { useEffect } from 'react';
import { Badge } from 'antd';
import FeatherIcon from 'feather-icons-react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Popover } from '../../../popup/popup';
import { readMessageList } from '../../../../redux/message/actionCreator';

function MessageBox() {
  const dispatch = useDispatch();
  const message = useSelector(state => state.message.data);

  useEffect(() => {
    if (readMessageList) {
      dispatch(readMessageList());
    }
  });

  const popoverContent = (
    <div>
      {message.map(item => {
        const { id, from } = item;
        return (
          <NavLink key={id} to="#">
            {from}
          </NavLink>
        );
      })}
      <p>
        <NavLink style={{ display: 'block' }} to="#">
          Read more
        </NavLink>
      </p>
    </div>
  );

  return (
    <div className="message" style={{ marginTop: 10 }}>
      <Popover placement="bottomLeft" title="Message List" content={popoverContent} trigger="click">
        <Badge dot offset={[-8, -5]}>
          <NavLink to="#" className="head-example">
            <FeatherIcon icon="mail" size={20} />
          </NavLink>
        </Badge>
      </Popover>
    </div>
  );
}

export default MessageBox;
