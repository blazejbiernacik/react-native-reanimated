#ifndef REAKeyboardEventManager_h
#define REAKeyboardEventManager_h

#import <RNReanimated/REAEventDispatcher.h>
#import <React/RCTEventDispatcher.h>

typedef void (^KeyboardEventListenerBlock)(bool isShown, bool isAnimating, int height);

@interface REAKeyboardEventObserver : NSObject

- (instancetype)init;
- (int)subscribeForKeyboardEvents:(KeyboardEventListenerBlock)listener;
- (void)unsubscribeFromKeyboardEvents:(int)listenerId;

@end

#endif /* REAKeyboardEventManager_h */
