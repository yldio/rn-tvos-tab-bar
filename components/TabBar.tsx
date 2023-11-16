import * as React from "react";
import type { BubblingEventHandler, ViewProps } from "react-native";

const YLDTabBar = require("../js/YLDTabBarNativeComponent").default;

export interface TabBarProps extends ViewProps {
  items: string[];
  selectedItem: number;
  onSelectItem: (_: { index: number }) => void;
}
export function TabBar({ onSelectItem, ...props }: TabBarProps) {
  const handleSelectItem = React.useCallback(
    (event: BubblingEventHandler<{ index: number }>) => {
      onSelectItem(event.nativeEvent);
    },
    [onSelectItem]
  );
  return <YLDTabBar {...props} onSelectItem={handleSelectItem} />;
}
