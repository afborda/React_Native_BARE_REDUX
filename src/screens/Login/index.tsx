import React, { useRef } from "react";
import { View, TouchableOpacity, StatusBar } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Input, Icon, Text, Button } from "react-native-magnus";
import LottieView from "lottie-react-native";

import {
  Container,
  Main,
  ContainerMain,
  ContainerButtonGoogleApple
} from "./styles";
import { useDispatch, useSelector } from "react-redux";
import LottieLogin from "../../assets/json/register.json";

import * as reducerExemplo from "../../store/modules/actions";
import { LOGIN_REGISTER } from "@router/typeRoutes";
import Lottie from "@components/Lottie";

const Login = () => {
  const navigation = useNavigation();
  // const dispatch = useDispatch();
  const animation = useRef(null);

  const handleRegisterUser = () => {
    // dispatch(reducerExemplo.clicaBotaoRequest());

    navigation.navigate(LOGIN_REGISTER);
  };

  return (
    <Container>
      <Main>
        <ContainerMain>
          <Lottie autoPlay={true} w={300} h={300} path={LottieLogin} />

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
          <ContainerButtonGoogleApple>
            <Button
              bg="blue500"
              h={50}
              w={50}
              mr={20}
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
              mr={20}
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
            <Button
              onPress={handleRegisterUser}
              bg="orange"
              h={50}
              w={50}
              rounded="circle"
              mt="lg"
              suffix={
                <Icon
                  name="user-plus"
                  color="#fff"
                  fontFamily="FontAwesome"
                  fontSize={25}
                />
              }
            />
          </ContainerButtonGoogleApple>
        </ContainerMain>
      </Main>
    </Container>
  );
};

export default Login;
