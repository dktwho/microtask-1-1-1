import React from 'react';
import {MoneyType} from "./App";
import styled from "styled-components";

export type CurrentBankomatType = {
    money: MoneyType
}
export const Currentbankomat = ({money}: CurrentBankomatType) => {
    return (
        money.banknotes === 'Dollars'
            ? <BanknoteGreen>
                {money.banknotes}
            </BanknoteGreen>
            :
            <BanknoteBlue>
                {money.banknotes}
            </BanknoteBlue>
    );
};

const BanknoteGreen = styled.div`
  background-color: greenyellow;
  width: 300px;
  height: 150px;
  margin: 10px;
`

const BanknoteBlue = styled.div`
  background-color: deepskyblue;
  width: 300px;
  height: 150px;
  margin: 10px;
`