import { View, Text, TouchableOpacity } from "react-native";
import React, { ReactNode, useMemo } from "react";
import { Swipeable } from "react-native-gesture-handler";
import { useThemeColor } from "@/hooks/useThemeColor";

type Props = {
  label: string;
  details?: ReactNode;
  onClick?: () => void;
  swipeToDelete?: boolean;
  onDelete?: () => void;
  isDestructive?: boolean;
};

const ListItem = ({
  label,
  details,
  isDestructive,
  swipeToDelete,
  onClick,
  onDelete,
}: Props) => {
  const textColor = useThemeColor({}, "text");

  const item = useMemo(
    () => (
      <TouchableOpacity
        onPress={onClick}
        className={`${
          details ? "justify-between" : "justify-start"
        } flex-row items-center w-full py-4 px-6 bg-neutral-800`}
      >
        {/* Option Text */}
        <Text
          style={{ color: isDestructive ? "#ef4444" : textColor }}
          className={`text-center text-lg font-semibold`}
        >
          {label}
        </Text>

        {/* Forward Chevron Icon */}
        {details}
      </TouchableOpacity>
    ),
    [label, details, textColor, onClick]
  );

  if (swipeToDelete) {
    return (
        <Swipeable
        renderRightActions={() => (
          <TouchableOpacity
            className={`${
              isDestructive ? "bg-red-500" : "bg-green-500"
            } justify-center items-center w-full p-4`} // Added padding for better touch area
            onPress={onDelete}
          >
            <Text
              style={{ color: textColor }}
              className="text-lg font-semibold"
            >
              Delete
            </Text>
          </TouchableOpacity>
        )}
        
      >
        {item}
      </Swipeable>
    );
  }
  return item;
};

export default ListItem;
