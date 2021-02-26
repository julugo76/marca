import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    img: {
        width: 386,
        height: 386,
        //objectFit: 'contain',
        backgroundColor: 'lightgray',
        backgroundImage: `url('../static/img/camera.svg')`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },

    labelFont: {
        textAlign: 'left',
        font: 'normal Kailasa',
        fontSize: 24,
        /*fontWeight: 'bold',*/
        letterSpacing: 0,
        color: '#000000',
        opacity: 1,

    }, formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
        width: 350,


    }, input: {
        width: 350,

    },


}));

const NuevoProducto = ({ setOpen }) => {

    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();
    const [cat, setCat] = useState('');
    const handleChangeCat = (event) => {
        setCat(event.target.value);
    };
    const [marca, setMarca] = useState('');
    const handleChangeMarca = (event) => {
        setMarca(event.target.value);
    };
    const [precio, setPrecio] = useState('');
    const handleChangePrecio = (event) => {
        setPrecio(event.target.value);
    };
    const [target, setTarget] = useState('');
    const handleChangeTarget = (event) => {
        setTarget(event.target.value);
    };

    return (
        <>
            <form >
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <img src="../static/img/cerrar.svg" alt="" style={{ cursor: 'pointer' }} onClick={handleClose} />
                    </Grid>
                    <Grid item xs={4} style={{ backgroundColor: 'white' }}>
                        <div className={classes.img}  >
                            <img src="../static/img/add.svg" alt="" style={{ cursor: 'pointer' }} />
                        </div>
                        <label htmlFor="descripcion" className={classes.labelFont}>DESCRIPCIÓN</label>
                        <TextField
                            id="outlined-multiline-static"
                            label=""
                            multiline
                            rows={4}
                            style={{ width: '100%' }}
                            variant="outlined"
                            placeholder="Escribe algo que describa este producto"
                        />
                    </Grid>
                    <Grid container item xs={8} style={{ flexDirection: 'row', backgroundColor: 'white' }}>
                        <Grid item xs={12} style={{ backgroundColor: 'white' }}>
                            <Grid item xs={12} >
                                <label className={classes.labelFont}>GENERAL</label>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="demo-simple-select-label" >Categoría</InputLabel>
                                    <Select className={classes.select}
                                        labelId="demo-simple-select-filled-label"
                                        id="demo-simple-select"
                                        value={cat}
                                        onChange={handleChangeCat}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Tenis</MenuItem>
                                       <MenuItem value={20}>Zapato</MenuItem>
                                   </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="precio-label">Precio</InputLabel>
                                    <Select className={classes.select}
                                        labelId="precio-label"
                                        id="precio"
                                        value={precio}
                                        onChange={handleChangePrecio}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>1000</MenuItem>
                                        <MenuItem value={20}>2000</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                            <TextField id="filled-basic" label="Stock" variant="filled" className={classes.input} />
                        </Grid>
                        <Grid item xs={12} style={{ backgroundColor: 'white' }}>
                            <Grid item xs={12} >
                                <label htmlFor="" className={classes.labelFont}>ACERCA DEL PRODUCTO</label>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <TextField id="filled-basic" label="Color" variant="filled" className={classes.input} />
                                <TextField id="filled-basic" label="Composición" variant="filled" className={classes.input} />
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="marca">Marca</InputLabel>
                                    <Select className={classes.select}
                                        labelId="marca"
                                        id="marca"
                                        value={marca}
                                        onChange={handleChangeMarca}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>Nike</MenuItem>
                                        <MenuItem value={20}>Adidas</MenuItem>

                                    </Select>
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="target-label">Target</InputLabel>
                                    <Select className={classes.select}
                                        labelId="target-label"
                                        id="target"
                                        value={target}
                                        onChange={handleChangeTarget}
                                    >
                                        <MenuItem value="">
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10}>1000</MenuItem>
                                        <MenuItem value={20}>2000</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <Button variant="outlined" >Guardar</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}

export default NuevoProducto;

