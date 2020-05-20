import React from 'react';
import styled from 'styled-components';

const StyledButtonBack = styled.div`
  background-color: red;
  position: relative;
  width: 30px;
  height: 15px;
  border-radius: 15px;
`;

const StyledChangeButton = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  width: 15px;
  height: 15px;
  border-radius: 15px;
`;

function LightDartMode() {
  const changeMode = () => {
  };

  return (
    <div>
      <span>Light</span>
      <StyledButtonBack>
        <StyledChangeButton onClick={changeMode} />
      </StyledButtonBack>
    </div>
  );
};

export default LightDartMode;
