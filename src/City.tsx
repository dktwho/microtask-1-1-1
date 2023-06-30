import React from 'react';
import {MoneyType} from "./App";
import styled, {css} from 'styled-components'
import {Currentbankomat} from "./Currentbankomat";

export type CityPropsType = {
    data: MoneyType[];
}
export const City = ({data}: CityPropsType) => {
    const mappedMoney = data.map((el: MoneyType, index: number) => (
            <Currentbankomat
                key={index}
                money={el}
            />
        )
    )


    return (
        <div>
            <Wrapper>{mappedMoney}</Wrapper>
        </div>
    );
};


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: 30px;
`
