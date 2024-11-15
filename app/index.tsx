import React, { useEffect } from "react";
import { View, Text, useColorScheme } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { Stack, useNavigation } from "expo-router";
import { Colors } from "@/constants/Colors";
import Feather from "@expo/vector-icons/Feather";

function Home() {
  const navigation = useNavigation();
  const theme = useColorScheme();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Text
        style={{
          fontFamily: "SFPro-Regular",
          color: theme === "light" ? Colors.light.text : Colors.dark.text,
        }}
      >
        Hello world!
      </Text>
      <View
        style={{
          width: "96%",
          margin: 10,
          height: 190,
          backgroundColor:
            theme === "light" ? Colors.light.primary : Colors.dark.primary,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 6,
          elevation: 10,
          borderRadius: 15,
          padding: 10,
        }}
      >
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <View>
            <Text
              style={{
                marginBottom: -5,
                fontSize: 12,
                fontFamily: "SFProText-Regular",
                color: theme === "light" ? Colors.light.text : Colors.dark.text,
              }}
            >
              Your Balance
            </Text>
            <Text
              style={{
                marginTop: -5,
                fontFamily: "SFProText-Bold",
                fontSize: 24,
                color: theme === "light" ? Colors.light.text : Colors.dark.text,
              }}
            >
              ₹50,000
            </Text>
          </View>
          <View>
            <Text
              style={{
                marginBottom: -5,
                alignItems: "center",
                fontSize: 12,
                fontFamily: "SFProText-Regular",
                color: theme === "light" ? Colors.light.text : Colors.dark.text,
              }}
            >
              Credit
            </Text>
            <Text
              style={{
                marginTop: -5,
                fontFamily: "SFProText-Bold",
                fontSize: 24,
                color: theme === "light" ? Colors.light.text : Colors.dark.text,
              }}
            >
              ₹2,521{" "}
              <Feather name="trending-up" size={24} color={Colors.dark.lightgreen} />
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Home;
