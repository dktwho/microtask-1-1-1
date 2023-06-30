import React from 'react';
import {City} from "./City";

export type CountryPropsType = {
    data: any;
    setFilterValue: any
}
export const Country = () => {
    const setAll = () => {

    }

    const setDollars = () => {

    }

    const setRUBLS = () => {

    }

    return (
        <div>
            <button onClick={() => {'all'}}>All</button>
            <button onClick={() => {'dollars'}}>Dollars</button>
            <button onClick={() => {'RUBLES'}}>RUBLS</button>
            <City data={'give soe prop'}/>
        </div>
    );
};

