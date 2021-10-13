import {ReactNode} from 'react';
import * as C from './styles';

type Props = {
  children: ReactNode
}

export const Theme = ({children}) => {
  return (
    <C.Container>
      <C.Area>
        <Header/>

        <C.Steps>
          <C.Sidebar>
            <C.Page>
              {children}
            </C.Page>
          </C.Sidebar>
        </C.Steps>
      </C.Area>
    </C.Container>
  )
}