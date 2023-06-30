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
                <Name>{money.banknotes}</Name>
                <Nominal>{money.value}</Nominal>
                <SerialNumber>{money.number}</SerialNumber>
            </BanknoteGreen>
            :
            <BanknoteBlue>
                <Name>{money.banknotes}</Name>
                <Nominal>{money.value}</Nominal>
                <SerialNumber>{money.number}</SerialNumber>
            </BanknoteBlue>
    );
};

const BanknoteGreen = styled.div`
  background-color: greenyellow;
  width: 300px;
  height: 150px;
  margin: 10px;
  border-radius: 30px;
`

const BanknoteBlue = styled.div`
  background-color: deepskyblue;
  width: 300px;
  height: 150px;
  margin: 10px;
  border-radius: 30px;
`

const Name = styled.span`
  display: flex;
  justify-content: center;
  font-size: 30px;
  margin-top: 10px;
`

const Nominal = styled.span`
  display: flex;
  justify-content: center;
  font-size: 30px;
`

const SerialNumber = styled.span`
  display: flex;
  justify-content: center;
  color: green;
  font-size: 20px;
  margin: 15px;
`