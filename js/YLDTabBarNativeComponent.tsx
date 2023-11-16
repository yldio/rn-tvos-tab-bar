import type { HostComponent, ViewProps } from "react-native";
import type {
  BubblingEventHandler,
  Int32,
} from "react-native/Libraries/Types/CodegenTypes";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";

export interface YLDTabBarProps extends ViewProps {
  items: ReadonlyArray<string>;
  selectedItem: Int32;
  onSelectItem: BubblingEventHandler<Readonly<{ index: Int32 }>>;
}

type YLDTabBar = HostComponent<YLDTabBarProps>;

export default codegenNativeComponent<YLDTabBarProps>("YLDTabBar") as YLDTabBar;
