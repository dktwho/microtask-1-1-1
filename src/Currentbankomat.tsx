import React from 'react';
import {MoneyType} from "./App";
import {S} from './Currentbankomat_Styles'

console.log(S)


export type CurrentBankomatType = {
    money: MoneyType
}
export const Currentbankomat = ({money}: CurrentBankomatType) => {
    return (
        <S.Banknote color={money.banknotes === 'Dollars' ? 'greenyellow' : 'deepskyblue'}>
            <S.Name>{money.banknotes}</S.Name>
            <S.Nominal>{money.value}</S.Nominal>
        </S.Banknote>
    );
};


