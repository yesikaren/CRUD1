import React from "react";
import { useState } from "react";

const App = () => {
  const dataPrueba = [
    {
      id: 1,
      nombreProducto: "Queso",
      cantidad: "medio",
    },

    {
      id: 2,
      nombreProducto: "lechuga",
      cantidad: "1",
    },

    {
      id: 3,
      nombreProducto: "cebolla",
      cantidad: "1 kl",
    },

    {
      id: 4,
      nombreProducto: "espinaca",
      cantidad: "2 atado",
    },
  ];

  const [data, setData] = useState(dataPrueba);

  const guardar = (event) => {
    event.preventDefault();
    const nuevoProducto = {
      id: crypto.randomUUID(),
      nombreProducto: event.target.inputNombre.value,
      cantidad: event.target.inputCantidad.value,
    };
    setData([...data, nuevoProducto]);
    event.target.reset();
    console.log(nuevoProducto);
    // console.log(event.target.inputNombre.value)
    // console.log(event.target.inputCantidad.value)
    console.log("guardo");
  };
  return (
    <>
      <h1 className="text-3xl">lista de mercado</h1>
      <form onSubmit={guardar}>
        <label>
          Nombre Producto <input name="inputNombre" type="text" />
        </label>
        <label>
          Cantidad <input name="inputCantidad" type="text" />
        </label>
        <button className=" bg-orange-500 mx-6 rounded-lg p-2">Guardar</button>
      </form>
      <ul>
        {data.map((elemento) => (
          <li key={elemento.id} className="flex gap-2 text-xl">
            {elemento.nombreProducto}
            <span className="text-lg">{elemento.cantidad}</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
