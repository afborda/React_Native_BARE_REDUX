import React from "react";
import { View, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input, Icon, Text, Button } from "react-native-magnus";

import { Container, Main, ContainerMain } from "./styles";

const Login = () => {
  const navigation = useNavigation();

  const loginHome = () => {
    navigation.navigate("LoginRegister");
  };

  return (
    <Container>
      <Main>
        <ContainerMain>
          <Text fontWeight="bold" fontSize="4xl" mt="md" textAlign="center">
            Login
          </Text>
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
            onPress={() => loginHome()}
          >
            Entrar
          </Button>
          <Button
            bg="blue500"
            h={50}
            w={50}
            rounded="circle"
            mt="lg"
            suffix={
              <Icon
                name="ios-logo-google"
                color="#fff"
                fontFamily="Ionicons"
                fontSize={24}
              />
            }
          />
          <Button
            bg="black"
            h={50}
            w={50}
            rounded="circle"
            mt="lg"
            suffix={
              <Icon
                name="social-apple"
                color="#fff"
                fontFamily="Foundation"
                fontSize={25}
              />
            }
          />
        </ContainerMain>
      </Main>
    </Container>
  );
};

export default Login;
