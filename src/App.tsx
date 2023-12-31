import React, {useState} from 'react';
import './App.css';
import {Country} from "./Country";

export type BanknotesType = 'All' | 'Dollars' | 'RUBLES'
export type MoneyType = {
    banknotes: BanknotesType
    value: number;
    number: string;
}

let defaultMoney: MoneyType[] = [
    {banknotes: 'Dollars', value: 100, number: ' a1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' z1234567890'},
    {banknotes: 'RUBLES', value: 100, number: ' w1234567890'},
    {banknotes: 'Dollars', value: 100, number: ' e1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' c1234567890'},
    {banknotes: 'RUBLES', value: 100, number: ' r1234567890'},
    {banknotes: 'Dollars', value: 50, number: ' x1234567890'},
    {banknotes: 'RUBLES', value: 50, number: ' v1234567890'},
]

export const moneyFilter = (money: MoneyType[], filter: BanknotesType): MoneyType[] => {
    if (filter === 'All') return defaultMoney
    return money.filter(el => el.banknotes === filter)
}

function App() {
    const [money, setMoney] = useState<Array<MoneyType>>(defaultMoney)
    const [filterValue, setFilterValue] = useState<BanknotesType>('All')
    const filteredMoney = moneyFilter(money, filterValue)

    return (
        <div className="App">
            <Country
                data={filteredMoney}
                setFilterValue={setFilterValue}
            />
        </div>
    );
}

export default App;
