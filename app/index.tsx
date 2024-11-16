import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import Fontisto from "@expo/vector-icons/Fontisto";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Entypo from "@expo/vector-icons/Entypo";
import { Colors } from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";

const Home = () => {
  const navigation = useNavigation();
  const theme = useTheme().dark ? "dark" : "light";

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const renderActionButton = (icon, label) => (
    <View style={{ flex: 1, alignItems: "center" }}>
      <TouchableOpacity
        style={{
          width: "100%",
          height: 40,
          borderRadius: 10,
          backgroundColor: Colors.dark.primary,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "SFProText-Medium",
          color: Colors.dark.text,
          textAlign: "center",
          marginTop: 5,
        }}
      >
        {label}
      </Text>
    </View>
  );

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: Colors.dark.background,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.dark.forebackground1,
        }}
      >
        {/* Header */}
        <View
          style={{
            height: 70,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            paddingHorizontal: 10,
            backgroundColor: Colors.dark.background,
          }}
        >
          {/* Profile Section */}
          <View style={{ flexDirection: "row", alignItems: "center", gap: 15 }}>
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: Colors.light.primary,
              }}
            />
            <View>
              <Text
                style={{
                  fontFamily: "SFProText-Medium",
                  color: Colors.dark.textGray,
                  fontSize: 12,
                  marginBottom: -2,
                }}
              >
                Welcome Back 👋
              </Text>
              <Text
                style={{
                  fontFamily: "SFProText-Bold",
                  color: Colors.dark.text,
                  fontSize: 14,
                }}
              >
                Priyanka J
              </Text>
            </View>
          </View>

          {/* Notifications Icon */}
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: Colors.dark.foreground,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Fontisto name="bell" size={18} color={Colors.dark.text} />
          </TouchableOpacity>
        </View>

        {/* Main Content */}
        <ScrollView>
          {/* Balance Card */}
          <View
            style={{
              backgroundColor: Colors.dark.background,
              padding: 10,
              marginBottom: 15,
              marginTop: 15,
              gap: 15,
            }}
          >
            <View
              style={{
                padding: 15,
                borderWidth: 1,
                backgroundColor: Colors.dark.background,
                borderColor: Colors.dark.foreground,
                borderRadius: 15,
                gap: 15,
              }}
            >
              <View
                style={{
                  width: "100%",
                  height: 170,
                  backgroundColor:
                    theme === "light"
                      ? Colors.light.primary
                      : Colors.dark.primary,
                  borderRadius: 15,
                  padding: 10,
                  shadowColor: "#000",
                  shadowOffset: { width: 0, height: 4 },
                  shadowOpacity: 0.3,
                  shadowRadius: 6,
                  elevation: 10,
                }}
              >
                {/* Balance Section */}
                <View style={{ flex: 1 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: 5,
                      marginHorizontal: 8,
                    }}
                  >
                    <View style={{ flex: 1 }}>
                      <Text
                        style={{
                          fontSize: 12,
                          fontFamily: "SFProText-Regular",
                          color:
                            theme === "light"
                              ? Colors.light.text
                              : Colors.dark.text,
                          marginBottom: -8,
                        }}
                      >
                        Your Balance
                      </Text>
                      <Text
                        style={{
                          fontSize: 24,
                          fontFamily: "SFProText-Semibold",
                          color:
                            theme === "light"
                              ? Colors.light.text
                              : Colors.dark.text,
                        }}
                      >
                        ₹50,000
                      </Text>
                    </View>
                    <View style={{ flex: 1, alignItems: "flex-end" }}>
                      <TouchableOpacity
                        style={{
                          backgroundColor:
                            theme === "light"
                              ? Colors.dark.background
                              : Colors.light.background,
                          padding: 5,
                          borderRadius: 20,
                        }}
                      >
                        <Entypo
                          name="chevron-right"
                          size={24}
                          color={
                            theme === "light"
                              ? Colors.dark.text
                              : Colors.light.text
                          }
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>

                {/* Spendings Section */}
                <View style={{ marginHorizontal: 8 }}>
                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: "SFProText-Regular",
                      color:
                        theme === "light"
                          ? Colors.light.text
                          : Colors.dark.text,
                      marginBottom: -8,
                    }}
                  >
                    Today's spendings
                  </Text>
                  <Text
                    style={{
                      fontSize: 24,
                      fontFamily: "SFProText-Semibold",
                      color:
                        theme === "light"
                          ? Colors.light.text
                          : Colors.dark.text,
                    }}
                  >
                    ₹2,521{" "}
                    <Feather
                      name="trending-up"
                      size={24}
                      color={Colors.dark.lightgreen}
                    />
                  </Text>
                </View>
              </View>

              {/* Action Buttons */}
              <View style={{ flexDirection: "row", gap: 15 }}>
                {renderActionButton(
                  <MaterialCommunityIcons
                    name="bank-transfer-in"
                    size={28}
                    color={Colors.dark.text}
                  />,
                  "Request"
                )}
                {renderActionButton(
                  <MaterialCommunityIcons
                    name="bank-transfer-out"
                    size={28}
                    color={Colors.dark.text}
                  />,
                  "Transfer"
                )}
                {renderActionButton(
                  <Entypo
                    name="dots-three-horizontal"
                    size={24}
                    color={Colors.dark.text}
                  />,
                  "Other"
                )}
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 15,
                borderRadius: 15,
                marginVertical: 8,
                borderWidth: 1,
                borderColor: Colors.dark.foreground,
              }}
            >
              {/* Icon */}
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 10,
                  borderWidth: 1,
                  borderColor: Colors.dark.foreground,
                }}
              >
                <Entypo
                  name="bar-graph"
                  size={20}
                  color={Colors.dark.primary}
                />
                {/* <Image
                  source={{ uri: "https://path/to/your/icon.png" }} // Replace with actual icon URI or local image
                  style={{ width: 24, height: 24, resizeMode: "contain" }}
                /> */}
              </View>

              {/* Transaction Details */}
              <View
                style={{
                  flex: 4,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  gap: 4,
                }}
              >
                <Text
                  style={{
                    fontFamily: "SFProText-Medium",
                    color: Colors.dark.textGray, // Subtle text color for date
                  }}
                >
                  Let's check your{" "}
                  <Text
                    style={{
                      fontFamily: "SFProText-Semibold",
                      color: Colors.dark.text,
                      marginBottom: -2,
                      textOverflow: "overflow",
                    }}
                  >
                    Financial Insight
                  </Text>{" "}
                  for the month of June.
                </Text>
              </View>

              {/* Amount and Category */}
              <View style={{ alignItems: "flex-end", flex: 1 }}>
                <Link href="/analytics" asChild>
                  <TouchableOpacity
                    style={{
                      borderWidth: 1,
                      borderColor: Colors.dark.foreground,
                      padding: 5,
                      borderRadius: 20,
                    }}
                  >
                    <Entypo
                      name="chevron-right"
                      size={20}
                      color={Colors.dark.primary}
                    />
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          </View>

          {/* Recent Transactions */}
          <View
            style={{
              backgroundColor: Colors.dark.background,
              padding: 10,
              flex: 1,
              paddingBottom: 100,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text
                style={{
                  fontFamily: "SFProText-Semibold",
                  color: Colors.dark.text,
                  fontSize: 16,
                  flex: 1,
                }}
              >
                Recent Transactions
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    flex: 1,
                    textAlign: "right",
                    fontFamily: "SFProText-Medium",
                    color: Colors.dark.primary,
                    fontSize: 16,
                  }}
                >
                  See All
                </Text>
              </TouchableOpacity>
            </View>
            {/* Add transaction items here */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 15,
                borderRadius: 15,
                marginVertical: 8,
                borderWidth: 1,
                borderColor: Colors.dark.foreground,
              }}
            >
              {/* Icon */}
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 10,
                  borderWidth: 1,
                  borderColor: Colors.dark.foreground,
                }}
              >
                <Fontisto name="netflix" size={20} color="red" />
                {/* <Image
                  source={{ uri: "https://path/to/your/icon.png" }} // Replace with actual icon URI or local image
                  style={{ width: 24, height: 24, resizeMode: "contain" }}
                /> */}
              </View>

              {/* Transaction Details */}
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontFamily: "SFProText-Semibold",
                    color: Colors.dark.text,
                    marginBottom: -2,
                  }}
                >
                  Netflix Subscriptions
                </Text>
                <Text
                  style={{
                    fontFamily: "SFProText-Medium",
                    color: Colors.dark.textGray, // Subtle text color for date
                  }}
                >
                  June 20, 2024 at 1:50 PM
                </Text>
              </View>

              {/* Amount and Category */}
              <View style={{ alignItems: "flex-end" }}>
                <Text
                  style={{
                    fontFamily: "SFProText-Bold",
                    color: Colors.dark.error,
                    marginBottom: -2,
                  }}
                >
                  - ₹150.00
                </Text>
                <Text
                  style={{
                    fontFamily: "SFProText-Regular",
                    color: Colors.dark.textGray,
                  }}
                >
                  Entertainment
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 15,
                borderRadius: 15,
                marginVertical: 8,
                borderWidth: 1,
                borderColor: Colors.dark.foreground,
              }}
            >
              {/* Icon */}
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 10,
                  borderWidth: 1,
                  borderColor: Colors.dark.foreground,
                }}
              >
                <FontAwesome name="bank" size={20} color="#60a5fa" />
                {/* <Image
                  source={{ uri: "https://path/to/your/icon.png" }} // Replace with actual icon URI or local image
                  style={{ width: 24, height: 24, resizeMode: "contain" }}
                /> */}
              </View>

              {/* Transaction Details */}
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontFamily: "SFProText-Semibold",
                    color: Colors.dark.text,
                    marginBottom: -2,
                  }}
                >
                  Salary Credited
                </Text>
                <Text
                  style={{
                    fontFamily: "SFProText-Medium",
                    color: Colors.dark.textGray, // Subtle text color for date
                  }}
                >
                  June 20, 2024 at 1:50 PM
                </Text>
              </View>

              {/* Amount and Category */}
              <View style={{ alignItems: "flex-end" }}>
                <Text
                  style={{
                    fontFamily: "SFProText-Bold",
                    color: Colors.light.lightgreen,
                    marginBottom: -2,
                  }}
                >
                  + ₹6,550.00
                </Text>
                <Text
                  style={{
                    fontFamily: "SFProText-Regular",
                    color: Colors.dark.textGray,
                  }}
                >
                  Entertainment
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 15,
                borderRadius: 15,
                marginVertical: 8,
                borderWidth: 1,
                borderColor: Colors.dark.foreground,
              }}
            >
              {/* Icon */}
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 10,
                  borderWidth: 1,
                  borderColor: Colors.dark.foreground,
                }}
              >
                <Fontisto name="netflix" size={20} color="red" />
                {/* <Image
                  source={{ uri: "https://path/to/your/icon.png" }} // Replace with actual icon URI or local image
                  style={{ width: 24, height: 24, resizeMode: "contain" }}
                /> */}
              </View>

              {/* Transaction Details */}
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontFamily: "SFProText-Semibold",
                    color: Colors.dark.text,
                    marginBottom: -2,
                  }}
                >
                  Netflix Subscriptions
                </Text>
                <Text
                  style={{
                    fontFamily: "SFProText-Medium",
                    color: Colors.dark.textGray, // Subtle text color for date
                  }}
                >
                  June 20, 2024 at 1:50 PM
                </Text>
              </View>

              {/* Amount and Category */}
              <View style={{ alignItems: "flex-end" }}>
                <Text
                  style={{
                    fontFamily: "SFProText-Bold",
                    color: Colors.dark.error,
                    marginBottom: -2,
                  }}
                >
                  - ₹150.00
                </Text>
                <Text
                  style={{
                    fontFamily: "SFProText-Regular",
                    color: Colors.dark.textGray,
                  }}
                >
                  Entertainment
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 15,
                borderRadius: 15,
                marginVertical: 8,
                borderWidth: 1,
                borderColor: Colors.dark.foreground,
              }}
            >
              {/* Icon */}
              <View
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: 10,
                  borderWidth: 1,
                  borderColor: Colors.dark.foreground,
                }}
              >
                <Fontisto name="netflix" size={20} color="red" />
                {/* <Image
                  source={{ uri: "https://path/to/your/icon.png" }} // Replace with actual icon URI or local image
                  style={{ width: 24, height: 24, resizeMode: "contain" }}
                /> */}
              </View>

              {/* Transaction Details */}
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    fontFamily: "SFProText-Semibold",
                    color: Colors.dark.text,
                    marginBottom: -2,
                  }}
                >
                  Netflix Subscriptions
                </Text>
                <Text
                  style={{
                    fontFamily: "SFProText-Medium",
                    color: Colors.dark.textGray, // Subtle text color for date
                  }}
                >
                  June 20, 2024 at 1:50 PM
                </Text>
              </View>

              {/* Amount and Category */}
              <View style={{ alignItems: "flex-end" }}>
                <Text
                  style={{
                    fontFamily: "SFProText-Bold",
                    color: Colors.dark.error,
                    marginBottom: -2,
                  }}
                >
                  - ₹150.00
                </Text>
                <Text
                  style={{
                    fontFamily: "SFProText-Regular",
                    color: Colors.dark.textGray,
                  }}
                >
                  Entertainment
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
