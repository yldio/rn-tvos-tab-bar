import type { ViewProps } from "ViewPropTypes";
import type { HostComponent } from "react-native";
import type {
  BubblingEventHandler,
  Int32,
} from "react-native/Libraries/Types/CodegenTypes";
import codegenNativeComponent from "react-native/Libraries/Utilities/codegenNativeComponent";

export interface NativeProps extends ViewProps {
  items: ReadonlyArray<string>;
  selectedItem: Int32;
  onSelectItem: BubblingEventHandler<Readonly<{ index: Int32 }>>;
}

export default codegenNativeComponent<NativeProps>(
  "YLDTabBar"
) as HostComponent<NativeProps>;
