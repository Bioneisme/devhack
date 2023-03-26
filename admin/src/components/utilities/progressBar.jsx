import React from 'react';
import Styled from 'styled-components';
import propTypes from 'prop-types';

const SVG = Styled.svg`
    #Path_1042{        
        stroke-dasharray: 312;
        stroke-dashoffset: ${({ percent }) => (312 * (100 - percent)) / 100};
    }
`;

function HalfProgressBar({ percent }) {
  return (
    <SVG
      percent={percent}
      xmlns="http://www.w3.org/2000/svg"
      width="225.324"
      height="117.766"
      viewBox="0 0 225.324 117.766"
    >
      <g id="Group_1657" data-name="Group 1657" transform="translate(-536.893 -818.88)">
        <text
          id="_70_"
          data-name="70%"
          transform="translate(618 907)"
          fontSize="30"
          fontFamily="Inter-Bold, Inter"
          fontWeight="700"
        >
          <tspan x="0" y="0">
            {percent}%
          </tspan>
        </text>
        <text
          id="Progress"
          transform="translate(619 931)"
          fill="#868eae"
          fontSize="15"
          fontFamily="Inter-Regular, Inter"
        >
          <tspan x="0" y="0">
            Progress
          </tspan>
        </text>
        <path
          id="Path_1041"
          data-name="Path 1041"
          d="M253.5,399.119c.718-56.767,49.862-102.114,106.9-100.622,54.969,1.437,100.569,45.944,101.22,100.622"
          transform="translate(292 528.92)"
          fill="none"
          stroke="#e8faf4"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="17"
        />
        <path
          id="Path_1042"
          data-name="Path 1042"
          d="M253.5,399.119c.718-56.767,49.862-102.114,106.9-100.622,54.969,1.437,100.569,45.944,101.22,100.622"
          transform="translate(292 528.92)"
          fill="none"
          stroke="#20c997"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="17"
        />
      </g>
    </SVG>
  );
}

HalfProgressBar.defaultProps = {
  percent: 80,
};

HalfProgressBar.propTypes = {
  percent: propTypes.number,
};

export default HalfProgressBar;
