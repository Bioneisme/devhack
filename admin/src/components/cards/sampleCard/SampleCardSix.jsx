import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';
import { Link } from 'react-router-dom';
import { Cards } from '../frame/cards-frame';
import { Dropdown } from '../../dropdown/dropdown';

const CardWrapper = styled.figure`
  display: flex;
  margin: 0;
  position: relative;
  h2,
  p {
    margin: 0;
  }
  figcaption {
    .more {
      position: absolute;
      top: 0px;
      ${({ theme }) => (theme.rtl ? 'left' : 'right')}: 0;
      a {
        color: ${({ theme }) => theme['extra-light-color']};
      }
    }
    h2 {
      font-size: 20px;
      font-weight: 600;
    }
    p {
      font-size: 14px;
      color: ${({ theme }) => theme['light-color']};
    }
  }
`;

const Icon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme, className }) => theme[`${className}-color`]};
  ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')}: 20px;
`;

const SampleCardSix = ({ item }) => {
  const { content, title, img, className } = item;
  return (
    <Cards headless>
      <CardWrapper>
        <Icon className={className}>
          <img src={`../../../${img}`} alt="" />
        </Icon>
        <figcaption>
          <div className="more">
            <Dropdown
              action={['click']}
              className="wide-dropdwon"
              content={
                <>
                  <Link to="#">Edit</Link>
                  <Link to="#">Delete</Link>
                  <Link to="#">View</Link>
                </>
              }
            >
              <Link to="#">
                <FeatherIcon icon="more-horizontal" />
              </Link>
            </Dropdown>
          </div>
          <h2>{title}</h2>
          <p>{content}</p>
        </figcaption>
      </CardWrapper>
    </Cards>
  );
};

SampleCardSix.propTypes = {
  item: propTypes.object,
};

SampleCardSix.defaultProps = {
  item: {
    id: 1,
    title: '47',
    content: 'Total tasks',
    img: 'static/img/icon/1.svg',
    className: 'primary',
  },
};

export default SampleCardSix;
