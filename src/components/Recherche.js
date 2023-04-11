import React from 'react';
import './Recherche.css';


class Recherche extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            niveau: 0
        }
    }

    niveauChange = (e) => this.setState({niveau : e.target.value});

    handleRecherche = (e) => {
        // Faudrait peut-être faire quelque chose ici?
    }

    render() {

        return (
            <form onSubmit={this.handleRecherche} id="form-recherche">
                Classe : 
                <select name="classe" id="classe">
                    <option value="1" data-classe="Artificer">Artificer</option>
                    <option value="2" data-classe="Bard">Bard</option>
                    <option value="3" data-classe="Barbarian">Barbarian</option>
                    <option value="4" data-classe="etc">Faites ça dynamiquement svp</option>
                </select>

                Niveau : 
                <input type="number" name="niveau" id="niveau" min='0' max='9' value={this.state.niveau} onChange={this.niveauChange} />

                <input type="submit" value="Rechercher" />
            </form>
            
        );
    }
}

export default Recherche;