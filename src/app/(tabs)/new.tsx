import { Image, Text, View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import posts from "~/assets/data/posts.json";

export default function FeedScreen() {
  const [caption, setCaption] = useState("");
  return (
    <View className="p-3 items-center flex-1">
      <Image
        source={{
          uri: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
        }}
        className="w-52 aspect-[3/4] rounded-lg"
      />
      <Text onPress={() => {}} className="text-blue-500 font-semibold m-5">
        Change
      </Text>

      <TextInput
        value={caption}
        placeholder="Whats on your mind?"
        className="w-full p-3"
        onChangeText={(value) => setCaption(value)}
      />

      <View className="mt-auto w-full">
        <Pressable className="bg-blue-500 w-full p-3 items-center rounded-md">
          <Text className="text-white font-semibold">Share</Text>
        </Pressable>
      </View>
    </View>
  );
}
