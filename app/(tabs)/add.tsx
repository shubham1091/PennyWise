import { useThemeColor } from "@/hooks/useThemeColor";
import React from "react";
import { Text, View } from "react-native";

const add = () => {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  return (
    <View
      style={{ backgroundColor }}
      className="flex-1 items-center justify-center"
    >
      <Text
        style={{ color: textColor }}
        className="text-xl"
      >
        add
      </Text>
    </View>
  );
};

export default add;
