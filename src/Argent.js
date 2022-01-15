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

    // const [stockFaible, setStockFaible] = useState(false)

    // const verifStock = (article) => {
    //     if (article.stock > 0 && article.stock <2) {
    //         setStockFaible(!stockFaible)
    //     }
    // }

    const acheter = (article) => {
        article.stock -= 1
        setArgent(argent - article.prix)
    }

    return (
        <section>
            <h1 className='titre-argent'>Mon argent : {argent}€</h1>
            <div className='produits'>
                <Article
                class={ articles[0].stock < 2 && articles[0].stock > 0 ? 'description stock-faible' : 'description' }
                classRed={ articles[0].stock < 1 ? ' stock-null' : '' }
                nom={articles[0].nom}
                prix={articles[0].prix}
                stock={articles[0].stock}
                img={articles[0].img}
                acheter={() => acheter(articles[0])}
                />
                <Article 
                class={ articles[2].stock < 2 && articles[2].stock > 0 ? 'description stock-faible' : 'description' }
                classRed={ articles[2].stock < 1 ? ' stock-null' : '' }
                nom={articles[2].nom}
                prix={articles[2].prix}
                stock={articles[2].stock}
                img={articles[2].img}
                acheter={() => acheter(articles[2])}
                />
                <Article 
                class={ articles[1].stock < 2 && articles[1].stock > 0 ? 'description stock-faible' : 'description' }
                classRed={ articles[1].stock < 1 ? ' stock-null' : '' }
                nom={articles[1].nom}
                prix={articles[1].prix}
                stock={articles[1].stock}
                img={articles[1].img}
                acheter={() => acheter(articles[1])}
                />
            </div>
            <Panier />
        </section>
    )
}
