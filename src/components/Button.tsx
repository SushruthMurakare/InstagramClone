import { Pressable, Text } from "react-native";

type ButtonProps = {
  text: string;
  onPress: () => void;
};

export default function Button({ text, onPress }: ButtonProps) {
  return (
    <Pressable onPress={onPress} className="bg-blue-500 w-full p-3 items-center rounded-md">
      <Text className="text-white font-semibold">{text}</Text>
    </Pressable>
  );
}
