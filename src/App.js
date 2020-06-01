import React from "react";
import TarjetaFruta from "./componentes/TarjetaFruta";

const App = () => (
  <div>
    <TarjetaFruta name={"Sandia"} price={5.0}></TarjetaFruta>
    <TarjetaFruta name={"Naranja"} price={1.5}></TarjetaFruta>
    <TarjetaFruta name="Kiwi" price={3.3}></TarjetaFruta>
  </div>
);

export default App;
