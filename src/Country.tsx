import React from 'react';
import {City} from "./City";
import {BanknotesType, MoneyType} from "./App";

export type CountryPropsType = {
    data: MoneyType[];
    setFilterValue: (filterValue: BanknotesType) => void
}
export const Country = ({setFilterValue}:CountryPropsType ) => {
    const setAll = () => {
        setFilterValue('All')
    }

    const setDollars = () => {
        setFilterValue('Dollars')
    }

    const setRUBLES = () => {
        setFilterValue('RUBLES')
    }

    return (
        <div>
            <button onClick={() => setAll()}>All</button>
            <button onClick={() => setDollars()}>Dollars</button>
            <button onClick={() => setRUBLES()}>RUBLES</button>
            <City data={'give some prop'}/>
        </div>
    );
};

