import React, { useState, useCallback } from "react";
import BottomNavBar from "@/components/BottomNavBar";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "@react-navigation/native";
import dayjs from "dayjs";
import {
  Fontisto,
  MaterialCommunityIcons,
  Feather,
  Ionicons,
} from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import DateTimePicker, { DateType, ModeType } from "react-native-ui-datepicker";
import Header from "@/components/Header";

function Subscriptions() {
  const { colors } = useTheme();
  const [dates, setDates] = useState<DateType[] | undefined>([
    "2024-11-03T18:30:00.000Z",
    "2024-11-05T18:30:00.000Z",
    "2024-11-06T18:30:00.000Z",
    "2024-11-18T18:30:00.000Z",
    "2024-11-19T18:30:00.000Z",
    "2024-11-20T18:30:00.000Z",
    "2024-11-21T18:30:00.000Z",
    "2024-11-23T18:30:00.000Z",
    "2024-11-24T18:30:00.000Z",
    "2024-11-25T18:30:00.000Z",
    "2024-11-26T18:30:00.000Z",
    "2024-11-27T18:30:00.000Z",
  ]);

  const onChange = useCallback(
    (params) => {
      setDates(params.dates);
    },
    [""]
  );

  const GetIcon = ({ iconName, color, size }) => {
    switch (iconName) {
      case "netflix":
        return <Fontisto name="netflix" size={size} color={color} />;
      case "spotify":
        return <Fontisto name="spotify" size={size} color={color} />;
      case "bank":
        return <MaterialCommunityIcons name="bank" size={size} color={color} />;
      case "dumbbell":
        return (
          <MaterialCommunityIcons name="dumbbell" size={size} color={color} />
        );
      case "mobile":
        return <Feather name="smartphone" size={size} color={color} />;
      case "chat":
        return <Ionicons name="chatbubble" size={size} color={color} />;
      default:
        return <Feather name="help-circle" size={size} color={color} />; // Fallback icon
    }
  };

  const Data = [
    {
      name: "Netflix",
      time: "Montly",
      color: "red",
      amount: 199,
      icon: "netflix",
    },
    {
      name: "Spotify",
      time: "3-Month once",
      color: "#34d399",
      amount: 350,
      icon: "spotify",
    },
    {
      name: "EMI",
      time: "Montly",
      color: "#60a5fa",
      amount: 4000,
      icon: "bank",
    },
    {
      name: "GYM",
      time: "Montly",
      color: "#a78bfa",
      amount: 1400,
      icon: "dumbbell",
    },
    {
      name: "Phone Recharge",
      time: "Montly",
      color: "#38bdf8",
      amount: 235,
      icon: "mobile",
    },
    {
      name: "Chat GPT",
      time: "Montly",
      color: "white",
      amount: 495,
      icon: "chat",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.dark.background }}>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.dark.forebackground1,
        }}
      >
        <Header
          title="Payments"
          showAddButton={true}
          onAddButtonPress={() => console.log("Add Button Pressed")}
        />
        <ScrollView>
          <View
            style={{
              flex: 1,
              backgroundColor: Colors.dark.background,
              marginTop: 15,
              padding: 15,
              marginBottom: 15,
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
              <DateTimePicker
                mode={"multiple"}
                locale={"en"}
                dates={dates}
                displayFullDays
                onChange={onChange}
                headerButtonColor={Colors.dark.primary}
                selectedItemColor={Colors.dark.primary}
                timePicker={false}
                selectedTextStyle={{
                  color: "#fff",
                  fontFamily: "SFProText-Bold",
                }}
                headerTextStyle={{
                  color: Colors.dark.text,
                  fontFamily: "SFProText-Semibold",
                }}
                weekDaysTextStyle={{
                  color: Colors.dark.text,
                  fontFamily: "SFProText-Semibold",
                }}
                calendarTextStyle={{
                  color: "#fff",
                  fontFamily: "SFProText-Medium",
                }}
                // eslint-disable-next-line react-native/no-inline-styles
                todayContainerStyle={{
                  borderWidth: 1,
                }}
              />
            </View>
          </View>
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
                Subscriptions
              </Text>
              <Text
                style={{
                  fontFamily: "SFProText-Semibold",
                  color: Colors.dark.primary,
                  fontSize: 16,
                  flex: 1,
                  textAlign: "right",
                }}
              >
                ₹
                {Data.reduce(
                  (sum, item) => sum + item.amount,
                  0
                ).toLocaleString("en-IN")}
              </Text>
            </View>
            {/* Add transaction items here */}
            <FlatList
              data={Data}
              renderItem={({ item }) => (
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
                    <GetIcon
                      iconName={item.icon}
                      color={item.color}
                      size={20}
                    />
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
                      {item.name}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "SFProText-Medium",
                        color: Colors.dark.textGray, // Subtle text color for date
                      }}
                    >
                      {item.time}
                    </Text>
                  </View>

                  {/* Amount and Category */}
                  <View style={{ alignItems: "flex-end" }}>
                    <Text
                      style={{
                        fontFamily: "SFProText-Bold",
                        color: Colors.dark.primary,
                        marginBottom: -2,
                      }}
                    >
                      - ₹{item.amount.toLocaleString("en-IN")}
                    </Text>
                  </View>
                </View>
              )}
              keyExtractor={(item) => item.name}
            />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default Subscriptions;
