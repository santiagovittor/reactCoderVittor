import React from "react";
import ReactDOM from "react-dom";
import App from "./App"

ReactDOM.render(<App />, document.querySelector("#root"))


//1) Todos los componentes de React son funciones
// 2) Todos los componentes de React tienen que retornar algo. La función principal de un componente es dibujar minimamente algo. Cada componente retorna UNA sola cosa
// 3) Todos los componentes de React arrancan en mayúscula
// 4) Todos los componentes se usan/ejecutan en JSX
// * Fragmento : etiqueta vacia