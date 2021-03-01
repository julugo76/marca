import React from 'react';
import { nanoid } from 'nanoid';
import ListaProductos from './ListaProductos';
import Container from '@material-ui/core/Container';
//import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
//import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
//import Button from '@material-ui/core/Button';
//import Menu from './Menu';

const useStyles = makeStyles((theme) => ({
    imgmarca: {
        //paddingLeft: 137,
        width: 120,
        height: 80,

    },
    imgmenu: {
        alignSelf: 'center',
        width: 47,
        height: 28,
    },
    containerTop: {
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: '#000000', marginLeft: 'auto', marginRigth: 'auto', marginTop: '5px', height: '80px',
        padding: 0
    },
    containerBot: {
        backgroundColor: '#ffffff', marginLeft: 'auto', marginRigth: 'auto', marginTop: '5px', height: '800px',
        padding: 0, borderRadius: 15,
    }
}));

const Principal = () => {
    const Productos = [];
    //Genera registros
    let inv = '', cant = '0', cat='';

    for (let i = 1; i < 7; i++) {

        if (i === 1 || i === 3 ) {
            inv = 'En stock'
            cant = '20';
            cat='Tenis';
        } else if (i === 4 || i === 6) {
            inv = 'Limitado';
            cant = '10';
            cat='Zapato';
        } else {
            inv = 'Agotado'
            cant = '0';
            cat='Bota'
        }
        let producto = { 
            id: nanoid(), 
            imagen: 'zapato.png', 
            descripcion: 'Zapato' + i, 
            composicion: '84% Poliester, 16% Elástano', 
            categoria: cat, 
            precio: String(342.97-i), 
            stock: cant, 
            color:'Blanco',
            marca:'Nike',
            target: "Niños",
            inventario: inv };
       // let producto = { id: nanoid(), imagen: 'zapato.png', nombre: 'Zapato' + i, descripcion: '84% Poliester, 16% Elástano', categoria: cat, precio: 342.97-i, cantidad: cant, inventario: inv };
        Productos.push(producto);
        

    }
    /*const Productos = [
        { id: 1, imagen: 'zapato.png', nombre: 'Zapato1', descripcion: '84% Poliester, 16% Elástano', categoria: 'Zapato', precio: 342.97, cantidad: 30, inventario: "En stock" },
        { id: 2, imagen: 'zapato.png', nombre: 'Zapato2', descripcion: '84% Poliester, 16% Elástano', categoria: 'Zapato', precio: 342.97, cantidad: 30, inventario: "Limitado" },
        { id: 3, imagen: 'zapato.png', nombre: 'Zapato3', descripcion: '84% Poliester, 16% Elástano', categoria: 'Zapato', precio: 342.97, cantidad: 30, inventario: "En stock" },
        { id: 4, imagen: 'zapato.png', nombre: 'Zapato4', descripcion: '84% Poliester, 16% Elástano', categoria: 'Zapato', precio: 342.97, cantidad: 30, inventario: "En stock" },
        { id: 5, imagen: 'zapato.png', nombre: 'Zapato5', descripcion: '84% Poliester, 16% Elástano', categoria: 'Zapato', precio: 342.97, cantidad: 30, inventario: "Agotado" },
        { id: 6, imagen: 'zapato.png', nombre: 'Zapato6', descripcion: '84% Poliester, 16% Elástano', categoria: 'Zapato', precio: 342.97, cantidad: 30, inventario: "En stock" },

    ];*/
    
    const classes = useStyles();
    return (
        <>
            <Container fixed className={classes.containerTop}>
                <img src="../static/img/Logo.svg" className={classes.imgmarca} alt="" />
                <img src="../static/img/menu.svg" className={classes.imgmenu} alt="" />
            </Container>
            <Container fixed className={classes.containerBot}>
                <Card style={{ marginRight: 0 }}>
                    <CardContent>
                        <ListaProductos
                            Productos={Productos}
                            
                        />
                    </CardContent>

                </Card>

            </Container>
        </>
    );
}

export default Principal;