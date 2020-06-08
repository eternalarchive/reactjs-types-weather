import React from 'react';
import * as S from './HeaderStyle';

type LightDartModeButtonProps = {
  mode: boolean;
  changeMode: (mode: boolean) => void;
};

function LightDartModeButton({ mode, changeMode }: LightDartModeButtonProps) {
  const selectMode = () => {
    changeMode(!mode);
  };

  return (
    <div>
      <S.ModeIcon className="fas fa-sun" />
      <S.ModeButtonBg>
        <S.ChangeModeButton onClick={selectMode} mode={mode} />
      </S.ModeButtonBg>
      <S.ModeIcon className="fas fa-moon" />
    </div>
  );
}

export default LightDartModeButton;
