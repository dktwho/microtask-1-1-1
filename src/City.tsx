import React from 'react';
import {Currentbankomat} from "./Currentbankomat";
import {MoneyType} from "./App";

export type CityPropsType = {
    data: MoneyType[];
}
export const City = ({data}: CityPropsType) => {

    // <Currentbankomat
    //     key={index}
    //     money={el}
    // />


    return (
        <div>
            {data.map((el: MoneyType, index: number) => {
                return (
                    <React.Fragment key={index}>
                        <div>{el.banknotes}</div>
                        <div>{el.value}</div>
                        <div>{el.number}</div>
                    </React.Fragment>
                )

            })}
        </div>
    );
};

