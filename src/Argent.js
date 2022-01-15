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

    const [uniteCoca, setUniteCoca] = useState(0)
    const [uniteFanta, setUniteFanta] = useState(0)
    const [uniteIcetea, setUniteIcetea] = useState(0)

    const changeUniteCoca = () => {
        setUniteCoca(uniteCoca + 1)
    }
    const changeUniteFanta = () => {
        setUniteFanta(uniteFanta + 1)
    }
    const changeUniteIcetea = () => {
        setUniteIcetea(uniteIcetea + 1)
    }
    const diminueUniteCoca = () => {
        setArgent(argent + articles[0].prix)
        articles[0].stock += 1
        setUniteCoca(uniteCoca - 1)
    }
    const diminueUniteFanta = () => {
        setArgent(argent + articles[2].prix)
        articles[2].stock += 1
        setUniteFanta(uniteFanta - 1)
    }
    const diminueUniteIcetea = () => {
        setArgent(argent + articles[1].prix)
        articles[1].stock += 1
        setUniteIcetea(uniteIcetea - 1)
    }

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
                stock={articles[0].stock > -1 ? articles[0].stock : 0}
                img={articles[0].img}
                acheter={() => acheter(articles[0])}
                uniteProduit={changeUniteCoca}
                classNone={(articles[0].stock < 1 || argent <= articles[0].prix)  && 'd-none'}
                />
                <Article 
                class={ articles[2].stock < 2 && articles[2].stock > 0 ? 'description stock-faible' : 'description' }
                classRed={ articles[2].stock < 1 ? ' stock-null' : '' }
                nom={articles[2].nom}
                prix={articles[2].prix}
                stock={articles[2].stock > -1 ? articles[2].stock : 0}
                img={articles[2].img}
                acheter={() => acheter(articles[2])}
                uniteProduit={changeUniteFanta}
                classNone={(articles[2].stock < 1 || argent <= articles[2].prix)  && 'd-none'}
                />
                <Article 
                class={ articles[1].stock < 2 && articles[1].stock > 0 ? 'description stock-faible' : 'description' }
                classRed={ articles[1].stock < 1 ? ' stock-null' : '' }
                nom={articles[1].nom}
                prix={articles[1].prix}
                stock={articles[1].stock > -1 ? articles[1].stock : 0}
                img={articles[1].img}
                acheter={() => acheter(articles[1])}
                uniteProduit={changeUniteIcetea}
                classNone={(articles[1].stock < 1 || argent <= articles[1].prix)  && 'd-none'}
                />
            </div>
            <div className='panier'>
                <h1>Panier</h1>
                <div className='divPanier'>
                    <Panier 
                    class={uniteCoca == 0 ? 'd-none' : 'produit-panier'}
                    produit={articles[0].nom}
                    unite={uniteCoca}
                    rendre={diminueUniteCoca}
                    />
                    <Panier 
                    class={uniteFanta == 0 ? 'd-none' : 'produit-panier'}
                    produit={articles[2].nom}
                    unite={uniteFanta}
                    rendre={diminueUniteFanta}
                    />
                    <Panier 
                    class={uniteIcetea == 0 ? 'd-none' : 'produit-panier'}
                    produit={articles[1].nom}
                    unite={uniteIcetea}
                    rendre={diminueUniteIcetea}
                    />
                </div>
            </div>
        </section>
    )
}
