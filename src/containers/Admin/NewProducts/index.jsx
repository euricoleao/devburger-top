
import { useState,useEffect } from "react";
import { api } from "../../../services/api";
import {
  Container, LabelUpload, Label,  Input,ButtonStyles} from "./styles";
import  ReactSelect  from "react-select";
import { useForm } from "react-hook-form"
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

 function NewProducts() {
  const [fileName, setFileName ] = useState(null)
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  useEffect(() => { 

    async function loadOrders() {
      const { data } = await api.get('/products');

    
     
    }
    loadOrders();
    
  }, []);
 
 
  return (
    
 <Container >
  <form noValidate>
   <Label>Nome</Label>
   <Input type="text" {...register("Name")}/>

   <Label>Price</Label>
   <Input type="number"{...register("price")}/>

   <LabelUpload>
    {fileName || ( 
      <>
      <CloudUploadIcon />
       Carregar a imagem do produto
      </> 
      ) }
    <input type="file" 
    accept='image/png, image/jpeg'{...register("file")}
    onChange={value => {
      setFileName(value.target.files[0]?.name)
    }}
    /></LabelUpload>
   

   <ReactSelect />

   <ButtonStyles>Adicionar Produto</ButtonStyles>
   </form>
 </Container>


  );



}

export default NewProducts;

