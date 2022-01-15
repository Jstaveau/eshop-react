import React from 'react'

export default function Panier(props) {
    return (
        <div className='panier'>
            <h1>Panier</h1>
            <div className='produit-panier'>
                <p>Produit : {props.produit} || Unités : {props.unite}</p>
                <button className='rendre'>RENDRE</button>
            </div>
        </div>
    )
}
