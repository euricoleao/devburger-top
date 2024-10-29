
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
//import paths from '../../constants/paths';

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

const listLinks = [

    {
        id: 1,
        label: 'Pedidos',
        link:   '/pedidos' ,            //paths.Order,
        icon: ShoppingBagIcon
    },
    {
        id: 2,
        label: 'Listar-Pedidos',
        link: '/listar-pedidos',                   //paths.Products,
        icon: ShoppingCartIcon
    },
    {
        id: 3,
        label: 'Novo Produto',
        link: '/adicinar-produto',                   //paths.Products,
        icon: AddShoppingCartIcon
    }
]

export default listLinks