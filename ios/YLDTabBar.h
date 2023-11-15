#import <UIKit/UIKit.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <React/RCTViewComponentView.h>
#else
#import <React/RCTComponent.h>
#endif

NS_ASSUME_NONNULL_BEGIN

@interface YLDTabBar : 
#ifdef RCT_NEW_ARCH_ENABLED
    RCTViewComponentView <UITabBarDelegate>
#else
    UITabBar <UITabBarDelegate>
#endif

#ifndef RCT_NEW_ARCH_ENABLED
@property (nonatomic, copy) RCTBubblingEventBlock onSelectItem;
#endif

@end

NS_ASSUME_NONNULL_END