import React from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";

import { Container } from "./styles";

const LoginRegister = () => {
  const botaoClicado = useSelector(state => state.botaoClicado);

  return (
    <Container>
      <Text>Register</Text>
      <Text>
        {botaoClicado ? "Clicado" : "Não Clicado"}
      </Text>
    </Container>
  );
};

export default LoginRegister;
