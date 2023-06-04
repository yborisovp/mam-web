import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGear } from '@fortawesome/free-solid-svg-icons';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import "./notfound.scss";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const SVCSteeringWheel = styled(FontAwesomeIcon)`
  animation: ${rotate} 10s linear infinite;
`;

const NotFound = () => {
  return (
    <div className='not-found d-flex flex-column justify-items-center justify-content-center align-items-center'>
      <h1 className='text-center'>404 - Страница не найдена</h1>
      <p className='text-center'>Извините, запрашиваемая страница не найдена.</p>
      <SVCSteeringWheel icon={faGear} size="2x" color="#fff" />
    </div>
  );
};

export default NotFound;
