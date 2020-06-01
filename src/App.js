import React from "react";
import TarjetaFruta from "./components/TarjetaFruta";
const frutas = [
  { id: 1, name: 1, price: "5" },
  { id: 2, name: "Naranja", price: 1.5 },
  { id: 3, name: "Kiwi", price: 3.3 },
];

const App = () => (
  <div>
    {frutas.map((fruta) => (
      <TarjetaFruta key={fruta.id} fruta={fruta}></TarjetaFruta>
    ))}
  </div>
);

export default App;
