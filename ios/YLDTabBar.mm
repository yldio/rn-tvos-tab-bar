#import "YLDTabBar.h"

#ifdef RCT_NEW_ARCH_ENABLED
#import <React/RCTConversions.h>
#import <react/renderer/components/YLDTabBarSpecs/ComponentDescriptors.h>
#import <react/renderer/components/YLDTabBarSpecs/EventEmitters.h>
#import <react/renderer/components/YLDTabBarSpecs/Props.h>
#import <react/renderer/components/YLDTabBarSpecs/RCTComponentViewHelpers.h>
#import "RCTFabricComponentsPlugins.h"
#endif

#ifdef RCT_NEW_ARCH_ENABLED
using namespace facebook::react;
#endif

@implementation YLDTabBar {
  #ifdef RCT_NEW_ARCH_ENABLED
    UITabBar *_view;
    UITabBar *_oldView;
  #endif
}

#ifdef RCT_NEW_ARCH_ENABLED
+ (ComponentDescriptorProvider)componentDescriptorProvider
{
  return concreteComponentDescriptorProvider<YLDTabBarComponentDescriptor>();
}

#ifdef RCT_NEW_ARCH_ENABLED
- (instancetype)initWithFrame:(CGRect)frame
{
    self = [super initWithFrame:frame];
    return self;
}

- (void)ensureView {
    if (!_view) {
        static const auto defaultProps = std::make_shared<const YLDTabBarProps>();
        _props = defaultProps;
        
        _view = [[UITabBar alloc] init];
        _view.delegate = self;

        [self setContentView:_view];
    }
}

- (void) layoutSubviews {
    [super layoutSubviews];
    _view.frame = self.bounds;
}
#endif

- (void)setItems:(NSArray<NSString*>*)items
{
  NSMutableArray *tabBarItems = [[NSMutableArray alloc] init];

  int i = 0;
  for (NSString *item in items) {
    UITabBarItem *tabBarItem = [[UITabBarItem alloc] initWithTitle:item image:[UIImage imageNamed:@""] tag:i++ ];
    
    [tabBarItems addObject:tabBarItem];
  }

  _view.items = tabBarItems;
}
#endif

- (void)tabBar:(UITabBar *)tabBar
 didSelectItem:(UITabBarItem *)item {
    #ifdef RCT_NEW_ARCH_ENABLED
    int index = [tabBar.items indexOfObjectIdenticalTo:item];
    if (_eventEmitter != nullptr) {
      std::dynamic_pointer_cast<const facebook::react::YLDTabBarEventEmitter>(_eventEmitter)
          ->onSelectItem(facebook::react::YLDTabBarEventEmitter::OnSelectItem{.index = index});
    }
    #else
    NSNumber *index = @([tabBar.items indexOfObjectIdenticalTo:item]);
    if (self.onSelectItem) {
      self.onSelectItem(
        @{
          @"index": index,
        }
      );
    }
    #endif
}

#ifdef RCT_NEW_ARCH_ENABLED
- (void)updateProps:(facebook::react::Props::Shared const &)props oldProps:(facebook::react::Props::Shared const &)oldProps
{
  [self ensureView];
  const auto &oldScreenProps = *std::static_pointer_cast<const facebook::react::YLDTabBarProps>(_props);
  const auto &newScreenProps = *std::static_pointer_cast<const facebook::react::YLDTabBarProps>(props);

  if (oldScreenProps.items != newScreenProps.items) {
      NSMutableArray *items = [[NSMutableArray alloc] init];
      for (auto item : newScreenProps.items) {
          id item_str = [NSString stringWithUTF8String:item.c_str()];
          [items addObject:item_str];
      }
      
      [self setItems:items];
      if (items.count > 0 && _view.selectedItem == nil) {
        _view.selectedItem = _view.items[0];
      }
  }

  if (oldScreenProps.selectedItem != newScreenProps.selectedItem) {
      if (newScreenProps.selectedItem < _view.items.count) {
          [_view setSelectedItem:_view.items[newScreenProps.selectedItem]];
      }
  }

  [super updateProps:props oldProps:oldProps];
}

- (void)prepareForRecycle{
    [super prepareForRecycle];
    
    _view.delegate = nil;

    [self willRemoveSubview:_view];
    [_view willMoveToSuperview:nil];
    [_view removeFromSuperview];
    
    _view = nil;
}
#endif

@end

#ifdef RCT_NEW_ARCH_ENABLED
Class<RCTComponentViewProtocol> YLDTabBarCls(void)
{
  return YLDTabBar.class;
}
#endif

