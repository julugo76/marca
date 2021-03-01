import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { useForm, Controller } from "react-hook-form";


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
    error: {
        color: '#fa0606',
        marginLeft: 3,
        fontSize: 12,
    }


}));

const NuevoProducto = ({ setOpen }) => {
    const classesN = useStyles();
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

    ////////////////
    const { register, handleSubmit, control, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    //////////

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <img src="../static/img/cerrar.svg" alt="" style={{ cursor: 'pointer' }} onClick={handleClose} />
                    </Grid>
                    <Grid item xs={4} style={{ backgroundColor: 'white' }}>
                        <div className={classes.img}  >
                            <img src="../static/img/add.svg" alt="" style={{ cursor: 'pointer' }} />
                        </div>
                        <label htmlFor="descripcion" className={classes.labelFont}>DESCRIPCIÓN</label>
                        <textarea name="descripcion"
                            rows={4}
                            style={{ width: '100%' }}
                            placeholder="Escribe algo que describa este producto"
                            ref={register({ required: true, min: 10, maxLength: 100 })} />
                        {
                            errors.descripcion && errors.descripcion.type === "required" && (
                                <div name="errorDes1" className={classesN.error}>Descripción es requerida</div>
                            )}
                        {
                            errors.descripcion && errors.descripcion.type === "min" && (
                                <div name="errorDes2" className="error">Descripción minima es de 10</div>
                            )}
                        {
                            errors.descripcion && errors.descripcion.type === "max" && (
                                <div name="errorDes3" className="error">Descripción máxima es de 100</div>
                            )}
                    </Grid>
                    <Grid container item xs={8} style={{ flexDirection: 'row', backgroundColor: 'white' }}>
                        <Grid item xs={12} style={{ backgroundColor: 'white' }}>
                            <Grid item xs={12} >
                                <label className={classes.labelFont}>GENERAL</label>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="lblCategoria" >Categoría</InputLabel>
                                    <Select className={classes.select}
                                        labelId="demo-simple-select-filled-label"
                                        id="categoria"
                                        name="categoria"
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
                                    
                                    <input id="precio" name="precio"
                                        ref={register({ required: true })} className={classes.input} />
                                         {
                                errors.precio && errors.precio.type === "required" && (
                                    <div className={classesN.error}>Precio es requerido</div>
                                )}
                                </FormControl>
                            </Grid>
                            <input id="stock" name={"stock"} label="Stock"
                                ref={register({ required: true })} className={classes.input} />
                            {
                                errors.stock && errors.stock.type === "required" && (
                                    <div className={classesN.error}>Stock es requerido</div>
                                )}
                        </Grid>
                        <Grid item xs={12} style={{ backgroundColor: 'white' }}>
                            <Grid item xs={12} >
                                <label htmlFor="" className={classes.labelFont}>ACERCA DEL PRODUCTO</label>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <input id="color" name="color"
                                        ref={register({ required: true })} className={classes.input} />
                                         {
                                errors.color && errors.color.type === "required" && (
                                    <div className={classesN.error}>Color es requerido</div>
                                )}
                                <input id="composicion" name="composicion"
                                        ref={register({ required: true })} className={classes.input} />
                                         {
                                errors.composicion && errors.composicion.type === "required" && (
                                    <div className={classesN.error}>Composicion es requerido</div>
                                )}
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <FormControl className={classes.formControl}>
                                    <InputLabel id="lblMarca">Marca</InputLabel>
                                    <Select className={classes.select}
                                        labelId="marca"
                                        id="marca"
                                        name="marca"
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
                                    <InputLabel id="lblTarget">Target</InputLabel>
                                    <Select className={classes.select}
                                        labelId="target-label"
                                        id="target"
                                        name="target"
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
                            <Button variant="outlined" type="submit">Guardar</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}

export default NuevoProducto;


/*
<form onSubmit={handleSubmit(onSubmit)}>
                <textarea name="descripcion" ref={register({ required: true, min: 10, maxLength: 100 })} />
                {
                    errors.descripcion && errors.descripcion.type === "required" && (
                        <div className={classesN.error}>Descripción es requerida</div>
                    )}
                {
                    errors.descripcion && errors.descripcion.type === "min" && (
                        <div className="error">Descripción minima es de 10</div>
                    )}
                {
                    errors.descripcion && errors.descripcion.type === "max" && (
                        <div className="error">Descripción máxima es de 100</div>
                    )}
                <select name="categoria" ref={register({ required: true })}>
                    <option value="Tenis">Tenis</option>
                    <option value="Zapatos">Zapatos</option>
                </select>
                <input type="number" placeholder="cantidad" name="cantidad" ref={register({ required: true })} />
                <input type="number" placeholder="precio" name="precio" ref={register({ required: true })} />
                <input type="text" placeholder="color" name="color" ref={register({ required: true })} />
                <select name="marca" ref={register({ required: true })}>
                    <option value="Nike">Nike</option>
                    <option value="Adidas">Adidas</option>
                    <option value="Puma">Puma</option>
                </select>
                <input type="text" placeholder="composicion" name="composicion" ref={register({ required: true })} />
                <input type="text" placeholder="target" name="target" ref={register({ required: true })} />

                <input type="submit" />
            </form>
*/
/*

*/