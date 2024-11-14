import React from "react";
import BottomNavBar from "@/components/BottomNavBar";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";

function Analytics() {
  const { colors } = useTheme();
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text style={{ fontFamily: "SFPro-Regular", color: colors.text }}>
        Analytics world!
      </Text>
    </SafeAreaView>
  );
}

export default Analytics;
 