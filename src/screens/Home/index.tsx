import { TouchableOpacity } from "react-native";
import { Container, Text } from "./styles";
import { useNavigation } from "@react-navigation/native";
const Home = () => {
  const navigation = useNavigation();
  const regiserUser = () => {
    navigation.navigate("LoginRegister");
  };
  return (
    <Container>
      <Text>Bitrise CI:CD</Text>
      <TouchableOpacity onPress={() => regiserUser()}>
        <Text>Abner Fonseca</Text>
      </TouchableOpacity>
    </Container>
  );
};

export default Home;
