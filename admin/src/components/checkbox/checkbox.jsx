/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CheckboxStyle } from './style';

const CheckboxGroup = CheckboxStyle.Group;

const Checkbox = props => {
  const {
    item,
    defaultSelect,
    checked,
    multiple,
    onChange,
    onChangeTriger,
    defaultChecked,
    disabled,
    children,
  } = props;
  const plainOptions = item;

  const [state, setState] = useState({
    checkedList: defaultSelect,
    indeterminate: true,
    checkAll: false,
  });

  const onMultiChange = checkedList => {
    setState({
      checkedList,
      indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length,
    });
  };

  useEffect(() => {
    if (onChangeTriger) {
      onChangeTriger(state.checkedList);
    }
    // eslint-disable-next-line
  }, [state]);

  const onCheckAllChange = e => {
    setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked,
    });
  };

  const onChecked = e => {
    return onChange(e.target.checked, e.target.value);
  };

  return !multiple ? (
    <CheckboxStyle checked={checked} onChange={onChecked} defaultChecked={defaultChecked} disabled={disabled}>
      {children}
    </CheckboxStyle>
  ) : (
    <div>
      <div style={{ borderBottom: '1px solid #E9E9E9' }}>
        <CheckboxStyle indeterminate={state.indeterminate} onChange={onCheckAllChange} checked={state.checkAll}>
          Check all
        </CheckboxStyle>
      </div>
      <br />
      <CheckboxGroup options={plainOptions} value={state.checkedList} onChange={onMultiChange} />
    </div>
  );
};

Checkbox.propTypes = {
  item: PropTypes.arrayOf(PropTypes.string),
  defaultSelect: PropTypes.array,
  multiple: PropTypes.bool,
  onChange: PropTypes.func,
  onChangeTriger: PropTypes.func,
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.node]),
};

export { Checkbox, CheckboxGroup };
