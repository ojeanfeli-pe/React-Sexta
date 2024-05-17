import React from 'react';
import Soma from './Soma';
//1 - Nomeação: Um componente React DEVE começar com uma letra maiúscula.
//2 - O Componente DEVE ser funções do JS/TS.
//3 - O Componente DEVE retornar APENAS um único elemento pai HTML.

function App() {
  return (
    <div>
      <Soma></Soma>
    </div>
  );
}


//4 - O Componente DEVE ser exportado.
export default App;
