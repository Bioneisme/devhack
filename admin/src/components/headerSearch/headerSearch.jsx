import React from 'react';
import { Input, Row, Col } from 'antd';
import { NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Div } from './style.js';
import { Popover } from '../popup/popup';

const HeaderSearch = ({ darkMode }) => {
  // const dispatch = useDispatch();
  // const searchData = useSelector(state => state.headerSearchData);
  // const search = e => {
  //   dispatch(headerSearchAction(e.target.value));
  // };
  //
  // const content = (
  //   <div>
  //     { searchData.length ? (
  //       searchData.map(group => {
  //         const { title, count, id } = group;
  //         return (
  //           <NavLink key={ id } to='#'>
  //             { title }
  //             <span className='certain-search-item-count'>{ count } people</span>
  //           </NavLink>
  //         );
  //       })
  //     ) : (
  //       <NavLink to='#'>Data Not found....</NavLink>
  //     ) }
  //   </div>
  // );
  //
  // return (
  //   <>
  //     <Div className='certain-category-search-wrapper' style={ { width: '100%' } } darkMode={ darkMode }>
  //       <Row className='ant-row-middle'>
  //         <Col lg={ 1 } md={ 2 } xs={ 2 } className={ 'text-left' }>
  //           <span className='certain-category-icon'>
  //             <FeatherIcon icon='search' size={ 16 } />
  //           </span>
  //         </Col>
  //         <Col lg={ 23 } md={ 22 } xs={ 22 }>
  //           <Popover
  //             placement={ 'bottomLeft' }
  //             content={ content }
  //             title='Search List'
  //             action='focus'
  //           >
  //             <Input placeholder='Поиск...' onInput={ search } />
  //           </Popover>
  //         </Col>
  //       </Row>
  //     </Div>
  //   </>
  // );
};

HeaderSearch.propTypes = {
  darkMode: PropTypes.bool,
};

export default HeaderSearch;
