import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import FeatherIcon from 'feather-icons-react';

const CardWrapper = styled.figure`
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  margin-bottom: 0;
  img {
    width: 100%;
  }
  figcaption {
    padding: 25px;
    h4 {
      display: flex;
      justify-content: space-between;
      span {
        font-size: 12px;
        font-weight: 500;
        color: ${({ theme }) => theme['light-gray-color']};
      }
    }
    h2 {
      margin: 6px 0 10px 0;
      font-size: 18px;
      font-weight: 600;
    }
    p {
      line-height: 1.79;
      color: ${({ theme }) => theme['gray-color']};
    }
    button {
      background: ${({ theme }) => theme['primary-color']}15;
      color: ${({ theme }) => theme['primary-color']};
    }
    .feedbackSection {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: ${({ theme }) => theme['extra-light-color']};
      .author {
        color: ${({ theme }) => theme['gray-color']};
        img {
          width: 50px;
          border-radius: 50%;
          ${({ theme }) => (theme.rtl ? 'margin-left' : 'margin-right')} : 10px;
        }
        span {
          font-size: 14px;
          font-weight: 500;
        }
      }
      .feedback {
        span {
          font-size: 13px;
          ${({ theme }) => (!theme.rtl ? 'margin-left' : 'margin-right')} : 10px;
          color: ${({ theme }) => theme['extra-light-color']};
          display: inline-flex;
          align-items: center;
          svg {
            margin: 0 5px;
            cursor: pointer;
            color: ${({ theme }) => theme['light-gray-color']};
          }
        }
      }
    }
  }
`;

const SampleCardFour = ({ item }) => {
  const { content, title, img } = item;
  return (
    <CardWrapper>
      <img src={`../../../${img}`} alt="" />
      <figcaption>
        <h4>
          <span>Web Development</span>
          <span>01 July 2020 </span>
        </h4>
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="feedbackSection">
          <div className="author">
            <img src={'../../../static/img/chat-author/t1.jpg'} alt="" />
            <span>Burns Marks</span>
          </div>
          <div className="feedback">
            <span className="like">
              <FeatherIcon icon="heart" size={14} />
              70
            </span>
            <span className="view">
              <FeatherIcon icon="eye" size={14} />
              120
            </span>
          </div>
        </div>
      </figcaption>
    </CardWrapper>
  );
};

SampleCardFour.propTypes = {
  item: propTypes.object,
};

SampleCardFour.defaultProps = {
  item: {
    id: 1,
    title: 'How to Use Apples Products',
    content:
      'Lorem Ipsum is simply dummy text of the printing printer took a galley of type and scrambled and typesetting industry.',
    img: 'static/img/sampleCards/6.png',
  },
};

export default SampleCardFour;
