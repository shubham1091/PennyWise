import ListItem from "@/components/ListItem";

import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Setting = () => {
  
  return (
    <View
      className="flex-1  overflow-hidden m-3"
    >
      <GestureHandlerRootView className="">
        <ListItem
          label="Categories"
          details={
            <Ionicons
              name="chevron-forward"
              size={24}
              color="#fff"
            />
          }
          onClick={() => console.log("Clicked Categories")}
        />

        <ListItem
          label="Erase Data"
          swipeToDelete
          isDestructive
          onClick={() => console.log("Clicked Erase Data")}
          details={
            <Ionicons
              name="trash"
              size={24}
              color="#ef4444"
            />
          }
          onDelete={() => console.log("Clicked Delete")}
        />
      </GestureHandlerRootView>
    </View>
  );
};

export default Setting;
