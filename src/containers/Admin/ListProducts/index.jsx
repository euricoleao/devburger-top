
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CancelIcon from '@mui/icons-material/Cancel';
import { formatPrice } from '../../../utils/formatPrice';



import { useState,useEffect } from "react";
import { api } from "../../../services/api";
import {
  Container,Img , EditIconStyles} from "./styles";



 function ListProducts() {
  const [products, setProducts] = useState()

  
  useEffect(() => { /* chamada api para categorias  */

    async function loadOrders() {
      const { data } = await api.get('/products');

      setProducts(data)
     
    }
    loadOrders();
    
  }, []);
 
  function isOffer(offerStatus) {
    if (offerStatus){
     return <CheckBoxIcon style={{ color: '#228822'}} />
    }
     return <CancelIcon style={{ color: '#CC1717'}}/>
    
  }
 
  return (
    
 <Container >
   <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nome</TableCell>
            <TableCell align='center' >Preço</TableCell>
            <TableCell align='center' >Produto em oferta</TableCell>
            <TableCell align='center' >Imagem do Produto</TableCell>
            <TableCell align='center' >Editar </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products && products.map((product) => (
            <TableRow
              key={product.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
           
              <TableCell component="th" scope="row">
                {product.name}
              </TableCell>
              <TableCell >{formatPrice(product.price)}</TableCell>
              <TableCell align='center' >{isOffer(product.offer)}</TableCell>
              <TableCell align='center'> 
                <Img  src={product.url} alt="imagen-produto" />
                </TableCell>
              <TableCell align='center'>
                <EditIconStyles></EditIconStyles>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
 </Container>
  );



}

export default ListProducts;

