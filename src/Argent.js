import React from 'react'
import Article from './Article'
import { useState } from 'react'
import Coca from './coca.png'
import Icetea from './ice-tea.jpg'
import Fanta from './fanta.jpg'
import Panier from './Panier'

export default function Argent() {

    const [articles, setArticles] = useState([
        {img: Coca, nom: 'Coca Cola', prix: 1, stock: 5},
        {img: Icetea, nom: 'Ice tea', prix: 2, stock: 5},
        {img: Fanta, nom: 'Fanta', prix: 1.5, stock: 5}
    ])

    const [argent, setArgent] = useState(20)

    return (
        <section>
            <h1 className='titre-argent'>Mon argent : {argent}€</h1>
            <div className='produits'>
                <Article 
                nom={articles[0].nom}
                prix={articles[0].prix}
                stock={articles[0].stock}
                img={articles[0].img}
                />
                <Article 
                nom={articles[2].nom}
                prix={articles[2].prix}
                stock={articles[2].stock}
                img={articles[2].img}
                />
                <Article 
                nom={articles[1].nom}
                prix={articles[1].prix}
                stock={articles[1].stock}
                img={articles[1].img}
                />
            </div>
            <Panier />
        </section>
    )
}
