import React from 'react';
import LottieLoader from 'react-lottie-loader';
import styled from 'styled-components';
import Lottie from '../assets/lotties/walking-broccoli.json';

const LoadingSpinner: React.FC = ({ children }) => {
  return (
    <LoadingSpinnerWapper>
      {children}
      <div style={{ height: '150px' }}>
        <LottieLoader animationData={Lottie} />
      </div>
    </LoadingSpinnerWapper>
  );
};

export default LoadingSpinner;

const LoadingSpinnerWapper = styled.div`
  width: 500px;
  height: 500px;
  align-self: center;
`;
