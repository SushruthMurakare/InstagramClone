import { Image, Text, TextInput, View } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import Button from "~/src/components/Button";


export default function ProfileScreen() {
    const [image, setImage] = useState<string | null>(null);
    const [userName, setUserName] = useState('')
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
  };
  return (
  <View className="p-3">
   {image ? (
        <Image
          source={{
            uri: image,
          }}
          className="w-52 aspect-square self-center rounded-full"
        />
      ) : (
        <View className="w-52 aspect-square self-center rounded-full bg-slate-300"/>
      )}
      <Text onPress={pickImage} className="text-blue-500 font-semibold m-5 self-center">Change</Text>
      <View className="mt-5 mb-5">
        <Text className="mb-2 text-gray-500 font-semibold">Username</Text>
        <TextInput placeholder="UserName" value={userName} onChangeText={setUserName} className="border-gray-300 border p-3 rounded-md" />
      </View>
      <View>

      </View>
      <View className="gap-2 mt-auto">
      <Button text={'Update'} onPress={()=>{}} />
      <Button text={'Sign out'} onPress={()=>{}} />
      </View>
  </View>
)
}
