import React from 'react';

const Imagen = ({ texto, ruta }) => {


    let imgL = 'imgLg';

    if (texto === 'Limitado') {
        imgL = 'imgO';
    } else if (texto === 'Agotado') {
        imgL = 'imgR';
    };
    return (
        <>
            <div  >
                <img className={imgL} src={`../static/img/${ruta}`} alt="" />
            </div>
        </>
    );

}
export default Imagen;