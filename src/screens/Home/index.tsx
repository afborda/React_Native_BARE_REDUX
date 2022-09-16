import React, { useState } from "react";
import { TouchableOpacity, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Icon, Input } from "react-native-magnus";
import firestore from '@react-native-firebase/firestore';


import { Container, Text, Main, ContainerMain } from "./styles";
import { REGISTER_USER } from "@router/typeRoutes";

const Home = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>();
  const [addres, setAddres] = useState<string>();

  const handleRegiserUser = () => {
    if (name && addres ) {
      const data = {
        name: name,
        address: addres
      };

      firestore()
      .collection('student')
      .add({
        address: addres,
        name: name,
        photo:"",
        createdAt: firestore.FieldValue.serverTimestamp()
      })
      .then(() =>{
        Alert.alert('Estudante Adicionado com sucesso!')
      }).catch((error) => console.log('Erro =>', error))
  
      console.log("data", data);
  
      navigation.navigate(REGISTER_USER);
    }
   
  };
  return (
    <Container>
      <Main>
        <ContainerMain>
          <Text>Bitrise CI:CD</Text>
          <TouchableOpacity onPress={() => null}>
            <Text>Abner Fonseca</Text>
          </TouchableOpacity>
          <Input
            placeholder="Nome"
            p={10}
            focusBorderColor="blue800"
            value={addres}
            onChangeText={setAddres}
            suffix={
              <Icon name="person" color="gray500" fontFamily="Ionicons" />
            }
          />
          <Input
            placeholder="Endereço"
            p={10}
            mb="lg"
            mt="lg"
            value={name}
            onChangeText={setName}
            focusBorderColor="blue800"
            suffix={<Icon name="address" color="gray500" fontFamily="Entypo" />}
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
            onPress={ handleRegiserUser} 
          >
            Novo Aluno
          </Button>
        </ContainerMain>
      </Main>
    </Container>
  );
};

export default Home;
