import { Tabs } from "expo-router";

export default function TabNavigation() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="favourites" />
      <Tabs.Screen name="playlists" />
      <Tabs.Screen name="artists" />
    </Tabs>
  );
}