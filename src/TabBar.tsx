import * as React from "react";
import type { ViewProps } from "react-native";
import type { BubblingEventHandler } from "react-native/Libraries/Types/CodegenTypes";

const YLDTabBar = (await import("../js/YLDTabBarNativeComponent")).default;

export interface TabBarProps extends ViewProps {
  items: string[];
  selectedItem: number;
  onSelectItem: (_: { index: number }) => void;
}
export function TabBar({ onSelectItem, ...props }: TabBarProps) {
  const handleSelectItem = React.useCallback<
    BubblingEventHandler<{ index: number }>
  >(
    (event) => {
      onSelectItem(event.nativeEvent);
    },
    [onSelectItem],
  );
  return <YLDTabBar {...props} onSelectItem={handleSelectItem} />;
}
