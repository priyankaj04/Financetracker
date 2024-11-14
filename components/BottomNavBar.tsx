import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";

import { useRef } from "react";
import { useTheme, useNavigationState } from "@react-navigation/native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

export default function BottomNavBar() {
  const currentRouteName = useNavigationState(
    (state) => state.routes[state.index]?.name
  );
  const { colors } = useTheme();

  // Separate animation refs for each button
  const homeScaleAnim = useRef(new Animated.Value(1)).current;
  const analyticsScaleAnim = useRef(new Animated.Value(1)).current;
  const subscriptionsScaleAnim = useRef(new Animated.Value(1)).current;
  const settingsScaleAnim = useRef(new Animated.Value(1)).current;

  // Function to animate button press
  const animateScale = (scaleAnim: Animated.Value) => {
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1.05,
        duration: 70,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 50,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        {/* Home Icon */}
        <Link href="/" asChild>
          <TouchableOpacity onPress={() => animateScale(homeScaleAnim)}>
            <Animated.View
              style={[
                currentRouteName != "index" ? styles.tabButton : styles.centerButton,
                { transform: [{ scale: homeScaleAnim }] },
              ]}
            >
              <FontAwesome
                name="home"
                size={28}
                color={currentRouteName != "index" ? "#687076" : "white"}
              />
            </Animated.View>
          </TouchableOpacity>
        </Link>

        {/* Analytics Icon */}
        <Link href="/analytics" asChild>
          <TouchableOpacity onPress={() => animateScale(analyticsScaleAnim)}>
            <Animated.View
              style={[
                currentRouteName != "analytics" ? styles.tabButton : styles.centerButton,
                { transform: [{ scale: analyticsScaleAnim }] },
              ]}
            >
              <FontAwesome
                name="pie-chart"
                size={28}
                color={currentRouteName != "analytics" ? "#687076" : "white"}
              />
            </Animated.View>
          </TouchableOpacity>
        </Link>

        {/* Subscriptions Icon */}
        <Link href="/subscriptions" asChild>
          <TouchableOpacity onPress={() => animateScale(subscriptionsScaleAnim)}>
            <Animated.View
              style={[
                currentRouteName != "subscriptions" ? styles.tabButton : styles.centerButton,
                { transform: [{ scale: subscriptionsScaleAnim }] },
              ]}
            >
              <Ionicons
                name="calendar"
                size={28}
                color={currentRouteName != "subscriptions" ? "#687076" : "white"}
              />
            </Animated.View>
          </TouchableOpacity>
        </Link>

        {/* Settings Icon */}
        <Link href="/settings" asChild>
          <TouchableOpacity onPress={() => animateScale(settingsScaleAnim)}>
            <Animated.View
              style={[
                currentRouteName != "settings" ? styles.tabButton : styles.centerButton,
                { transform: [{ scale: settingsScaleAnim }] },
              ]}
            >
              <Ionicons
                name="settings"
                size={28}
                color={currentRouteName != "settings" ? "#687076" : "white"}
              />
            </Animated.View>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  tabContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    paddingHorizontal: 10,
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  labelInactive: {
    color: "#687076",
    fontSize: 12,
    marginTop: 4,
  },
  centerButton: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#1b6ce8",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
});
