import React from 'react'

export default function Article(props) {
    return (
        <div className='produit'>
            <img src={props.img} alt="img article" />
            <div className='description'>
                <h2>{props.nom}</h2>
                <p>Prix : {props.prix}€</p>
                <p>Stock : {props.stock} unités.</p>
                <button>ACHETER</button>
            </div>
        </div>
    )
}
