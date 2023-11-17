# rn-tvos-tab-bar

A React Native library for implementing the iOS `UITabBar`, primarily designed for tvOS, but can be used on iOS devices as well.

![Simulator Screen Recording - Apple TV 4K (3rd generation) (at 1080p)](https://github.com/yldio/rn-tvos-tab-bar/assets/58954208/8f23512b-3df4-4849-8b2d-d402b5c4004a)

Note that this library does not come with any navigation logic so that you can integrate it with the navigation library you are using. For example, with [react-navigation](https://github.com/react-navigation), you can create a custom Navigator with [`useNavigationBuilder`](https://reactnavigation.org/docs/custom-navigators/#usenavigationbuilder).

## Installation

```bash
yarn add rn-tvos-tab-bar
cd ios
```

If you are using the new architecture, run the following command
```bash
RCT_NEW_ARCH_ENABLED=1 bundle exec pod install
```
Otherwise, run the following command
```bash
bundle exec pod install
```

## Usage

```jsx
import {TabBar} from 'rn-tvos-tab-bar/components/TabBar';

function YourNativeComponent(props) {
  ...

  return (
    ...
    <TabBar
      items={items}
      selectedItem={selectedItem}
      onSelectItem={onSelectItem}
    />
  )
}
```

## Props

The TabBar component accepts all regular view props. 
The props controlling the TabBar are the following and are all required.

### `items`

- **Type**: `Array<string>`

An array of strings representing the items in the tab bar.

### `selectedItem`

- **Type**: `number`

The index of the currently selected item in the tab bar.

### `onSelectItem`

- **Type**: `(args: { index: number }) => void`

A handler function called when an item in the tab bar is selected. It provides an object with the index of the selected item.
