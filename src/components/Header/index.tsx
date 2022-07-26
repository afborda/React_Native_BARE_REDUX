import { View } from "react-native";
import { Container } from "./styles";
import { Button, Icon, Header } from "react-native-magnus";

import { useNavigation } from "@react-navigation/native";

interface props {
  title: string;
}

const HeaderComponent = ({ title }: props) => {
  const navigation = useNavigation();

  const handleGoback = () => {
    navigation.goBack();
  };

  return (
    <Header
      shadow="xs"
      bg="white"
      p="lg"
      borderBottomWidth={0}
      borderBottomColor="gray200"
      alignment="center"
      prefix={
        <Button onPress={handleGoback} bg="transparent">
          <Icon name="arrow-left" fontFamily="Feather" fontSize="2xl" />
        </Button>
      }
    >
      {title}
    </Header>
  );
};

export default HeaderComponent;
