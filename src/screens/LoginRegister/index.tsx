import React, { useRef, useState } from "react";
import { Button, Icon, Input } from "react-native-magnus";
import { useSelector } from "react-redux";
import RegisterUser from "../../assets/json/registerUser.json";
import HeaderComponent from "@components/Header";
import Lottie from "@components/Lottie";

import { Container, Main, ContainerMain } from "./styles";

const LoginRegister = () => {
  const [name, setName] = useState<string>();
  const [address, setAddres] = useState<string>();
  const handleRegiserUser = () => {
    const data = { name, address };

    console.log("data", data);

    //navigation.navigate(REGISTER_USER);
  };
  return (
    <Container>
      <HeaderComponent title="Registrar" />
      <Main>
        <ContainerMain>
          <Lottie autoPlay={true} w={300} h={300} path={RegisterUser} />
          <Input
            placeholder="E-mail"
            p={10}
            mb="lg"
            mt="lg"
            focusBorderColor="blue800"
            suffix={<Icon name="email" color="gray500" fontFamily="Entypo" />}
          />
          <Input
            placeholder="Senha"
            p={10}
            focusBorderColor="blue800"
            secureTextEntry
            suffix={
              <Icon
                name="onepassword"
                color="gray500"
                fontFamily="MaterialCommunityIcons"
              />
            }
          />
          <Button
            loading={false}
            block
            bg="blue600"
            p={12}
            color="white"
            rounded="circle"
            mt="lg"
            fontWeight="bold"
            onPress={() => handleRegiserUser}
          >
            Cadastrar
          </Button>
        </ContainerMain>
      </Main>
    </Container>
  );
};

export default LoginRegister;
