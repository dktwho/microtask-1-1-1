import React, {useState} from 'react';
import './App.css';
import {Country} from "./Country";

export type BanknotesType = 'All' | 'Dollars' | 'RUBLES'
export type MoneyType = {
  banknotes: BanknotesType
  value: number;
  number: string;
}

let defaultMoney: any = [
  { banknotes: 'Dollars', value: 100, number: ' a1234567890' },
  { banknotes: 'Dollars', value: 50, number: ' z1234567890' },
  { banknotes: 'RUBLES', value: 100, number: ' w1234567890' },
  { banknotes: 'Dollars', value: 100, number: ' e1234567890' },
  { banknotes: 'Dollars', value: 50, number: ' c1234567890' },
  { banknotes: 'RUBLES', value: 100, number: ' r1234567890' },
  { banknotes: 'Dollars', value: 50, number: ' x1234567890' },
  { banknotes: 'RUBLES', value: 50, number: ' v1234567890' },
]

export const moneyFilter = (money: any, filter: any): any => {

}

function App() {
  const [money, setMoney] = useState<any>([])
  const [filterValue, setFilterValue] = useState<any>('')

  const filteredMoney = moneyFilter()

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
