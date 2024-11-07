import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const reports = () => {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  return (
    <SafeAreaView
      style={{ backgroundColor }}
      className="flex-1 items-center justify-center"
    >
      <Text
        style={{ color: textColor }}
        className="text-xl"
      >
        reports
      </Text>
    </SafeAreaView>
  );
};

export default reports;
