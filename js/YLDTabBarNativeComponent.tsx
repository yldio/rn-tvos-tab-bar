import type { HostComponent, ViewProps } from "react-native";
import type {
  BubblingEventHandler,
  Int32,
} from "react-native/Libraries/Types/CodegenTypes";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";

export interface TabBarProps extends ViewProps {
  items: readonly string[];
  selectedItem: Int32;
  onSelectItem: BubblingEventHandler<Readonly<{ index: Int32 }>>;
}

export type TabBarType = HostComponent<TabBarProps>;

export default codegenNativeComponent<TabBarProps>("YLDTabBar") as TabBarType;
