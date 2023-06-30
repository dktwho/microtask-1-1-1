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

    const setRUBLS = () => {
        setFilterValue('RUBLES')
    }

    return (
        <div>
            <button onClick={() => {'all'}}>All</button>
            <button onClick={() => {'dollars'}}>Dollars</button>
            <button onClick={() => {'RUBLES'}}>RUBLS</button>
            <City data={'give some prop'}/>
        </div>
    );
};

