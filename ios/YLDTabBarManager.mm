#import <React/RCTLog.h>
#import <React/RCTUIManager.h>
#import <React/RCTViewManager.h>

#ifndef RCT_NEW_ARCH_ENABLED
#import "YLDTabBar.h"
#endif

@interface YLDTabBarManager : RCTViewManager
@end

@implementation YLDTabBarManager

RCT_EXPORT_MODULE(YLDTabBar)

#ifndef RCT_NEW_ARCH_ENABLED
- (UIView *)view
{
  YLDTabBar *tabBar = [[YLDTabBar alloc] init];
  tabBar.delegate = tabBar;
  return tabBar;
}
#endif

#ifdef RCT_NEW_ARCH_ENABLED
RCT_EXPORT_VIEW_PROPERTY(items, NSArray<NSString*>*)
RCT_EXPORT_VIEW_PROPERTY(selectedItem, NSNumber*)
#else
RCT_CUSTOM_VIEW_PROPERTY(items, NSArray<NSString*>*, UITabBar) {
  NSMutableArray *tabBarItems = [[NSMutableArray alloc] init];
  
  NSArray<NSString*> *items = json ? [RCTConvert NSStringArray:json] : @[];
  int i = 0;
  for (NSString *item in items) {
    UITabBarItem *tabBarItem = [[UITabBarItem alloc] initWithTitle:item image:[UIImage imageNamed:@""] tag:i++ ];
    
    [tabBarItems addObject:tabBarItem];
  }

  view.items = tabBarItems;
  
  if (tabBarItems.count > 0) {
    view.selectedItem = tabBarItems[0];
  }
}
RCT_CUSTOM_VIEW_PROPERTY(selectedItem, NSNumber*, UITabBar) {
  NSUInteger selectedIndex = json ? [RCTConvert NSUInteger:json] : 0;
  
  if (selectedIndex < view.items.count) {
    [view setSelectedItem:view.items[selectedIndex]];
  }
}
#endif

RCT_EXPORT_VIEW_PROPERTY(onSelectItem, RCTBubblingEventBlock)

@end