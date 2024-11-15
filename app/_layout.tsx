import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import BottomNavBar from "@/components/BottomNavBar";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";
import { useColorScheme } from "@/hooks/useColorScheme";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    // SF Pro Regular
    "SFPro-Regular": require("../assets/fonts/SFPro-Regular.ttf"),

    // SF Pro Rounded Variants
    "SFProRounded-Black": require("../assets/fonts/SFProRounded-Black.otf"),
    "SFProRounded-Bold": require("../assets/fonts/SFProRounded-Bold.otf"),
    "SFProRounded-Heavy": require("../assets/fonts/SFProRounded-Heavy.otf"),
    "SFProRounded-Light": require("../assets/fonts/SFProRounded-Light.otf"),
    "SFProRounded-Medium": require("../assets/fonts/SFProRounded-Medium.otf"),
    "SFProRounded-Regular": require("../assets/fonts/SFProRounded-Regular.otf"),
    "SFProRounded-Semibold": require("../assets/fonts/SFProRounded-Semibold.otf"),
    "SFProRounded-Thin": require("../assets/fonts/SFProRounded-Thin.otf"),
    "SFProRounded-Ultralight": require("../assets/fonts/SFProRounded-Ultralight.otf"),

    // SF Pro Text Variants
    "SFProText-Black": require("../assets/fonts/SFProText-Black.otf"),
    "SFProText-Bold": require("../assets/fonts/SFProText-Bold.otf"),
    "SFProText-Heavy": require("../assets/fonts/SFProText-Heavy.otf"),
    "SFProText-Light": require("../assets/fonts/SFProText-Light.otf"),
    "SFProText-Medium": require("../assets/fonts/SFProText-Medium.otf"),
    "SFProText-Regular": require("../assets/fonts/SFProText-Regular.otf"),
    "SFProText-Semibold": require("../assets/fonts/SFProText-Semibold.otf"),
    "SFProText-Thin": require("../assets/fonts/SFProText-Thin.otf"),
    "SFProText-Ultralight": require("../assets/fonts/SFProText-Ultralight.otf"),

    // Space Mono Regular
    "SpaceMono-Regular": require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="analytics" options={{ headerShown: false }} />
        <Stack.Screen name="subscriptions" options={{ headerShown: false }} />
        <Stack.Screen name="settings" options={{ headerShown: false }} />
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      <BottomNavBar />
    </ThemeProvider>
  );
}
