import React from 'react';
import propTypes from 'prop-types';

function SwRocket({ size, color, stroke, strokeWidth }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 20.209 16.841">
      <path
        id="Path_964"
        data-name="Path 964"
        d="M27.945,7.95a.631.631,0,0,0-.658-.045L8.34,17.8a.632.632,0,0,0,.088,1.158l5.267,1.8,11.217-9.591-8.68,10.457,8.827,3.016a.631.631,0,0,0,.829-.505L28.2,8.557A.63.63,0,0,0,27.945,7.95Z"
        transform="translate(-8.001 -7.833)"
        fill={color}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

function SwShieldCheck({ size, color, stroke, strokeWidth }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 20.867 24.504">
      <g id="surface1" transform="translate(0 0.001)">
        <path
          id="Path_798"
          data-name="Path 798"
          d="M125.11,158.457a4.669,4.669,0,1,0,4.669,4.669A4.674,4.674,0,0,0,125.11,158.457Zm2.772,3.79-3.345,3.345a.719.719,0,0,1-1.017,0l-1.278-1.278a.719.719,0,1,1,1.017-1.017l.77.77,2.837-2.836a.719.719,0,1,1,1.017,1.017Zm0,0"
          transform="translate(-114.677 -150.874)"
          fill={color}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
        <path
          id="Path_799"
          data-name="Path 799"
          d="M20.843,6.648V6.629c-.011-.235-.018-.484-.022-.762a2.6,2.6,0,0,0-2.445-2.544A10.078,10.078,0,0,1,11.515.432L11.5.417a1.568,1.568,0,0,0-2.131,0L9.352.432A10.079,10.079,0,0,1,2.493,3.323,2.6,2.6,0,0,0,.048,5.867c0,.275-.011.524-.022.761v.044C-.03,9.546-.1,13.121,1.1,16.367a12.34,12.34,0,0,0,2.96,4.611A15.486,15.486,0,0,0,9.852,24.4a1.794,1.794,0,0,0,.237.065,1.754,1.754,0,0,0,.689,0,1.8,1.8,0,0,0,.238-.065A15.5,15.5,0,0,0,16.8,20.976a12.357,12.357,0,0,0,2.96-4.612C20.965,13.108,20.9,9.526,20.843,6.648ZM10.433,18.358a6.107,6.107,0,1,1,6.107-6.107A6.114,6.114,0,0,1,10.433,18.358Zm0,0"
          transform="translate(0 0)"
          fill={color}
          strokeWidth={strokeWidth}
          stroke={stroke}
        />
      </g>
    </svg>
  );
}

