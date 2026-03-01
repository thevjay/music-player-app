import { useSetupTrackPlayer } from "@/hooks/useSetupTrackPlayer";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SplashScreen } from "expo-router";
import { useCallback } from "react";
import { useLogTrackPlayerState } from "@/hooks/useLogTrackPlayerState";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const handleTrackPlayerLoaded = useCallback(() => {
    SplashScreen.hideAsync();
  }, []);

  useSetupTrackPlayer({
    onLoad: handleTrackPlayerLoaded,
  });
  useLogTrackPlayerState();
  return (
    <>
      <Stack
        screenOptions={{
          headerShown: false,
          headerTitleAlign: "center",
        }}
      />
      <StatusBar style="auto" />
    </>
  );
}
