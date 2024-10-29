import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import * as Yup from "yup";
import { useUser } from "../../hooks/UseContext";

import LoginImage from '../../assets/login-image.svg';
import Logo from '../../assets/burger-logo.svg';
import { Button } from '../../components/Button';
import { api } from '../../services/api';

import {
  Container,
  LeftContainer,
  RightContainer,
  Title,
  Form,
  InputContainer,
  Link,
} from "./styles";



export function Login() {

  const navigate = useNavigate();

  const { putUserData } = useUser();

  const schema = Yup.object({
    email: Yup.string()
      .email('Digite um email valido')
      .required('O email é origatorio'),
    password: Yup.string()
      .required('A senha é obrigatória')
      .min(6, 'A senha deve ter pelo menos 6 digitos'),

  })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  console.log(errors);

  const onSubmit = async (data) => {
    const { data: userData } = await toast.promise(
      api.post('/session', {
        email: data.email,
        password: data.password,


      }),


      {

        pending: 'Verifique seus dados',
        success: {
          render() {
               setTimeout(() => {
              if (userData.admin === true){
                navigate('/pedidos')
              } else {
                navigate('/');
              }

              }, 2000);
              return 'Seja Bem-vindo(a)';
             
           },
        },
        error: 'Email ou Senha Incorretos',
      },
    );
    putUserData(userData);
   

  };


  return (
    <Container>
      <LeftContainer>
        <img src={LoginImage} alt="logo- do login" />
      </LeftContainer>
      <RightContainer>
        <img src={Logo} alt="logo- do login" />
        <Title>Seja bem vindo! </Title>

        <Form noValidate onSubmit={handleSubmit(onSubmit)}>
          <InputContainer >
            <label>Email</label>
            <input type="email"{...register("email")} error={errors.email?.message} />
            <p>{errors?.email?.message}</p>
          </InputContainer>

          <InputContainer>
            <label>Senha</label>
            <input type="password" {...register("password")} error={errors.password?.message} />
            <p>{errors?.password?.message}</p>
          </InputContainer>

          <Button type="submit" style={{
            marginTop: 75,
            marginBottom: 25
          }}>Entrar</Button>
        </Form>
        <p>Não pussui conta? <Link to="/cadastro" >Clique aqui.</Link> </p>
      </RightContainer>
    </Container>
  );
}