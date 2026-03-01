import { Stack } from "expo-router";
import { Platform } from "react-native";
import { colors } from "@/constants/tokens";

const SongsScreenLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: "Songs",

          // Large title only on iOS
          headerLargeTitle: Platform.OS === "ios",

          // Dark header background
          headerStyle: {
            backgroundColor: colors.background,
          },

          // Title color
          headerTintColor: colors.text,

          // Large title color
          headerLargeTitleStyle: {
            color: colors.text,
          },

          ...(Platform.OS === "ios"
            ? {
                headerSearchBarOptions: {
                  placeholder: "Find in songs",
                  hideWhenScrolling: false,
                  tintColor: colors.primary,
                },
              }
            : {}),
        }}
      />
    </Stack>
  );
};

export default SongsScreenLayout;