import React from 'react';
import { Input, Button } from 'antd';
import PropTypes from 'prop-types';
import { SearchOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux';
import { AutoCompleteStyled } from './style';

const onSelect = () => {
  // console.log('onSelect', value);
};

const renderItem = (title, count) => {
  return {
    value: title,
    label: (
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        {title}
        {count}
      </div>
    ),
  };
};

const AutoComplete = props => {
  const { rtl } = useSelector(state => {
    return {
      rtl: state.ChangeLayoutMode.rtlData,
    };
  });
  const { customComponent, patterns, patternButtons, width, onSearch, dataSource, placeholder } = props;

  const content =
    dataSource?.length > 0 &&
    dataSource.map(group => {
      const { title, count } = group;
      return {
        label: title,
        options: [renderItem(title, <span className="certain-search-item-count">{count} people</span>)],
      };
    });

  const onSearching = searchText => {
    onSearch(searchText);
  };

  return customComponent ? (
    <AutoCompleteStyled dataSource={dataSource} style={{ width }} onSelect={onSelect} onSearch={onSearching}>
      {customComponent}
    </AutoCompleteStyled>
  ) : patterns ? (
    <AutoCompleteStyled
      className="certain-category-search"
      popupClassName="certain-category-search-dropdown"
      dropdownMatchSelectWidth={false}
      dropdownStyle={{ width: 300 }}
      style={{ width }}
      options={content}
      placeholder={placeholder}
      onSearch={onSearching}
    >
      <Input
        suffix={
          patternButtons ? (
            <Button className="search-btn" style={{ [rtl ? 'marginLeft' : 'marginRight']: -20 }} type="primary">
              <SearchOutlined />
            </Button>
          ) : (
            <SearchOutlined />
          )
        }
      />
    </AutoCompleteStyled>
  ) : (
    <AutoCompleteStyled
      dataSource={dataSource}
      style={{ width }}
      onSelect={onSelect}
      onSearch={onSearching}
      placeholder={placeholder}
    />
  );
};

AutoComplete.defaultProps = {
  width: '350px',
  placeholder: 'Input here',
};

AutoComplete.propTypes = {
  customComponent: PropTypes.node,
  patterns: PropTypes.bool,
  patternButtons: PropTypes.bool,
  width: PropTypes.string,
  onSearch: PropTypes.func,
  dataSource: PropTypes.arrayOf(PropTypes.object),
  placeholder: PropTypes.string,
};

export { AutoComplete };
