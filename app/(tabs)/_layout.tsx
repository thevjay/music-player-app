import { colors, fontSize } from "@/constants/tokens";
import { Tabs } from "expo-router";
import { BlurView } from "expo-blur";
import { StyleSheet } from "react-native";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Ionicons,
  FontAwesome6,
} from "@expo/vector-icons";

export default function TabNavigation() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        headerShown: false,
        tabBarStyle: {
          position: "absolute",
          // left: 20,
          // right: 20,
          bottom: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          borderTopWidth: 0,
          paddingTop: 10,
          paddingBottom: 20,
          height: 80,
        },
        tabBarLabelStyle: {
          fontSize: fontSize.xs,
          fontWeight: "500",
        },
        tabBarBackground: () => (
          <BlurView
            intensity={95}
            style={{
              ...StyleSheet.absoluteFillObject,
              overflow: "hidden",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        ),
      }}
    >
      <Tabs.Screen
        name="favourites"
        options={{
          title: "Favourites",
          tabBarIcon: ({ color }) => (
            <FontAwesome name="heart" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="playlists"
        options={{
          title: "Playlists",
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons
              name="playlist-play"
              size={30}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="(songs)"
        options={{
          title: "Songs",
          tabBarIcon: ({ color }) => (
            <Ionicons name="musical-notes-sharp" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="artists"
        options={{
          title: "Artists",
          tabBarIcon: ({ color }) => (
            <FontAwesome6 name="users-line" size={20} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
