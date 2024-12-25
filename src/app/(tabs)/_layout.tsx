import { Redirect, Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useAuth } from "~/src/provider/AuthProvider";

export default function TabsLayout() {
     const {isAuthenticated} = useAuth();
     if (!isAuthenticated) {
      return <Redirect href="/auth"/>
     }
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
