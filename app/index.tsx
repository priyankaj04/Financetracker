import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { Stack, useNavigation } from "expo-router";

function Home() {
  const { colors } = useTheme();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text style={{ fontFamily: "SFPro-Regular", color: colors.text }}>
        Hello world!
      </Text>
      
    </SafeAreaView>
  );
}

export default Home;
