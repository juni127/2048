import React from 'react';
import {
  RecoilRoot,
} from 'recoil';

import UI from './components/UI';
import Tabuleiro from './components/Tabuleiro';

function App() {
  return (
    <RecoilRoot>
      <UI />
      <Tabuleiro />
    </RecoilRoot>
  );
}

export default App;
