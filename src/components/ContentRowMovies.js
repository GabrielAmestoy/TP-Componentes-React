import React from 'react';
import Metrica from './Metrica.js';

const data = [
    {
        color:'primary',
        titulo:'Movies in Data Base',
        cifra:21,
        icono :'fa-film',
    },
    {
        color:'success',
        titulo:'Total awards',
        cifra:79,
        icono :'fa-award',
    },
    {
        color:'warning',
        titulo:'Actors quantity',
        cifra:49,
        icono :'fa-user',
    }
]


const ContentRowMovies = () => {
    return (
        <div className="row">
            {
                data.map((item,index) => {
                    return <Metrica 
                    key = {index + item.titulo}
                    color = {item.color}
                    titulo = {item.titulo}
                    cifra = {item.cifra}
                    icono = {item.icono} 
                    />
                })
            }


        </div>
    );
}

export default ContentRowMovies;