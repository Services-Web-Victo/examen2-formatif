import React from 'react';
import './Carte.css';

class Carte extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sortFavori : 0
        }
    }

    changeFavori = (e) => {
        const estFavoris = e.target.getAttribute("data-favoris");
        
        if(estFavoris === "1") {
            this.setState({sortFavori : 0});
        } else {
            this.setState({sortFavori : 1});
        }
    }

    render() {

        let iconeFavori = <i className="far fa-heart fa-2x carte-favoris" data-favoris="0" onClick={this.changeFavori}></i>;
        if (this.state.sortFavori === 1){
            iconeFavori = <i className="fas fa-heart fa-2x carte-favoris" data-favoris="1" onClick={this.changeFavori}></i>
        }
        
        // Pour la valeur de composante, si
        // verbal vaut 1, ajouter V
        // somatic vaut 1, ajouter S
        // material vaut 1, ajouter M
        // il y a une valeur dans material_cost, ajouter (le texte)
        // ex : V,M (et un peu de sucre en pourdre)
        let composantes = "***";

        const classes = "Artificer, Barbarian, Bard, etc";
        const listeClasses = classes.split(",");
        const listeBoutonClasses = listeClasses.map((classe) => {
            return (<div className='carte-classe' key={classe}>{classe}</div>);
        })

        return (
            <div className='carte-sort'>
                <div className='carte-titre'>
                    <h2 className='carte-nom'>Nom du sort</h2>
                    {iconeFavori}
                </div>
                
                <div className='carte-ecole'>
                    <i>niveau (niveau du sort) - École</i>
                </div>

                <div><strong>Temps d'incantation</strong> : ****</div>
                <div><strong>Portée</strong> : ****</div>
                <div><strong>Composantes</strong> : {composantes}</div>
                <div><strong>Durée</strong> : ****</div>
                <div className='carte-description'>****</div>

                <div className='carte-liste-classe'>{listeBoutonClasses}</div>
            </div>
        );
    }
}

export default Carte;