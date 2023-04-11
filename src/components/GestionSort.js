import React from 'react';
import Api from '../utils/Api';
import Recherche from './Recherche';
import './GestionSort.css';


class GestionSort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded : false,
            listeClasses : [],
            listeSorts : []
        }
    }

    render() {
        if(!this.state.isLoaded) {
            return(<h1>Chargement en cours...</h1>);
        }

        return (
            <section className='gestion-sort'>
                <div className='entete-recherche'>
                    <h1 className='titre-page'>Grimoire de sorts</h1>
                    <Recherche />
                </div>

                <div className='liste-sort'>
                    {/* Ajoutez les composantes Carte ici */}
                </div>
                
            </section>
            
        );
    }
}

export default GestionSort;