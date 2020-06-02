import React, { Component } from "react";
import TarjetaFruta from "./components/TarjetaFruta";

class App extends Component {
  render() {
    const frutas = [
      { id: 1, name: "Sandia", price: 5 },
      { id: 2, name: "Naranja", price: 1.5 },
      { id: 3, name: "Kiwi", price: 3.3 },
    ];

    return (
      <div>
        {frutas.map((fruta) => (
          <TarjetaFruta key={fruta.id} fruta={fruta}></TarjetaFruta>
        ))}
      </div>
    );
  }
}
export default App;
