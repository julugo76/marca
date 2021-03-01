import React from 'react';
/*import Header from './components/Header';
import ListaProductos from './components/ListaProductos';
import NuevoProducto from './components/NuevoProducto';*/
import Principal from './components/Principal';

//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  
  return (
    <>
     <Principal/>
      {/*
       <ListaProductos
        listaProductos={listaProductos}
      <NuevoProducto
      guardarListaProductos={guardarListaProductos}
    
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={ListaProductos()}></Route>
          <Route exact path="/productos/nuevo" component={NuevoProducto}></Route>

        </Switch>
    </Router> */}
    </>
  );
}

export default App;
