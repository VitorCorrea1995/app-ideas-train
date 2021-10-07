import { Item } from '../../types/Item';
import { TableItem } from './TableItem/Index';
import * as C from './styles';

type Props = {
  list: Item[]
}

export const TableArea = ({list}: Props) => {
  return <>
    <C.Table>
      <thead>
        <tr>
          <C.TableHeadColumn width={100} textAlign={'left'}>Date</C.TableHeadColumn>
          <C.TableHeadColumn width={130} textAlign={'left'}>Category</C.TableHeadColumn>
          <C.TableHeadColumn>Title</C.TableHeadColumn>
          <C.TableHeadColumn width={150} textAlign={'left'}>Value</C.TableHeadColumn>
          <C.TableHeadColumn width={150} textAlign={'center'}>Actions</C.TableHeadColumn>
        </tr>
      </thead>
      <tbody>
        {list.map((item, index) => <TableItem key={index} item={item}/>)}
      </tbody>
    </C.Table>
  </>
    
  ;
}