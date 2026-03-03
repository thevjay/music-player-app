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
      >
        <Stack.Screen 
          name="player"
          options={{
            presentation: 'card',
            gestureEnabled: true,
            gestureDirection: 'vertical',
            animationDuration: 400,
            headerShown: false
          }}
        />
      </Stack>
      <StatusBar style="auto" />
    </>
  );
}
