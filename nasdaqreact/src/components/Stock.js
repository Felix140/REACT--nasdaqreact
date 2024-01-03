import PropTypes from 'prop-types';
import React, { Component } from 'react';
import RawStock from './RawStock';
import listaHobby from './hobbyList';

export class Stock extends Component {

    constructor(props) {
        super(props);
        this.state = {
            eta: props.eta,
            hobby: []
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.updateState(), 3000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updateState() {
        this.setState((state, props) => {
            const nextHobby = listaHobby[state.hobby.length];

            // Se non ci sono piu hobby fermati qui
            if (!nextHobby) {
                return { eta: state.eta + 1 }
            }

            // Altrimenti continua qui
            return {
                eta: state.eta + 1,
                hobby: [...state.hobby, nextHobby]
            };
        });
    }

    render() {
        const { nome, fondatore } = this.props;

        const listJSX =
            (
                this.state.hobby.map(item =>
                    <RawStock tipo={item} key={item} />
                )
            )

        let showEta = this.state.eta;

        const stringaEta =
            (
                showEta >= 18 ? <h3>Maggiorenne</h3> : <h6>Minorenne</h6>
            )



        return (
            <div>
                <h3>Figlio: {nome}</h3>
                <p>fondatore: {fondatore}</p>
                <p>eta: {showEta} </p>
                <ul>
                    {listJSX}
                </ul>
                <div>{stringaEta}</div>
            </div>
        )
    }
}

Stock.defaultProps = {
    nome: "nome SCONOSCIUTO",
    fondatore: "fondatore SCONOSCIUTO"
}
Stock.protoTypes = {
    nome: PropTypes.string,
    fondatore: PropTypes.string,
    eta: PropTypes.number
}

export default Stock
