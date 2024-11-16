import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { SafeAreaView } from "react-native-safe-area-context";
import { Colors } from "@/constants/Colors";
import { BarChart } from "react-native-gifted-charts";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome from '@expo/vector-icons/FontAwesome';

function analytics() {
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedPeriod, setSelectedPeriod] = useState("This Week");

  const data = [
    { label: "Food & Beverages", value: 1345.6, color: "#4ade80" },
    { label: "Subscription", value: 3172.8, color: "#fbbf24" },
    { label: "EMI", value: 5057.6, color: "#60a5fa" },
  ];


  const weeklydata = [
    { label: "Mon", value: 300 },
    { label: "Tue", value: 500 },
    { label: "Wed", value: 430, showTooltip: true }, // Show tooltip for Wednesday
    { label: "Thu", value: 700 },
    { label: "Fri", value: 200 },
    { label: "Sat", value: 600 },
    { label: "Sun", value: 400 },
  ];

  const totalSpent = data.reduce((sum, item) => sum + item.value, 0);

  const calculateBarWidth = (value) => `${(value / totalSpent) * 100}%`;

  const previousMonthSpent = 10000; // Example previous month's spending
  const currentMonthSpent = data.reduce((sum, item) => sum + item.value, 0); // Calculate current month spending
  const spendingDifference = currentMonthSpent - previousMonthSpent;
  const spendingPercentageChange = Math.round(
    (spendingDifference / previousMonthSpent) * 100
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.dark.background }}>
      <View style={{ flex: 1, backgroundColor: Colors.dark.forebackground1 }}>
        {/* Header Section */}
        <View
          style={{
            height: 70,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
            paddingHorizontal: 10,
            backgroundColor: Colors.dark.background,
          }}
        >
          <Text
            style={{
              fontFamily: "SFProText-Bold",
              color: Colors.dark.text,
              fontSize: 16,
            }}
          >
            Statistics
          </Text>
        </View>

        <ScrollView>
          {/* Spent Overview */}
          <View
            style={{
              padding: 10,
              marginTop: 15,
              backgroundColor: Colors.dark.background,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <View>
                <Text
                  style={{
                    fontFamily: "SFProText-Medium",
                    fontSize: 12,
                    color: Colors.dark.textGray,
                  }}
                >
                  Spent Overview
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "baseline",
                    marginTop: -5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: "SFProText-Semibold",
                      color: Colors.dark.text,
                    }}
                  >
                    ₹10,576.00
                  </Text>
                  <Text
                    style={{
                      marginLeft: 8,
                      fontSize: 14,
                      fontFamily: "SFProText-Regular",
                      color: Colors.dark.lightgreen,
                    }}
                  >
                    ▲ 10%
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  width: 120,
                  height: 40,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: Colors.dark.foreground,
                  justifyContent: "center",
                }}
              >
                <Picker
                  selectedValue={selectedMonth}
                  onValueChange={(itemValue) => setSelectedMonth(itemValue)}
                  mode="dropdown"
                  dropdownIconColor="white"
                  style={{ width: "100%", color: Colors.dark.text }}
                >
                  <Picker.Item label="January" value="January" />
                  <Picker.Item label="February" value="February" />
                  <Picker.Item label="March" value="March" />
                </Picker>
              </TouchableOpacity>
            </View>

            {/* Horizontal Bar Chart */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 10,
                gap: 5,
                width: "97%",
              }}
            >
              {data.map((item, index) => (
                <View
                  key={index}
                  style={{
                    height: 15,
                    backgroundColor: item.color,
                    width: calculateBarWidth(item.value),
                    borderRadius: 5,
                  }}
                />
              ))}
            </View>

            {/* Legend Section */}
            <View>
              {data.map((item, index) => (
                <View
                  key={index}
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 3,
                  }}
                >
                  <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        backgroundColor: item.color,
                        borderRadius: 5,
                        marginRight: 8,
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: "SFProText-Regular",
                        fontSize: 12,
                        color: Colors.dark.text,
                      }}
                    >
                      {item.label}
                    </Text>
                  </View>
                  <Text
                    style={{
                      fontFamily: "SFProText-Semibold",
                      fontSize: 14,
                      color: Colors.dark.text,
                    }}
                  >
                    ₹{item.value.toLocaleString("en-IN")}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          {/* Weekly Expenses */}
          <View
            style={{
              marginTop: 15,
              padding: 10,
              backgroundColor: Colors.dark.background,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 10,
              }}
            >
              <View>
                <Text
                  style={{
                    fontFamily: "SFProText-Medium",
                    fontSize: 12,
                    color: Colors.dark.textGray,
                  }}
                >
                  Total Expenses
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "baseline",
                    marginTop: -5,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 20,
                      fontFamily: "SFProText-Semibold",
                      color: Colors.dark.text,
                    }}
                  >
                    ₹7,576.00
                  </Text>
                  <Text
                    style={{
                      marginLeft: 8,
                      fontSize: 14,
                      fontFamily: "SFProText-Regular",
                      color: "red",
                    }}
                  >
                    ▼ 12.8%
                  </Text>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  width: 120,
                  height: 40,
                  borderRadius: 5,
                  borderWidth: 1,
                  borderColor: Colors.dark.foreground,
                  justifyContent: "center",
                }}
              >
                <Picker
                  selectedValue={selectedPeriod}
                  onValueChange={(itemValue) => setSelectedPeriod(itemValue)}
                  mode="dropdown"
                  dropdownIconColor="white"
                  style={{ width: "100%", color: Colors.dark.text }}
                >
                  <Picker.Item label="This Week" value="This Week" />
                  <Picker.Item label="Last Week" value="Last Week" />
                  <Picker.Item label="This Month" value="This Month" />
                  <Picker.Item label="This Year" value="This Year" />
                </Picker>
              </TouchableOpacity>
            </View>

            {/* Bar Chart */}
            <BarChart
              data={weeklydata}
              width={300}
              parentWidth={300}
              height={200}
              barWidth={25}
              noOfSections={5}
              xAxisType="solid"
              rulesType="solid"
              rulesColor={Colors.dark.foreground}
              spacing={18}
              barBorderRadius={5}
              frontColor="rgba(27, 108, 232, 1)"
              showTooltipOnBarPress
              renderTooltip={(item) => (
                <View
                  style={{
                    marginBottom: -250,
                    padding: 5,
                    borderRadius: 5,
                  }}
                >
                  <Text style={{ color: "white", fontFamily: "SFProText-Regular" }}>
                    ${item.value.toFixed(2)}
                  </Text>
                </View>
              )}
              color="white"
              textColor="white"
              sectionColors={Colors.dark.textGray}
              yAxisTextStyle={{
                color: Colors.dark.textGray, // Set Y-axis text color to white
                fontSize: 12,
                fontFamily: "SFProText-Medium",
              }}
              xAxisColor={Colors.dark.foreground}
              yAxisColor={Colors.dark.foreground}
              autoCenterTooltip
              xAxisLabelTextStyle={{ color: Colors.dark.textGray, fontFamily: 'SFProText-Medium' }}
              yAxisThickness={1} // Optional: Adjust Y-axis line thickness for clarity
              xAxisThickness={1} // Optional: Adjust X-axis line thickness for clarity
            />

          </View>

          {/* Weekly Expenses */}
          <View
            style={{
              marginTop: 15,
              padding: 10,
              backgroundColor: Colors.dark.background,
              marginBottom: 100,
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: "SFProText-Medium",
                  fontSize: 12,
                  color: Colors.dark.textGray,
                }}
              >
                Income vs Expenses
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 3,
                }}
              >
                <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", gap: 10 }}>
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
                    <FontAwesome
                    name="money"
                    size={18}
                    color={'#4ade80'}
                  />
                    {/* <Fontisto name="plus-a" size={18} color={Colors.dark.text} /> */}
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: "SFProText-Medium",
                      color: Colors.dark.text,
                    }}
                  >
                    Income
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontFamily: "SFProText-Semibold",
                      fontSize: 14,
                      color: Colors.dark.lightgreen,
                      flex: 1,
                      alignItems: 'right'
                    }}
                  >
                    ₹5,000
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 3,
                }}
              >
                <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", gap: 10 }}>
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
                    <FontAwesome
                    name="money"
                    size={18}
                    color={Colors.dark.error}
                  />
                    {/* <Fontisto name="plus-a" size={18} color={Colors.dark.text} /> */}
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: "SFProText-Medium",
                      color: Colors.dark.text,
                    }}
                  >
                    Expenses
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontFamily: "SFProText-Semibold",
                      fontSize: 14,
                      color: Colors.dark.error,
                      flex: 1,
                      alignItems: 'right'
                    }}
                  >
                    ₹3,000
                  </Text>
                </View>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: 3,
                }}
              >
                <View style={{ display: 'flex', flexDirection: "row", alignItems: "center", gap: 10 }}>
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
                    <MaterialCommunityIcons
                    name="piggy-bank"
                    size={18}
                    color={'#f472b6'}
                  />
                    {/* <Fontisto name="plus-a" size={18} color={Colors.dark.text} /> */}
                  </TouchableOpacity>
                  <Text
                    style={{
                      fontFamily: "SFProText-Medium",
                      color: Colors.dark.text,
                    }}
                  >
                    Savings
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontFamily: "SFProText-Semibold",
                      fontSize: 14,
                      color: Colors.dark.text,
                      flex: 1,
                      alignItems: 'right'
                    }}
                  >
                    ₹2,000
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default analytics;
