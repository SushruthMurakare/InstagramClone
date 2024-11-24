import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{tabBarActiveTintColor: 'black', tabBarShowLabel: false}}> 
      <Tabs.Screen
        name="index"
        options={{
          headerTitle: "Instagram",
          tabBarIcon: ({color}) => <Entypo name="home" size={30} color={color} />,
        }}
      />
        <Tabs.Screen
        name="new"
        options={{
          headerTitle: "Post",
          tabBarIcon: ({color}) => <Entypo name="squared-plus" size={30} color={color} />,
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          headerTitle: "Profile",
          tabBarIcon: ({color}) => <FontAwesome name="user" size={30} color={color} />,
        }}
      />
    </Tabs>
  );
}
