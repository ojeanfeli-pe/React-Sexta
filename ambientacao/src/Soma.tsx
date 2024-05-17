import React, { useState } from 'react';
//1 - Nomeação: Um componente React DEVE começar com uma letra maiúscula.
//2 - O Componente DEVE ser funções do JS/TS.
//3 - O Componente DEVE retornar APENAS um único elemento pai HTML.




//1 - Exibir valor do contador no HTML
//2 - Realizar o exercício da soma
function Soma(){
  const [contador, setContador] = useState(0);
  function clicar(){
    setContador(contador + 1);
    console.log(contador);
  }
  return (
    <div>
      <h1>Componente da Soma</h1>
      <label>Número 1</label>
      <input type="text"/><br />
      <label>Número 2</label>
      <input type="text"/><br />
      <button onClick={clicar} >Calcular</button>  
    </div>
  );
}


//4 - O Componente DEVE ser exportado.
export default Soma;
