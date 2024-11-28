import { Image, Text, View } from "react-native";
import posts from "~/assets/data/posts.json";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";

export default function PostListItem({ post }: { post: any }) {
  return (
    <View className="bg-white">
      <View className="p-2 flex-row items-center gap-2">
        <Image
          source={{ uri: post.user.image_url }}
          className="w-16 aspect-square rounded-full"
        />
        <Text className="font-semibold">{post.user.username}</Text>
      </View>
      <Image source={{ uri: post.image_url }} className="w-full aspect-[4/3]" />
      <View className="flex-row gap-3 p-2">
        <AntDesign name="hearto" size={25} />
        <Ionicons name="chatbubble-outline" size={25} />
        <Feather name="send" size={25} />
        <Feather name="bookmark" size={25} className="ml-auto" />
      </View>
    </View>
  );
}
