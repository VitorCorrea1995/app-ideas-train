import { Item } from '../../../types/Item';
import * as C from './styles';
import {formatDate} from '../../../helpers/dataFilter';
import {categories} from '../../../data/categories';

type Props = {
  item: Item
}

export const TableItem = ({item}: Props) => {
  return (
    <C.TableLine>
      <C.TableColumn>{formatDate(item.date)}</C.TableColumn>
      <C.TableColumn>
        <C.Category color={categories[item.category.toLowerCase()].color}>
          {categories[item.category.toLowerCase()].title}
        </C.Category>
      </C.TableColumn>
      <C.TableColumn>{item.title}</C.TableColumn>
      <C.TableColumn>
        <C.Value color={categories[item.category.toLowerCase()].expense ? 'red' : 'green'}>
          $ {item.value}
        </C.Value>
      </C.TableColumn>
      <C.TableColumn>
        <C.Button color={'#269903'} bgColor={'#D6E6D7'}>Edit</C.Button>
        <C.Button color={'#F34235'} bgColor={'#F26261'}>X</C.Button>
      </C.TableColumn>
    </C.TableLine>
  );
}