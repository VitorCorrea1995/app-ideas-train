import { Item } from '../types/Item';

export const getCurrentMonth = () => {
  const now = new Date();
  return `${now.getFullYear()} - ${now.getMonth()+1}`;
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
  const newList: Item[] = [];

  const [year, month] = date.split('-');

  for (let i in list) {
    if (list[i].date.getFullYear() === parseInt(year)
    && (list[i].date.getMonth() + 1) === parseInt(month)) {
      newList.push(list[i]);
    }
  }

  return newList;
}

export const formatDate = (date: Date): string => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

const addZeroToDate = (n: number): string => {
  if (n < 10) {
    return `0${n}`;
  }
  
  return n.toString();
}

export const formatCurrentMonth = (currentMonth: string): string => {
  const [year, month] = currentMonth.split(`-`);
  const months = ['December', 'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November'];

  const actualMonth = months[parseInt(month)];
  const actualtYear = parseInt(month) === 0 ? parseInt(year) - 1 : parseInt(year);
  
  return `${actualMonth} ${actualtYear}`;
}