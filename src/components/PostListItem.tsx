import { Image, Text, useWindowDimensions, View } from "react-native";
import posts from "~/assets/data/posts.json";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import { AdvancedImage } from 'cloudinary-react-native';
import { sepia } from "@cloudinary/url-gen/actions/effect";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { byRadius } from "@cloudinary/url-gen/actions/roundCorners";
import { focusOn } from "@cloudinary/url-gen/qualifiers/gravity";
import { FocusOn } from "@cloudinary/url-gen/qualifiers/focusOn";
import { cld } from "../lib/cloudinary";



export default function PostListItem({ post }: { post: any }) {
  const myImage = cld.image(post.image);
  myImage
  .resize(thumbnail().width(500).height(500));  // Crop the image, focusing on the face.
  // .roundCorners(byRadius(100)); 
  // myImage
  //     .effect(sepia());

  const avatar = cld.image(post.user.avatar_url);
  avatar.resize(thumbnail().width(50).height(50).gravity(focusOn(FocusOn.face())));
  return (
    <View className="bg-white">
      <View className="p-2 flex-row items-center gap-2">
        <AdvancedImage cldImg={avatar} className="w-16 aspect-square rounded-full"/>
        {/* <Image
          source={{ uri: post.user.image_url }}
          className="w-16 aspect-square rounded-full"
        /> */}
        <Text className="font-semibold">{post.user.username}</Text>
      </View>
      <AdvancedImage cldImg={myImage} className="w-full aspect-[4/3]"/>
      {/* <Image source={{ uri: post.image_url }} className="w-full aspect-[4/3]" /> */}
      <View className="flex-row gap-3 p-2">
        <AntDesign name="hearto" size={25} />
        <Ionicons name="chatbubble-outline" size={25} />
        <Feather name="send" size={25} />
        <Feather name="bookmark" size={25} className="ml-auto" />
      </View>
    </View>
  );
}
