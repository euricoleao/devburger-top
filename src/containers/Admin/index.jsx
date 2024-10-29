
import { Container, ContainerItems } from './styles'
import { SideMenuAdmin } from '../../components';
import ListProducts from './ListProducts';
import Orders from './Orders'
import NewProducts from './NewProducts';
//import paths from '../../constants/paths';
//import { useParams } from 'react-router-dom';



export function Admin() {
 
  return (
    <Container>
      <SideMenuAdmin />
      <ContainerItems>

        {/*path === '/pedidos' && <Orders />*/}
        {/*path === '/listar-Pedidos' && <ListProducts />*/}
        {/*path === '/listar-Pedidos' &&*/ <NewProducts/>}


      </ContainerItems>
    </Container>
  );
}
