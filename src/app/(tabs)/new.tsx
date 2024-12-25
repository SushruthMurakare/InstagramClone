import { Image, Text, View, TextInput, Pressable } from "react-native";
import { useEffect, useState } from "react";
import posts from "~/assets/data/posts.json";
import * as ImagePicker from "expo-image-picker";
import Button from "~/src/components/Button";

export default function FeedScreen() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    if (!image) {
      pickImage();
    }
  }, [image]);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images", "videos"],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  return (
    <View className="p-3 items-center flex-1">
      {image && (
        <Image
          source={{
            uri: image,
          }}
          className="w-52 aspect-[3/4] rounded-lg"
        />
      )}
      <Text onPress={pickImage} className="text-blue-500 font-semibold m-5">
        Change
      </Text>

      <TextInput
        value={caption}
        placeholder="Whats on your mind?"
        className="w-full p-3"
        onChangeText={(value) => setCaption(value)}
      />

      <View className="mt-auto w-full">
        {/* <Pressable className="bg-blue-500 w-full p-3 items-center rounded-md">
          <Text className="text-white font-semibold">Share</Text>
        </Pressable> */}
        <Button text={'Share'} onPress={()=>{}} />
      </View>
    </View>
  );
}
