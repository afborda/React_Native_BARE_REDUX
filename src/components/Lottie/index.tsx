import { View } from "react-native";
import LottieView from "lottie-react-native";

interface props {
  autoPlay: boolean;
  w: number;
  h: number;
  path: any;
}

const Lottie = ({ autoPlay, w, h, path }: props) => {
  return (
    <LottieView
      autoPlay={autoPlay}
      style={{ width: w, height: h }}
      source={path}
    />
  );
};

export default Lottie;
