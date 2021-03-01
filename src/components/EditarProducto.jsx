import React, { useState } from 'react';
//import { nanoid } from 'nanoid';
import { makeStyles } from '@material-ui/core/styles';
//import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
//import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
//import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import { useForm } from "react-hook-form";
import ReactHookFormSelect from "./ReactHookFormSelect";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
//import { yupResolver } from '@hookform/resolvers/yup';
//import * as yup from "yup";
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    img: {
        width: 386,
        height: 386,
        //objectFit: 'contain',
        backgroundColor: 'lightgray',

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
        //margin: theme.spacing(1),
        minWidth: 120,
        width: 350,


    }, input: {
        width: 350,

    },
    error: {
        color: '#fa0606',
        marginLeft: 3,
        fontSize: 12,
    },
    select: {

        height: 57,
        background: 'lightgray',
        width: 350,
        border: 0,
        borderRadius: 3
    }


}));

/*const schema = yup.object().shape({
    descripcion: yup.string().required(),
    categoria: yup.string().required(),
    stock: yup.number().required(),
    precio: yup.number().required(),
    color: yup.string().required(),
    marca: yup.string().required(),
    composicion: yup.string().required(),
    target: yup.string().required(),
  });*/

const EditarProducto = ({ setOpenEditar, ProductoEditar, listaProductos, guardarListaProductos }) => {
    //let [descripcion, categoria, stock, precio, color, marca, composicion, target]=ProductoEditar;
    //state del formulario
    const [formData, actFormData] = useState({
        descripcion: '',
        categoria: '10',
        stock: '',
        precio: '',
        color: '',
        marca: '20',
        composicion: '',
        target: '30'
    });
    //const [submitted, actSubmitted] = useState(false);
    const handleChange = (e) => {
        actFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
        register({ name: e.target.name, value: e.target.value });
    }
    /*const handleSubmit = () => {
        actSubmitted(true, () => {
            setTimeout(() => actSubmitted(false), 5000);
        });


    }*/



    const handleCloseEditar = () => {
        setOpenEditar(false);
    };
    const classes = useStyles();
    //const [cat, setCat] = useState('');
    //const handleChangeCat = (event) => {
    //    setCat(event.target.value);
    //};
    //const [marca, setMarca] = useState('');
    //const handleChangeMarca = (event) => {
    //    setMarca(event.target.value);
    //};
    /*const [precio, setPrecio] = useState('');
    const handleChangePrecio = (event) => {
        setPrecio(event.target.value);
    };*/
    ///const [target, setTarget] = useState('');
    //const handleChangeTarget = (event) => {
    //    setTarget(event.target.value);
    //};
    const [openGuardado, setOpenGuardado] = useState(false);
    const [picture, setPicture] = useState(`url('../static/img/camera.svg')`);
    const [imgData, setImgData] = useState(null);
    const { register, handleSubmit, control, errors } = useForm({ defaultValues: ProductoEditar });
    const onSubmit = (data) => {
        data.id = ProductoEditar.id;
        data.imagen = ProductoEditar.imagen;
        data.inventario = ProductoEditar.inventario;
        data.id = ProductoEditar.id;
        //console.log(ProductoEditar);
        //console.log(data);
        guardarListaProductos(listaProductos.map(prod => (prod.id === data.id ? data : prod)));
        setOpenGuardado(true);
        setTimeout(function () {
            handleCloseGuardado();
            handleCloseEditar();
        }, 2000);

    };
    const onChangePicture = e => {
        if (e.target.files[0]) {
            //console.log("picture: ", e.target.files);
            setPicture(e.target.files[0]);
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                setImgData(reader.result);
                // console.log(reader.result);
            });
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    const handleCloseGuardado = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenGuardado(false);
    };
    return (
        <>
            <Snackbar open={openGuardado} onClose={handleCloseGuardado}>
                <Alert onClose={handleCloseGuardado} severity="success">
                    Producto actualizado!
        </Alert>
            </Snackbar>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <img src="../static/img/cerrar.svg" alt="" style={{ cursor: 'pointer' }} onClick={handleCloseEditar} />
                    </Grid>
                    <Grid item xs={4} style={{ backgroundColor: 'white' }}>
                        <div className={classes.img} style={{ backgroundImage: picture }} >
                            <img src={imgData} style={{ width: 386, height: 386, objectFit: 'contain' }} alt="" />

                        </div>
                        <Input type="file" onChange={onChangePicture}><img src="../static/img/add.svg" alt="" style={{ cursor: 'pointer' }} /></Input>
                        <label htmlFor="lbldescripcion" className={classes.labelFont}>DESCRIPCIÓN</label>
                        <FormControl className={classes.formControl}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                //inputRef={register({ required: { value: true, message: 'Valor requerido' } })}
                                multiline
                                rows={4}
                                //value={ProductoEditar.descripcion}
                                //required
                                fullWidth
                                id="descripcion"
                                //label="Escribe algo que describa este producto"
                                name="descripcion"
                                onChange={handleChange}
                                placeholder="Escribe algo que describa este producto"
                                //autoComplete="email"
                                autoFocus
                                inputRef={register({ required: "Descripción requerida" })}
                                error={Boolean(errors.descripcion)}
                                helperText={errors.descripcion?.message}
                            />
                        </FormControl>
                    </Grid>
                    <Grid container item xs={8} style={{ flexDirection: 'row', backgroundColor: 'white' }}>
                        <Grid item xs={12} style={{ backgroundColor: 'white' }}>
                            <Grid item xs={12} >
                                <label className={classes.labelFont}>GENERAL</label>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <ReactHookFormSelect
                                    id="categoria"
                                    name="categoria"
                                    className={classes.input}
                                    label="Categoria"
                                    control={control}
                                    error={!!errors.categoria}
                                    //defaultValue={categoria}
                                    variant="outlined"
                                    margin="normal"
                                >

                                    <MenuItem value="Tenis">Tenis</MenuItem>
                                    <MenuItem value="Zapato">Zapato</MenuItem>
                                    <MenuItem value="Bota">Bota</MenuItem>

                                </ReactHookFormSelect>





                                <FormControl className={classes.formControl}>
                                    <TextField
                                        variant="filled"
                                        margin="normal"
                                        label="Precio"
                                        onChange={handleChange}
                                        //value={ProductoEditar.precio}
                                        //required
                                        fullWidth
                                        id="precio"
                                        //value={formData.precio}
                                        name="precio"

                                        className={classes.input}
                                        inputRef={register({ required: "Valor requerido" })}
                                        error={Boolean(errors.precio)}
                                        helperText={errors.precio?.message}
                                    />
                                </FormControl>

                            </Grid>
                            <FormControl className={classes.formControl}>
                                <TextField
                                    variant="filled"
                                    margin="normal"
                                    label="Stock"

                                    onChange={handleChange}
                                    //value={ProductoEditar.stock}
                                    //required
                                    fullWidth
                                    id="stock"
                                    //value={formData.stock}
                                    name="stock"

                                    className={classes.input}
                                    inputRef={register({ required: { value: true, message: 'Stock requerido' } })}
                                    error={Boolean(errors.stock)}
                                    helperText={errors.stock?.message}
                                />
                            </FormControl>

                        </Grid>
                        <Grid item xs={12} style={{ backgroundColor: 'white' }}>
                            <Grid item xs={12} >
                                <label htmlFor="" className={classes.labelFont}>ACERCA DEL PRODUCTO</label>
                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                        variant="filled"
                                        margin="normal"
                                        label="Color"
                                        onChange={handleChange}
                                        //value={ProductoEditar.color}
                                        //required
                                        fullWidth
                                        id="color"
                                        //value={formData.color}
                                        name="color"

                                        className={classes.input}

                                        inputRef={register({ required: { value: true, message: 'Color requerido' } })}
                                        error={Boolean(errors.color)}
                                        helperText={errors.color?.message}
                                    />
                                </FormControl>
                                <FormControl className={classes.formControl}>
                                    <TextField
                                        variant="filled"
                                        margin="normal"
                                        label="Composición"
                                        onChange={handleChange}
                                        //value={ProductoEditar.composicion}
                                        //required
                                        fullWidth
                                        id="composicion"
                                        //value={formData.composicion}
                                        name="composicion"

                                        className={classes.input}

                                        inputRef={register({ required: { value: true, message: 'Composicion requerida' } })}
                                        error={Boolean(errors.composicion)}
                                        helperText={errors.composicion?.message}
                                    />
                                </FormControl>

                            </Grid>
                            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between' }}>

                                <ReactHookFormSelect
                                    id="marca"
                                    name="marca"
                                    className={classes.input}
                                    label="Marca"
                                    control={control}
                                    error={!!errors.marca}
                                    //defaultValue={ProductoEditar.marca}
                                    variant="outlined"
                                    margin="normal"
                                >

                                    <MenuItem value="Nike">Nike</MenuItem>
                                    <MenuItem value="Adidas">Adidas</MenuItem>
                                    <MenuItem value="Puma">Puma</MenuItem>


                                </ReactHookFormSelect>

                                <ReactHookFormSelect
                                    id="target"
                                    name="target"
                                    className={classes.input}
                                    label="Target"
                                    control={control}
                                    error={!!errors.target}
                                    //defaultValue={ProductoEditar.target}
                                    variant="outlined"
                                    margin="normal"
                                >

                                    <MenuItem value="Niños">Niños</MenuItem>
                                    <MenuItem value="Jóvenes">Jóvenes</MenuItem>
                                    <MenuItem value="Adultos">Adultos</MenuItem>
                                    <MenuItem value="Unisex">Unisex</MenuItem>


                                </ReactHookFormSelect>


                            </Grid>
                        </Grid>
                        <Grid item xs={12} style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                            <Button variant="outlined" type="submit">Actualizar</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </>
    );
}

export default EditarProducto;
