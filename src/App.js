import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/New Expense/New Expense';
import {useState} from 'react';


const DummyExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
  {
    id: 'e5',
    title: 'New Chair (Wooden)',
    amount: 45,
    date: new Date(2022, 2, 12),
  },
  {
    id: 'e6',
    title: 'Laptop',
    amount: 400,
    date: new Date(2022, 1, 11),
  },
  {
    id: 'e7',
    title: 'Gaming PC',
    amount: 4000,
    date: new Date(2019, 10, 12),
  },
  {
    id: 'e8',
    title: 'Bed',
    amount: 300,
    date: new Date(2018, 1, 12),
  },
  {
    id: 'e9',
    title: 'Plastic Char',
    amount: 30,
    date: new Date(2018, 10, 15),
  },
  {
    id: 'e10',
    title: 'New Clothes',
    amount: 1000,
    date: new Date(2019, 10, 1),
  },
  {
    id: 'e11',
    title: 'iPhone',
    amount: 900,
    date: new Date(2020, 7, 7),
  }

];

function App() {

  const [expense,setExpense]=useState(DummyExpenses);

  function addNewElementinList(newExpense){
    setExpense((prevExpense) =>
      [newExpense,...prevExpense]);
  }

  return (
    <div>
      <NewExpense onAddNewElemetinList={addNewElementinList}/>
      <Expenses expenses={expense} />
    </div>
  );
}

export default App;