function SwPenTool({ size, color, stroke, strokeWidth }) {
  return (
    <svg id="pen" xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 20.073 20.073">
      <g id="Group_1005" data-name="Group 1005">
        <g id="Group_1004" data-name="Group 1004">
          <path
            id="Path_828"
            data-name="Path 828"
            d="M19.485,0H17.094a.588.588,0,0,0-.588.588v.588H11.693a1.754,1.754,0,0,0-3.312,0H3.568V.588A.588.588,0,0,0,2.98,0H.588A.588.588,0,0,0,0,.588V2.94a.588.588,0,0,0,.588.588H2.98a.588.588,0,0,0,.588-.588v-.6H5.983A7.672,7.672,0,0,0,2.435,8.367a1.759,1.759,0,1,0,1.174.027A6.453,6.453,0,0,1,8.475,2.568a1.749,1.749,0,0,0,3.123,0,6.453,6.453,0,0,1,4.866,5.826,1.769,1.769,0,1,0,1.174-.027A7.658,7.658,0,0,0,14.09,2.352h2.415V2.94a.588.588,0,0,0,.588.588h2.392a.588.588,0,0,0,.588-.588V.588A.588.588,0,0,0,19.485,0Z"
            fill={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        </g>
      </g>
      <g id="Group_1007" data-name="Group 1007" transform="translate(6.01 17.682)">
        <g id="Group_1006" data-name="Group 1006">
          <path
            id="Path_829"
            data-name="Path 829"
            d="M161.321,452.662A2.392,2.392,0,0,0,159.085,451h-3.528a2.392,2.392,0,0,0-2.237,1.662.579.579,0,0,0,.572.729h6.858A.579.579,0,0,0,161.321,452.662Z"
            transform="translate(-153.294 -451)"
            fill={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        </g>
      </g>
      <g id="Group_1009" data-name="Group 1009" transform="translate(4.744 5.154)">
        <g id="Group_1008" data-name="Group 1008">
          <path
            id="Path_830"
            data-name="Path 830"
            d="M131.487,138.368l-4.606-6.909v5.579a1.764,1.764,0,1,1-1.176,0v-5.579l-4.606,6.909a.588.588,0,0,0,.074.742,7.426,7.426,0,0,1,2.036,3.962,3.5,3.5,0,0,1,1.32-.262h3.528a3.5,3.5,0,0,1,1.32.261,7.425,7.425,0,0,1,2.036-3.962A.588.588,0,0,0,131.487,138.368Z"
            transform="translate(-121 -131.459)"
            fill={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        </g>
      </g>
      <g id="Group_1011" data-name="Group 1011" transform="translate(9.449 11.801)">
        <g id="Group_1010" data-name="Group 1010">
          <path
            id="Path_831"
            data-name="Path 831"
            d="M241.588,301a.588.588,0,1,0,.588.588A.589.589,0,0,0,241.588,301Z"
            transform="translate(-241 -301)"
            fill={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        </g>
      </g>
    </svg>
  );
}

function SwNotification({ size, color, stroke, strokeWidth }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 16.486 20">
      <g id="notification_1_" data-name="notification (1)" transform="translate(-44.98 0)">
        <path
          id="Path_817"
          data-name="Path 817"
          d="M178.822,476.973a3.054,3.054,0,0,0,5.091,0Z"
          transform="translate(-128.613 -458.34)"
          fill={color}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
        <path
          id="Path_818"
          data-name="Path 818"
          d="M58.673,11.964a1.406,1.406,0,0,1-.362-.627A5.528,5.528,0,0,1,55.252.738a4.624,4.624,0,0,0-5.674.518,4.808,4.808,0,0,0-1.521,3.055c-.855,7.106-.816,6.787-.818,6.8a1.406,1.406,0,0,1-.4.856l-1.1,1.1a2.575,2.575,0,0,0,1.821,4.4h10.4a2.575,2.575,0,0,0,1.821-4.4Z"
          transform="translate(0 0)"
          fill={color}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
        <path
          id="Path_819"
          data-name="Path 819"
          d="M253.174,44.877a4.364,4.364,0,0,0-5.155-4.278h0a4.356,4.356,0,1,0,1.845,8.512h0A4.364,4.364,0,0,0,253.174,44.877Zm-3.438,1.563a.586.586,0,1,1-1.172,0V43.9h-.551a.586.586,0,1,1,0-1.172h1.137a.586.586,0,0,1,.586.586Z"
          transform="translate(-191.708 -38.94)"
          fill={color}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      </g>
    </svg>
  );
}

function SwUsers({ size, color, stroke, strokeWidth }) {
  return (
    <svg
      id="Group_1013"
      data-name="Group 1013"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      viewBox="0 0 20.352 14.246"
    >
      <g id="Group_1012" data-name="Group 1012">
        <path
          id="Path_832"
          data-name="Path 832"
          d="M258.544,111.755A2.544,2.544,0,1,0,256,109.211,2.536,2.536,0,0,0,258.544,111.755Z"
          transform="translate(-243.789 -104.632)"
          fill={color}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
        <path
          id="Path_833"
          data-name="Path 833"
          d="M88.386,70.106a3.053,3.053,0,1,0-3.053-3.053A3.047,3.047,0,0,0,88.386,70.106Z"
          transform="translate(-81.263 -64)"
          fill={color}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
        <path
          id="Path_834"
          data-name="Path 834"
          d="M7.123,234.667c-2.376,0-7.123,1.191-7.123,3.562v2.544H7.123v-2.29a4.026,4.026,0,0,1,2.412-3.531A12.154,12.154,0,0,0,7.123,234.667Z"
          transform="translate(0 -226.526)"
          fill={color}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
        <path
          id="Path_835"
          data-name="Path 835"
          d="M197.6,256c-1.867,0-5.6.936-5.6,2.8v2.29h11.194V258.8C203.194,256.936,199.464,256,197.6,256Z"
          transform="translate(-182.842 -246.842)"
          fill={color}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      </g>
    </svg>
  );
}

function SwLayers({ size, color, stroke, strokeWidth }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 20.124 20.119">
      <g id="layers" transform="translate(0 -0.062)">
        <g id="Group_995" data-name="Group 995" transform="translate(0 0.062)">
          <g id="Group_994" data-name="Group 994" transform="translate(0)">
            <path
              id="Path_814"
              data-name="Path 814"
              d="M19.278,5.348,10.984.323a1.761,1.761,0,0,0-1.845,0L.846,5.348a1.769,1.769,0,0,0,0,3.019l8.294,5.1a1.762,1.762,0,0,0,1.844,0l8.293-5.1a1.769,1.769,0,0,0,0-3.019Z"
              transform="translate(0 -0.062)"
              fill={color}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          </g>
        </g>
        <g id="Group_997" data-name="Group 997" transform="translate(0 9.418)">
          <g id="Group_996" data-name="Group 996" transform="translate(0)">
            <path
              id="Path_815"
              data-name="Path 815"
              d="M19.818,238.1,11.6,243.157a2.951,2.951,0,0,1-3.073,0L.306,238.1c-.191.285-.306.224-.306.582a1.756,1.756,0,0,0,.846,1.51l8.294,5.1a1.762,1.762,0,0,0,1.844,0l8.293-5.1c.53-.324.847-.5.846-1.117A1.747,1.747,0,0,0,19.818,238.1Z"
              transform="translate(0 -238.099)"
              fill={color}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          </g>
        </g>
        <g id="Group_999" data-name="Group 999" transform="translate(0 12.562)">
          <g id="Group_998" data-name="Group 998" transform="translate(0)">
            <path
              id="Path_816"
              data-name="Path 816"
              d="M19.818,318.1,11.6,323.157a2.944,2.944,0,0,1-3.073,0L.306,318.1a1.1,1.1,0,0,0-.306.745,1.756,1.756,0,0,0,.846,1.51l8.294,5.1a1.762,1.762,0,0,0,1.844,0l8.293-5.1a1.756,1.756,0,0,0,.846-1.51A1.1,1.1,0,0,0,19.818,318.1Z"
              transform="translate(0 -318.099)"
              fill={color}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

function SwPicture({ size, color, stroke, strokeWidth }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 20.092 16.64">
      <g id="picture" transform="translate(0 -43.979)">
        <g id="Group_1017" data-name="Group 1017" transform="translate(0 43.979)">
          <g id="Group_1016" data-name="Group 1016">
            <path
              id="Path_840"
              data-name="Path 840"
              d="M18.546,43.979h-17A1.529,1.529,0,0,0,0,45.525V59.073a1.529,1.529,0,0,0,1.546,1.546h17a1.529,1.529,0,0,0,1.546-1.546V45.525A1.529,1.529,0,0,0,18.546,43.979Zm0,15.094h-17L1.534,45.526H18.546V59.073Z"
              transform="translate(0 -43.979)"
              fill={color}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          </g>
        </g>
        <g id="Group_1019" data-name="Group 1019" transform="translate(0.315 48.615)">
          <g id="Group_1018" data-name="Group 1018">
            <path
              id="Path_841"
              data-name="Path 841"
              d="M15.391,162.411a.773.773,0,0,0-1.052-.13l-6.311,4.637.915,1.246,5.723-4.205,8.138,9.819,1.19-.986Z"
              transform="translate(-8.028 -162.132)"
              fill={color}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          </g>
        </g>
        <g id="Group_1021" data-name="Group 1021" transform="translate(10.492 49.414)">
          <g id="Group_1020" data-name="Group 1020">
            <path
              id="Path_842"
              data-name="Path 842"
              d="M271.987,182.656a.773.773,0,0,0-.961,0l-3.658,2.911.962,1.209,3.178-2.529,4.207,3.329.959-1.212Z"
              transform="translate(-267.369 -182.489)"
              fill={color}
              stroke={stroke}
              strokeWidth={strokeWidth}
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

function SwClock({ size, color, stroke, strokeWidth }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 20.025 20.707">
      <g id="dashboard" transform="translate(-5.956 -5.812)">
        <g id="Group_1441" data-name="Group 1441" transform="translate(12.767 22.395)">
          <path
            id="Path_974"
            data-name="Path 974"
            d="M217.919,374.61a.825.825,0,0,1-.824.824h-3.056a.824.824,0,1,1,0-1.649h3.056A.824.824,0,0,1,217.919,374.61Z"
            transform="translate(-212.365 -373.786)"
            fill={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          <path
            id="Path_975"
            data-name="Path 975"
            d="M204.173,419.635a.825.825,0,0,1-.824.824h-4.755a.824.824,0,0,1,0-1.649h4.755A.824.824,0,0,1,204.173,419.635Z"
            transform="translate(-197.77 -416.336)"
            fill={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        </g>
        <g id="Group_1442" data-name="Group 1442" transform="translate(15.969 22.395)">
          <path
            id="Path_976"
            data-name="Path 976"
            d="M257.528,375.435H256v-1.649h1.528a.824.824,0,0,1,0,1.649Z"
            transform="translate(-256 -373.786)"
            fill={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          <path
            id="Path_977"
            data-name="Path 977"
            d="M259.2,419.635a.825.825,0,0,1-.824.824H256v-1.649h2.378A.824.824,0,0,1,259.2,419.635Z"
            transform="translate(-256 -416.336)"
            fill={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        </g>
        <path
          id="Path_978"
          data-name="Path 978"
          d="M153.025,252.034a.825.825,0,0,1-.326-1.582l3.777-1.623a.824.824,0,1,1,.651,1.515l-3.777,1.623A.822.822,0,0,1,153.025,252.034Z"
          transform="translate(-141.938 -233.24)"
          fill={color}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
        <path
          id="Path_979"
          data-name="Path 979"
          d="M224.761,220.578a1.93,1.93,0,1,1-1.93-1.93A1.932,1.932,0,0,1,224.761,220.578Z"
          transform="translate(-206.863 -204.782)"
          fill={color}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
        <path
          id="Path_980"
          data-name="Path 980"
          d="M256,222.507v-3.86a1.93,1.93,0,0,1,0,3.86Z"
          transform="translate(-240.031 -204.781)"
          fill={color}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
        <path
          id="Path_981"
          data-name="Path 981"
          d="M93.906,82.158a9.971,9.971,0,0,1-2.726,6.867.82.82,0,0,1-.6.259h-.005a.822.822,0,0,1-.583-.242L88.64,87.69a.824.824,0,0,1,1.166-1.166l.723.724a8.316,8.316,0,0,0,1.688-4.281H91.123a.824.824,0,1,1,0-1.649h1.092a8.329,8.329,0,0,0-1.841-4.442l-.74.74a.824.824,0,0,1-1.166-1.166l.744-.744a8.329,8.329,0,0,0-4.5-1.874V74.88a.824.824,0,0,1-.824.824h-.006a.825.825,0,0,1-.818-.824V73.834A8.329,8.329,0,0,0,78.6,75.689l.762.763a.824.824,0,1,1-1.166,1.166l-.763-.763A8.329,8.329,0,0,0,75.573,81.3h1.044a.824.824,0,0,1,0,1.649H75.568A8.339,8.339,0,0,0,77.147,87.1l.707-.707a.824.824,0,0,1,1.166,1.166l-1.293,1.293a.859.859,0,0,1-.084.09.823.823,0,0,1-1.132-.024L76.5,88.91,76.5,88.9l-.018-.017a9.989,9.989,0,0,1-2.6-6.728v-.029s0-.006,0-.009a10.024,10.024,0,0,1,10.006-9.975h.006A10.023,10.023,0,0,1,93.906,82.158Z"
          transform="translate(-67.925 -66.333)"
          fill={color}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
        <path
          id="Path_982"
          data-name="Path 982"
          d="M265.91,82.158a9.971,9.971,0,0,1-2.726,6.867.82.82,0,0,1-.6.259h-.005a.822.822,0,0,1-.583-.242l-1.351-1.351a.824.824,0,0,1,1.166-1.166l.723.724a8.315,8.315,0,0,0,1.688-4.281h-1.095a.824.824,0,0,1,0-1.649h1.092a8.329,8.329,0,0,0-1.841-4.442l-.74.74a.824.824,0,1,1-1.166-1.166l.744-.744a8.329,8.329,0,0,0-4.5-1.874v1.046a.824.824,0,0,1-.824.824h-.006v-3.56h.006A10.023,10.023,0,0,1,265.91,82.158Z"
          transform="translate(-239.929 -66.334)"
          fill={color}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      </g>
    </svg>
  );
}

function SwSend({ size, color, stroke, strokeWidth }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 20.063 11.899">
      <g id="send" transform="translate(-8.011 -11.167)">
        <path
          id="Path_1015"
          data-name="Path 1015"
          d="M26.948,11.735a1.4,1.4,0,0,0-1.111-.568H13.76A1.5,1.5,0,0,0,12.326,12.5l-1.337,8.7a1.71,1.71,0,0,0,.323,1.3,1.4,1.4,0,0,0,1.111.568H24.5a1.5,1.5,0,0,0,1.434-1.335l1.337-8.7a1.71,1.71,0,0,0-.323-1.3Zm-1.783,3.6-5.279,2.407a1.63,1.63,0,0,1-.715.155,1.662,1.662,0,0,1-.823-.21l-4.8-2.6.216-1.41,5.13,2.783a.594.594,0,0,0,.515.018l6-2.737ZM27,14.325l.066-.457A.661.661,0,0,1,27,14.325Z"
          transform="translate(0.783)"
          fill={color}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
        <g id="Group_1108" data-name="Group 1108" transform="translate(8.011 12.009)" opacity="0.5">
          <path
            id="Path_1016"
            data-name="Path 1016"
            d="M11.384,13.52H8.855a.844.844,0,1,1,0-1.687h2.529a.844.844,0,1,1,0,1.687Z"
            transform="translate(-8.011 -11.833)"
            fill={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          <path
            id="Path_1017"
            data-name="Path 1017"
            d="M10.54,16.186H8.855a.843.843,0,1,1,0-1.686H10.54a.843.843,0,1,1,0,1.686Z"
            transform="translate(-8.011 -11.127)"
            fill={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          <path
            id="Path_1018"
            data-name="Path 1018"
            d="M9.7,18.853H8.855a.844.844,0,1,1,0-1.687H9.7a.844.844,0,0,1,0,1.687Z"
            transform="translate(-8.011 -10.421)"
            fill={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        </g>
      </g>
    </svg>
  );
}

function SwGraph({ size, color, stroke, strokeWidth }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 20.043 19.925">
      <g id="graphic" transform="translate(0 -1.5)">
        <path
          id="Path_992"
          data-name="Path 992"
          d="M59.445,318.5H56.313a.313.313,0,0,0-.313.313v6.89a.313.313,0,0,0,.313.313h3.132a.313.313,0,0,0,.313-.313v-6.89A.313.313,0,0,0,59.445,318.5Z"
          transform="translate(-53.808 -304.591)"
          fill={color}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
        <g id="Group_1446" data-name="Group 1446" transform="translate(2.192 12.343)">
          <path
            id="Path_993"
            data-name="Path 993"
            d="M56.94,325.7v-6.89a.313.313,0,0,1,.313-.313h-.94a.313.313,0,0,0-.313.313v6.89a.313.313,0,0,0,.313.313h.94A.313.313,0,0,1,56.94,325.7Z"
            transform="translate(-56 -316.934)"
            fill={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          <path
            id="Path_994"
            data-name="Path 994"
            d="M211.445,278.5h-3.132a.313.313,0,0,0-.313.313v8.456a.313.313,0,0,0,.313.313h3.132a.313.313,0,0,0,.313-.313v-8.456A.313.313,0,0,0,211.445,278.5Z"
            transform="translate(-202.05 -278.5)"
            fill={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        </g>
        <g id="Group_1447" data-name="Group 1447" transform="translate(8.142 8.899)">
          <path
            id="Path_995"
            data-name="Path 995"
            d="M208.939,287.269v-8.456a.313.313,0,0,1,.313-.313h-.94a.313.313,0,0,0-.313.313v8.456a.313.313,0,0,0,.313.313h.94A.313.313,0,0,1,208.939,287.269Z"
            transform="translate(-208 -275.055)"
            fill={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
          <path
            id="Path_996"
            data-name="Path 996"
            d="M363.445,190.5h-3.132a.313.313,0,0,0-.313.313v11.9a.313.313,0,0,0,.313.313h3.132a.313.313,0,0,0,.313-.313v-11.9A.313.313,0,0,0,363.445,190.5Z"
            transform="translate(-354.05 -190.5)"
            fill={color}
            stroke={stroke}
            strokeWidth={strokeWidth}
          />
        </g>
        <path
          id="Path_997"
          data-name="Path 997"
          d="M360.94,202.714v-11.9a.313.313,0,0,1,.313-.313h-.94a.313.313,0,0,0-.313.313v11.9a.313.313,0,0,0,.313.313h.94A.313.313,0,0,1,360.94,202.714Z"
          transform="translate(-345.908 -181.601)"
          fill={color}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
        <path
          id="Path_998"
          data-name="Path 998"
          d="M19.73,495.126H.313a.313.313,0,0,1,0-.626H19.73a.313.313,0,0,1,0,.626Z"
          transform="translate(0 -473.701)"
          fill={color}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
        <path
          id="Path_999"
          data-name="Path 999"
          d="M34.266,1.657a.626.626,0,0,0-.492-.152l-2.505.313a.626.626,0,0,0,.155,1.243l.942-.118a22.387,22.387,0,0,1-9.916,6.994,21.394,21.394,0,0,1-5.842,1.271.626.626,0,0,0,.019,1.252h.019a22.175,22.175,0,0,0,6.181-1.328,24.32,24.32,0,0,0,5.65-2.878,22.918,22.918,0,0,0,4.748-4.382v.76a.626.626,0,0,0,1.253,0V2.126A.626.626,0,0,0,34.266,1.657Z"
          transform="translate(-15.374)"
          fill={color}
          stroke={stroke}
          strokeWidth={strokeWidth}
        />
      </g>
    </svg>
  );
}

function SwEllipse({ size, color, stroke, strokeWidth }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} viewBox="0 0 10 10">
      <circle
        id="Ellipse_148"
        data-name="Ellipse 148"
        cx="5"
        cy="5"
        r="5"
        fill={color}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}

const defaults = {
  size: 16,
  color: '#ADB4D2',
  stroke: 'none',
  strokeWidth: 'none',
};

const types = {
  size: propTypes.number,
  color: propTypes.string,
  stroke: propTypes.string,
  strokeWidth: propTypes.string,
};

SwRocket.defaultProps = defaults;
SwRocket.propTypes = types;

SwShieldCheck.defaultProps = defaults;
SwShieldCheck.propTypes = types;

SwPenTool.defaultProps = defaults;
SwPenTool.propTypes = types;

SwNotification.defaultProps = defaults;
SwNotification.propTypes = types;

SwUsers.defaultProps = defaults;
SwUsers.propTypes = types;

SwLayers.defaultProps = defaults;
SwLayers.propTypes = types;

SwPicture.defaultProps = defaults;
SwPicture.propTypes = types;

SwClock.defaultProps = defaults;
SwClock.propTypes = types;

SwSend.defaultProps = defaults;
SwSend.propTypes = types;

SwGraph.defaultProps = defaults;
SwGraph.propTypes = types;

SwEllipse.defaultProps = defaults;
SwEllipse.propTypes = types;

export {
  SwEllipse,
  SwGraph,
  SwRocket,
  SwShieldCheck,
  SwPenTool,
  SwNotification,
  SwUsers,
  SwLayers,
  SwPicture,
  SwClock,
  SwSend,
};
