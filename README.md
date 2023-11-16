# rn-tvos-tab-bar

A React Native library for implementing the iOS `UITabBar`, primarily designed for tvOS, but can be used on iOS devices as well.

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

All props are required.

### `items`

- **Type**: `Array<string>`

An array of strings representing the items in the tab bar.

### `selectedItem`

- **Type**: `number`

The index of the currently selected item in the tab bar.

### `onSelectItem`

- **Type**: `(args: { index: number }) => void`

A handler function called when an item in the tab bar is selected. It provides an object with the index of the selected item.
