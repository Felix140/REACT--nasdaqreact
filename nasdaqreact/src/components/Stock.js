import React, { Component } from 'react';
import RawStock from './RawStock';

export class Stock extends Component {

    constructor(props) {
        super(props);
        this.hobby = ["Hobby1", "Hobby2"];
        this.state = { eta: props.eta }

        setInterval(() => this.aggiornaEta(), 1000)
    }

    aggiornaEta() {
        this.setState((state) => ({
            eta: state.eta + 1
        }));
    }

    render() {
        const { nome, fondatore } = this.props;

        const listJSX =
            (
                this.hobby.map(item =>
                    <RawStock tipo={item} />
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
                <p>eta: {showEta}</p>
                <ul>
                    {listJSX}
                </ul>
                <div>{stringaEta}</div>
            </div>
        )
    }
}

export default Stock
