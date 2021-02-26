import React, { useState } from 'react';
import Inventario from './Inventario';
import NuevoProducto from './NuevoProducto';
//import Menu from './Menu';
import Imagen from './Imagen';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
//import AddIcon from '@material-ui/icons/Add';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import EditIcon from '@material-ui/icons/Edit';

//import SearchIcon from '@material-ui/icons/Search';
/*import { makeStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';
import { green, purple, grey } from '@material-ui/core/colors';

*/
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Modal from '@material-ui/core/Modal';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';


function getModalStyle() {
    //const top = 50 + rand();
    //const left = 50 + rand();
    const top = 50;
    const left = 50;
    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}
const useStylesM = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 1200,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

const StyledTableCell = withStyles((theme) => ({
    head: {
        //backgroundColor: theme.palette.common.green,
        backgroundColor: '#e0e0e0',
        color: theme.palette.common.black,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 750,
    },
    add: {
        width: 58,
        height: 58,
        cursor: 'pointer',
    },
    search: {
        width: 19,
        height: 19,
    },
    divC: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    titulo: {
        paddingLeft: 0
    },
    contenedor: {
        backgroundColor: 'white',
        padding: 0,
        maxWidth: 1643,
        maxHeight: 905,
        minWidth: 750,
        minHeight: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    contenedorP: {
    }
});

const ListaProductos = ({ Productos }) => {
    //state de la lista de productos
    const [listaProductos, guardarListaProductos] = useState(Productos);
    //State de la busqueda
    const [filterStr, actFilterStr] = useState('')

    //tipos de ordenamiento en columna cantidad
    const sortTypes = {
        upP: {
            class: 'ArrowDropUpIcon',
            fn: (a, b) => a.precio - b.precio
        },
        upC: {
            class: 'ArrowDropUpIcon',
            fn: (a, b) => a.cantidad - b.cantidad
        },
        downP: {
            class: 'ArrowDropDownIcon',
            fn: (a, b) => b.precio - a.precio
        }, downC: {
            class: 'ArrowDropDownIcon',
            fn: (a, b) => b.cantidad - a.cantidad
        }
        ,
        defaultP: {
            class: 'sort',
            fn: (a, b) => a
        },
        defaultC: {
            class: 'sort',
            fn: (a, b) => a
        }
    };
    //state de los ordenamientos
    const [currentSortP, actSortP] = useState('defaultP');
    const [currentSortC, actSortC] = useState('defaultC');
    const [currentSort, actSort] = useState('defaultC');


    const classes = useStyles();
    const classes2 = useStylesM();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = useState(false);
    const [deleteopen, setDeleteOpen] = useState(false);
    const [iddelete, setIdDelete] = useState();



    //abre modal de borrado
    const handleDeleteOpen = () => {
        setDeleteOpen(true);
    };
    //cierra modal de borrado
    const handleDeleteClose = () => {
        setDeleteOpen(false);
    };
    //abre modal de nuevo
    const handleOpen = () => {
        setOpen(true);
    };
    //cierra modal de nuevo
    const handleClose = () => {
        setOpen(false);
    };

    //Elimina y cierra modal
    const handleDeleteandClose = () => {
        handleDeleteClose();
        const nuevosProductos = listaProductos.filter(producto => producto.id !== iddelete);
        guardarListaProductos(nuevosProductos);

    }
    //Eliminar producto
    const eliminarProducto = (id) => {
        setIdDelete(id)
        handleDeleteOpen();
    }

    const body = (
        <div style={modalStyle} className={classes2.paper}>
            <NuevoProducto
                setOpen={setOpen}
            />
        </div>
    );

    //Ordenar state x precio
    const ordenaPrecio = () => {
        let nextSort;
        if (currentSortP === 'downP') nextSort = 'upP';
        else if (currentSortP === 'upP') nextSort = 'defaultP';
        else if (currentSortP === 'defaultP') nextSort = 'downP';
        actSortP(nextSort);
        actSort(nextSort)
    };
    //Ordenar state x cantidad
    const ordenaCantidad = () => {
        let nextSort;
        if (currentSortC === 'downC') nextSort = 'upC';
        else if (currentSortC === 'upC') nextSort = 'defaultC';
        else if (currentSortC === 'defaultC') nextSort = 'downC';
        actSortC(nextSort);
        actSort(nextSort)
    };


    const renderHeader = () => {
        return (
            <>
                <StyledTableCell align="center">Imagen</StyledTableCell>
                <StyledTableCell align="center">Nombre</StyledTableCell>
                <StyledTableCell align="center">Categoría</StyledTableCell>
                <StyledTableCell align="center" style={{ cursor: 'pointer' }} onClick={ordenaPrecio}>Precio {(sortTypes[currentSortP].class === 'ArrowDropUpIcon') ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />}</StyledTableCell>
                <StyledTableCell align="center" style={{ cursor: 'pointer' }} onClick={ordenaCantidad}>Cantidad {(sortTypes[currentSortC].class === 'ArrowDropUpIcon') ? <ArrowDropDownIcon /> : <ArrowDropUpIcon />} </StyledTableCell>
                <StyledTableCell align="center">Inventario</StyledTableCell>
                <StyledTableCell align="center">Acción</StyledTableCell>
            </>
        )

    };

    const renderBody = () => {
        let resultado = null;
        resultado = listaProductos.sort(sortTypes[currentSort].fn)
            .filter(producto => producto['nombre'].includes(filterStr) || producto['categoria'].includes(filterStr) || String(producto['precio']).includes(filterStr))
            .map((producto, index) => {

                return (

                    <StyledTableRow key={producto.id}>
                        <StyledTableCell align="center" component="th" scope="row">
                            <Imagen
                                texto={producto.inventario}
                                ruta={producto.imagen}
                            />
                        </StyledTableCell>
                        <StyledTableCell align="center">{producto.nombre}</StyledTableCell>
                        <StyledTableCell align="center">{producto.categoria}</StyledTableCell>
                        <StyledTableCell align="center">{producto.precio}</StyledTableCell>
                        <StyledTableCell align="center">{producto.cantidad}</StyledTableCell>
                        <StyledTableCell align="center"><Inventario texto={producto.inventario} /></StyledTableCell>
                        <StyledTableCell align="center"><IconButton aria-label="edit">
                            <EditIcon />
                        </IconButton>

                            <IconButton aria-label="delete" onClick={() => eliminarProducto(producto.id)}>
                                <DeleteIcon />
                            </IconButton></StyledTableCell>

                    </StyledTableRow>
                )
            });
        if (resultado.length === 0) resultado = <tr><td>No hay resultados en su búsqueda </td><td></td><td></td><td></td><td></td><td></td></tr>
        return resultado;
    }

    return (
        <div className={classes.contenedor}>
            <Grid container spacing={3} >
                <Grid item xs={8} >
                    <h2 className={classes.titulo}>Mis Productos</h2>
                </Grid>
                <Grid item xs={4} className={classes.divC}>
                    <TextField id="standard-basic" label="Haz una búsqueda" onChange={e => actFilterStr(e.target.value)}></TextField>
                    <img src="../static/img/search.svg" alt="logo" className={classes.search} />
                    <img onClick={handleOpen} src="../static/img/add.svg" alt="logo" className={classes.add} />
                </Grid>
            </Grid>
            { (Object.keys(listaProductos).length === 0 ? <h1>No hay producto en el sistema</h1>
                :
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                {renderHeader()}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {renderBody()}
                        </TableBody>
                    </Table>
                </TableContainer>
            )
            }
            <Dialog
                open={deleteopen}
                onClose={handleDeleteClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Confirma"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        ¿Desea Eliminar este Producto?
          </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteClose}>Cancelar</Button>
                    <Button onClick={handleDeleteandClose} autoFocus>
                        Eliminar
          </Button>
                </DialogActions>
            </Dialog>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body}
            </Modal>
        </div>
    );
}

export default ListaProductos;
/*  */