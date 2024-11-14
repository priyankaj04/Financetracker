import React from "react";
import BottomNavBar from "@/components/BottomNavBar";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";

function Subscriptions() {
    const { colors } = useTheme();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{ fontFamily: "SFPro-Regular", color: colors.text }}>
      Subscriptions world!
      </Text>
    </SafeAreaView>
  );
}

export default Subscriptions;