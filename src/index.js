// 1) 16925 - Tener la variable React en scope
import React from "react";
// 2) Tener la variable ReactDom en scope
import ReactDOM from "react-dom";
// 3) Tener un componente de React
import App from "./App"

// 4) Tener una función render corriendo
ReactDOM.render(<App/>,document.querySelector("#root"))


//1) Todos los componentes de React son funciones
// 2) Todos los componentes de React tienen que retornar algo. La función principal de un componente es dibujar minimamente algo. Cada componente retorna UNA sola cosa
// 3) Todos los componentes de React arrancan en mayúscula
// 4) Todos los componentes se usan/ejecutan en JSX
// * Fragmento : etiqueta vacia