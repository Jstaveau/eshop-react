import React from 'react'

export default function Panier(props) {
    return (
        
        <div className={props.class}>
            <p>Produit : {props.produit} || Unités : {props.unite}</p>
            <button 
            onClick={props.rendre}
            className='rendre'>RENDRE</button>
        </div>
        
    )
}
