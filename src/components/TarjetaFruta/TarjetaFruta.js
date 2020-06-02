import React from "react";
import styles from "./TarjetaFruta.module.css";
import PropTypes from "prop-types";

class TarjetaFruta extends React.Component {
  state = {
    cantidad: 0,
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

  static defaultProps = {
    fruta: { id: 0, name: "Cambur", price: 4 },
  };

  render() {
    const { name, price } = this.props.fruta;
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

TarjetaFruta.propTypes = {
  fruta: PropTypes.shape({
    name: PropTypes.string,
    price: PropTypes.number,
  }),
};
export default TarjetaFruta;
