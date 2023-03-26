import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Spin } from 'antd';

import { useAppDispatch } from '../../../../hooks/useAppDispatch.js';
import { useAppSelector } from '../../../../hooks/useAppSelector.js';
import { deviceFilterData, deviceGetData } from '../../../../redux/chartContent/actionCreator.js';
import { SessionChartWrapper, SessionState } from '../../style/style.js';

import { ChartjsDonutChart } from '../../../../components/charts/chartjs.jsx';
import { Cards } from '../../../../components/cards/frame/cards-frame.jsx';

const UsersByLevel = () => {
  const dispatch = useAppDispatch();
  const { deviceState, dvIsLoading } = useAppSelector(state => {
    return {
      deviceState: state.chartContent.deviceData,
      dvIsLoading: state.chartContent.dvLoading,
    };
  });

  const [state, setState] = useState({
    device: 'year',
  });

  useEffect(() => {
    if (deviceGetData) {
      dispatch(deviceGetData());
    }
  }, [dispatch]);

  const handleActiveChangeDevice = value => {
    setState({
      ...state,
      device: value,
    });
    dispatch(deviceFilterData(value));
  };
  return (
    <SessionChartWrapper>
      {deviceState !== null && (
        <Cards
          isbutton={
            <div className='card-nav'>
              <ul>
                <li className={state.device === 'week' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeDevice('week')} to='#'>
                    Week
                  </Link>
                </li>
                <li className={state.device === 'month' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeDevice('month')} to='#'>
                    Month
                  </Link>
                </li>
                <li className={state.device === 'year' ? 'active' : 'deactivate'}>
                  <Link onClick={() => handleActiveChangeDevice('year')} to='#'>
                    Year
                  </Link>
                </li>
              </ul>
            </div>
          }
          title='Sessions By Device'
          size='large'
        >
          {dvIsLoading ? (
            <div className='sd-spin'>
              <Spin />
            </div>
          ) : (
            <div className='session-chart-inner'>
              <ChartjsDonutChart
                labels={['Desktop', 'Mobiles', 'Tablets']}
                datasets={[
                  {
                    data: deviceState,
                    backgroundColor: ['#20C997', '#5F63F2', '#FA8B0C'],
                    total: '9,283',
                  },
                ]}
              />

              <SessionState className='session-wrap d-flex justify-content-center'>
                <div className='session-single'>
                  <div className='chart-label'>
                    <span className='label-dot dot-success' />
                    Desktop
                  </div>
                  <span>{deviceState[0]}</span>
                  <sub>45%</sub>
                </div>
                <div className='session-single'>
                  <div className='chart-label'>
                    <span className='label-dot dot-info' />
                    Mobile
                  </div>
                  <span>{deviceState[1]}</span>
                  <sub>30%</sub>
                </div>
                <div className='session-single'>
                  <div className='chart-label'>
                    <span className='label-dot dot-warning' />
                    Tablets
                  </div>
                  <span>{deviceState[1]}</span>
                  <sub>25%</sub>
                </div>
              </SessionState>
            </div>
          )}
        </Cards>
      )}
    </SessionChartWrapper>
  );
};

export default UsersByLevel;
