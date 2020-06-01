import React from "react";
import styles from "./TarjetaFruta.module.css";
import PropTypes from "prop-types";

class TarjetaFruta extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
  };

  state = {
    cantidad: 0,
    fruta: this.props.fruta,
  };

  agregar = () => {
    this.setState({
      cantidad: this.state.cantidad + 1,
    });
  };

  quitar = () => {
    this.setState({
      cantidad: this.state.cantidad - 1,
    });
  };

  limpiar = () => {
    this.setState({
      cantidad: 0,
    });
  };

  render() {
    const { name, price } = this.state.fruta;
    const { cantidad } = this.state;

    const hasItems = cantidad > 0;
    const activeClass = hasItems ? styles["card-Active"] : "";
    const clases = styles.card + " " + activeClass;

    return (
      <div className={clases}>
        <h3>{name}</h3>
        <div>Cantidad: {cantidad}</div>
        <button onClick={this.agregar}>+</button>
        <button onClick={this.quitar}>-</button>
        <button onClick={this.limpiar}>Limpiar</button>
        <hr />
        <p>${price}</p>
        <p>Total: ${price * cantidad}</p>
      </div>
    );
  }
}

export default TarjetaFruta;
