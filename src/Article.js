import React from 'react'

export default function Article(props) {
    return (
        <div className='produit'>
            <img src={props.img} alt="img article" />
            <div className={props.class + props.classRed}>
                <h2>{props.nom}</h2>
                <p>Prix : {props.prix}€</p>
                <p>Stock : {props.stock} unités.</p>
                <button 
                className={props.classNone}
                onClick={ () => {
                    props.uniteProduit()
                    props.acheter()
                    }}>ACHETER</button>
            </div>
        </div>
    )
}
