import React, { Component } from 'react';
import RawStock from './RawStock';

export class Stock extends Component {

    constructor(props) {
        super(props);
        this.hobby = ["Hobby1", "Hobby2"];
    }

    render() {

        const { nome, fondatore, eta } = this.props;

        const listJSX =
            (
                this.hobby.map(item =>
                    <RawStock tipo={item} />
                )
            )

        let showEta = eta;
        setInterval(() => {
            showEta++;
            console.log(showEta)
        }, 3000)

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
                <p>{stringaEta}</p>
            </div>
        )
    }
}

export default Stock
