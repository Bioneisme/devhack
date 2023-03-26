import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';
import { Button } from '../../buttons/buttons';

const CardWrapper = styled.figure`
  background: #fff;
  border-radius: 10px;
  margin-bottom: 0;
  img {
    width: 100%;
  }
  figcaption {
    padding: 25px;
    h2 {
      margin: 0px 0 10px 0;
      font-size: 18px;
      font-weight: 600;
    }
    p {
      line-height: 1.79;
      margin-bottom: 15px;
      color: ${({ theme }) => theme['gray-color']};
    }
    button {
      background: ${({ theme }) => theme['primary-color']}15;
      color: ${({ theme }) => theme['primary-color']};
      font-size: 15px;
      font-weight: 600;
    }
  }
`;

const SampleCardOne = ({ item }) => {
  const { content, title, img } = item;
  return (
    <CardWrapper>
      <img src={`../../../${img}`} alt="" />
      <figcaption>
        <h2>{title}</h2>
        <p>{content}</p>
        <Button type="primary" size="large">
          View More
        </Button>
      </figcaption>
    </CardWrapper>
  );
};

SampleCardOne.propTypes = {
  item: propTypes.object,
};

SampleCardOne.defaultProps = {
  item: {
    id: 1,
    title: 'Technology Change the World',
    content: 'Lorem Ipsum is simply dummy text of the printer took a galley of type and scrambled',
    img: 'static/img/sampleCards/1.png',
  },
};

export default SampleCardOne;
