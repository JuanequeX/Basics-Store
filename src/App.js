import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {
  //State para el listado de productos
  const [ productos, guardarProducto ] = useState([
    { id: 1, nombre: 'Camisa Untitled Azul', precio:50 },
    { id: 2, nombre: 'Camisa Untitled Naranja', precio:40 },
    { id: 3, nombre: 'Camisa Untitled Negra', precio:60 },
    { id: 4, nombre: 'Camisa Untitled Amarilla', precio:70 }
  ]);

  //State para un carrito de compras
  const [ carrito, agregarProducto ] = useState([
  ]);

  //obtener la fecha para el footer
  const fecha = new Date().getFullYear();

  return (
    <>
      <Header titulo = 'Tienda virtual' />
      <h1>Lista de productos</h1>
        {productos.map(producto => (
          <Producto
            key = {producto.id}
            producto = {producto}
            carrito = {carrito}
            productos = {productos}
            agregarProducto = {agregarProducto}
          />
          ))}

          <Carrito
            carrito={carrito}
            agregarProducto={agregarProducto}
          />

          <Footer fecha = {fecha}

          />
    </>
  );
}

export default App;
