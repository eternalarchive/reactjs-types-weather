import React from 'react';
import * as S from './HeaderStyle';
import styled from 'styled-components';

function LightDartModeButton() {
  const changeMode = () => {

  };

  return (
    <div>
      <S.ModeText>Light</S.ModeText>
      <S.ModeButtonBg>
        <S.ChangeModeButton onClick={changeMode} />
      </S.ModeButtonBg>
    </div>
  );
};

export default LightDartModeButton;
