import { useEffect, useState } from 'react';
import * as C from './App.styles';
import { InfoArea } from './components/InfoArea';
import {TableArea} from './components/TableArea';
import {items} from './data/item';
import {filterListByMonth, getCurrentMonth} from './helpers/dataFilter';
import {Item} from './types/Item';
import {categories} from './data/categories';

const App = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState<Item[]>([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let currentIncome = 0;
    let currentExpense = 0;

    filteredList.forEach(item => {
      if (categories[item.category.toLowerCase()].expense) {
        currentExpense += item.value;
      } else {
        currentIncome += item.value;
      }
    });

    setIncome(currentIncome);
    setExpense(currentExpense);

  }, [filteredList])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Financial System</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea onMonthChange={handleMonthChange} currentMonth={currentMonth} income={income} expense={expense} />
        <TableArea list={filteredList} />
      </C.Body>

      {/* TO DO: ADD EDIT BUTTON HERE*/}
    </C.Container>
  );
}

export default App;