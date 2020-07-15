import React from 'react';

function validInput(){
  const input = document.querySelector('input').value;
  const result = document.getElementById('result');

  for(var i = 0; i < input.length; i++){
    if(input[i] != 0 && input[i] != 1){
      result.innerHTML = `O número ${input[i]} está errado, favor inserir 0 ou 1.`;
      result.style = "color: yellow;"
      return;
    }
  }

  const converted = parseInt(input, 2).toString(10);
  result.innerHTML = converted;

}


function App() {
  return (
    <div className="App">
      <div>
        <span>Binary: </span>
        <input type="text" maxLength={8} onBlur={() => validInput()}/>
      </div>
      <div>
        <span>Output: </span>
        <span id="result"></span>
      </div>
    </div>
    // Quando converter, se tiver letra ou algo diff 0/1 vai avisar
  );
}

export default App;
