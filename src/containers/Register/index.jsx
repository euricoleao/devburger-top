import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from "yup";

import CadasImage from '../../assets/cadasImage.svg';
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



export function Register() {

    const navigate = useNavigate();

    const schema = Yup.object({
        name: Yup.string().required('O seu nome é obrigatorio'),
        email: Yup.string()
            .email('Digite um email valido')
            .required('O email é origatorio'),
        password: Yup.string()
            .required('A senha é obrigatória')
            .min(6, 'A senha deve ter pelo menos 6 digitos'),
        confirmPassword: Yup.string()
            .required('A senha é obrigatória').oneOf([Yup.ref('password')], 'As senhas devem ser iguais')



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
        try {
            const { status } =
                await api.post('/users', {
                    name: data.name,
                    email: data.email,
                    password: data.password,
                },
                    {
                        validateStatus: () => true,
                    },
                );

            if (status === 201 || status === 200) {
                setTimeout(() => {
                    navigate('/login')
                }, 2000);
                toast.success('Cadastro criado com sucesso')
            } else if (status === 409) {
                toast.error('E-mail já cadastrado! Faça login para continuar')
            } else {
                throw new Error()
            }


        } catch (error) {
            toast.error('Falha no sistema! Tente novamente');
        }

    };

    return (
        <Container>
            <LeftContainer>
                <img src={CadasImage} alt="logo-de-cadastro" />
            </LeftContainer>
            <RightContainer>
                <img src={Logo} alt="logo- do login" />
                <Title> Criar Conta </Title>

                <Form noValidate onSubmit={handleSubmit(onSubmit)}>

                    <InputContainer >
                        <label>Nome</label>
                        <input type="text"{...register("name")} error={errors.text?.message} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>

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

                    <InputContainer >
                        <label>Confirmar Senha</label>
                        <input type="password"{...register("confirmPassword")} error={errors.confirmPassword?.message} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>

                    <Button type="submit" style={{
                        marginTop: 50,
                        marginBottom: 25
                    }}>Cadastrar</Button>
                </Form>
                <p> Já pussui conta? <Link to="/login" >Clique aqui.</Link> </p>
            </RightContainer>
        </Container>
    );
}