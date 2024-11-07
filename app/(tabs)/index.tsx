import { useThemeColor } from "@/hooks/useThemeColor"; // Adjust path if necessary
import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
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
        Home
      </Text>
    </SafeAreaView>
  );
}
