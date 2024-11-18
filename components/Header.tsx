import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { useTheme } from "@react-navigation/native";

const Header = ({
  title = "Header",
  showProfile = false,
  profileName = "",
  showNotification = false,
  showAddButton = false,
  onNotificationPress = () => {},
  onAddButtonPress = () => {},
}) => {
  const theme = useTheme().dark ? "dark" : "light";

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === "dark" ? Colors.dark.background : Colors.light.background },
      ]}
    >
      {/* Left Section: Title or Profile Section */}
      <View style={[styles.leftSection, showProfile && styles.withProfile]}>
        {showProfile && (
          <View
            style={[
              styles.profile,
              { backgroundColor: theme === "dark" ? Colors.dark.primary : Colors.light.primary },
            ]}
          />
        )}
        <View>
          {showProfile ? (
            <>
              <Text
                style={[
                  styles.subtitle,
                  { color: theme === "dark" ? Colors.dark.textGray : Colors.light.textGray },
                ]}
              >
                Welcome Back 👋
              </Text>
              <Text
                style={[
                  styles.profileName,
                  { color: theme === "dark" ? Colors.dark.text : Colors.light.text },
                ]}
              >
                {profileName}
              </Text>
            </>
          ) : (
            <Text
              style={[
                styles.title,
                { color: theme === "dark" ? Colors.dark.text : Colors.light.text },
              ]}
            >
              {title}
            </Text>
          )}
        </View>
      </View>

      {/* Right Section: Notification or Add Button */}
      <View style={styles.rightSection}>
        {showNotification && (
          <TouchableOpacity
            style={[
              styles.iconButton,
              { borderColor: theme === "dark" ? Colors.dark.foreground : Colors.light.foreground },
            ]}
            onPress={onNotificationPress}
          >
            <Fontisto
              name="bell"
              size={18}
              color={theme === "dark" ? Colors.dark.text : Colors.light.text}
            />
          </TouchableOpacity>
        )}
        {showAddButton && (
          <TouchableOpacity
            style={[
              styles.iconButton,
              { borderColor: theme === "dark" ? Colors.dark.foreground : Colors.light.foreground },
            ]}
            onPress={onAddButtonPress}
          >
            <Fontisto
              name="plus-a"
              size={18}
              color={theme === "dark" ? Colors.dark.text : Colors.light.text}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  leftSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  withProfile: {
    gap: 15,
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  title: {
    fontFamily: "SFProText-Bold",
    fontSize: 16,
  },
  subtitle: {
    fontFamily: "SFProText-Medium",
    fontSize: 12,
    marginBottom: -2,
  },
  profileName: {
    fontFamily: "SFProText-Bold",
    fontSize: 14,
  },
  rightSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 15,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Header;