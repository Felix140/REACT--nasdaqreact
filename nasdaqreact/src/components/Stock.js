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

        const stringaEta =
            (
                eta >= 18 ? "Maggiorenne" : "Minorenne"
            )

        return (
            <div>
                <h3>Figlio: {nome}</h3>
                <p>fondatore: {fondatore}</p>
                <ul>
                    {listJSX}
                </ul>
                <p>{stringaEta}</p>
            </div>
        )
    }
}

export default Stock
