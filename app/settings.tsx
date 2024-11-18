import React from "react";
import BottomNavBar from "@/components/BottomNavBar";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import Header from '@/components/Header';
import { Colors } from "@/constants/Colors";

function Settings() {
    const { colors } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.dark.background }}>
      <View style={{ flex: 1, backgroundColor: Colors.dark.forebackground1 }}>
        <Header title="Settings" />
      </View>
    </SafeAreaView>
  );
}

export default Settings;