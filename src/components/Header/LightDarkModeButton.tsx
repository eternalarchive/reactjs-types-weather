import React from 'react';
import * as S from './HeaderStyle';

type LightDartModeButtonProps = {
  mode: string;
  changeMode: (mode: string) => void;
};

function LightDartModeButton({ mode, changeMode }: LightDartModeButtonProps) {
  const selectMode = () => {
    changeMode(mode === 'light' ? 'dark' : 'light');
  };

  return (
    <div>
      <S.ModeIcon className="fas fa-sun" />
      <S.ModeButtonBg>
        <S.ChangeModeButton onClick={selectMode} mode={mode} aria-label={`현재 ${mode} 클릭시 ${mode === 'light' ? '다크모드' : '라이트모드'}`}/>
      </S.ModeButtonBg>
      <S.ModeIcon className="fas fa-moon" />
    </div>
  );
}

export default LightDartModeButton;
