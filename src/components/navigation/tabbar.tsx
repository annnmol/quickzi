import Ionicons from "@expo/vector-icons/Ionicons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React, { FC, useCallback, useEffect, useMemo } from "react";
import {
  Alert,
  Dimensions,
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withSpring
} from "react-native-reanimated";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Custom imports
import { theme } from "@app/src/lib/theme";
import { tokens } from "@app/src/lib/tokens";
import AppText from "../ui/text";

// Types
interface TabConfig {
  name: string;
  activeIcon: keyof typeof Ionicons.glyphMap;
  inactiveIcon: keyof typeof Ionicons.glyphMap;
  label: string;
}

interface TabItemProps {
  route: any;
  index: number;
  isFocused: boolean;
  onPress: () => void;
  onLongPress: () => void;
  config: TabConfig;
}

// Configuration for each tab
const TAB_CONFIGS: Record<string, TabConfig> = {
  home: {
    name: "home",
    activeIcon: "home",
    inactiveIcon: "home-outline",
    label: "Home",
  },
  search: {
    name: "search",
    activeIcon: "search",
    inactiveIcon: "search-outline",
    label: "Search",
  },
  profile: {
    name: "profile",
    activeIcon: "person",
    inactiveIcon: "person-outline",
    label: "Profile",
  },
  settings: {
    name: "settings",
    activeIcon: "settings",
    inactiveIcon: "settings-outline",
    label: "Settings",
  },
};

const { width: SCREEN_WIDTH } = Dimensions.get("window");

// Production-grade animation config
const ANIMATION_CONFIG = {
  spring: {
    damping: Platform.select({ ios: 15, android: 12 }),
    stiffness: Platform.select({ ios: 150, android: 120 }),
    mass: 1,
  },
  indicatorSpring: {
    damping: 20,
    stiffness: 200,
    mass: 0.8,
  },
  iconSize: Platform.select({ ios: 22, android: 20 }),
  minHeight: 56,
  indicatorHeight: 3,
  indicatorWidth: SCREEN_WIDTH / 4 - 32, // Dynamic width based on screen size
} as const;

// Production-grade animated tab item component
const AnimatedTabItem: FC<TabItemProps> = React.memo(
  ({ route, index, isFocused, onPress, onLongPress, config }) => {
    const scale = useSharedValue(1);
    const opacity = useSharedValue(isFocused ? 1 : 0.6);

    // Update animations when focus changes
    useEffect(() => {
      scale.value = withSpring(isFocused ? 1.05 : 1, ANIMATION_CONFIG.spring);
      opacity.value = withSpring(isFocused ? 1 : 0.6, ANIMATION_CONFIG.spring);
    }, [isFocused]);

    // Animated styles
    const animatedStyle = useAnimatedStyle(() => ({
      transform: [{ scale: scale.value }],
      opacity: opacity.value,
    }));

    const handlePress = useCallback(() => {
      // Haptic feedback animation
      scale.value = withSpring(
        0.9,
        { ...ANIMATION_CONFIG.spring, mass: 0.5 },
        () => {
          scale.value = withSpring(
            isFocused ? 1.05 : 1,
            ANIMATION_CONFIG.spring
          );
        }
      );
      runOnJS(onPress)();
    }, [scale, isFocused, onPress]);

    const handleLongPress = useCallback(() => {
      Alert.alert("Long Press", `You long-pressed on ${config.label}`);
      runOnJS(onLongPress)();
    }, [onLongPress]);

    return (
      <TouchableOpacity
        onPress={handlePress}
        onLongPress={handleLongPress}
        style={styles.tabItem}
        activeOpacity={0.8}
      >
        <Animated.View style={[styles.tabContent, animatedStyle]}>
          <View style={styles.iconContainer}>
            <Ionicons
              name={isFocused ? config.activeIcon : config.inactiveIcon}
              size={ANIMATION_CONFIG.iconSize}
              color={isFocused ? theme.primary : theme.icon}
            />
            {route.name === "home" && <View style={styles.badge} />}
          </View>
          <AppText
            variant="captionSemiBold"
            style={[
              styles.tabLabel,
              {
                color: isFocused ? theme.primary : theme.icon,
              },
            ]}
            numberOfLines={1}
          >
            {config.label}
          </AppText>
        </Animated.View>
      </TouchableOpacity>
    );
  }
);

AnimatedTabItem.displayName = "AnimatedTabItem";

// Animated indicator component
const AnimatedIndicator: FC<{
  activeIndex: number;
  tabCount: number;
}> = React.memo(({ activeIndex, tabCount }) => {
  const translateX = useSharedValue(0);

  // Calculate tab width dynamically
  const tabWidth = useMemo(() => {
    return (SCREEN_WIDTH - tokens.spacing16 * 2) / tabCount;
  }, [tabCount]);

  // Update indicator position when active tab changes
  useEffect(() => {
    const targetX = activeIndex * tabWidth + tokens.spacing16;
    translateX.value = withSpring(targetX, ANIMATION_CONFIG.indicatorSpring);
  }, [activeIndex, tabWidth]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
    width: tabWidth,
  }));

  return <Animated.View style={[styles.indicator, animatedStyle]} />;
});

AnimatedIndicator.displayName = "AnimatedIndicator";

const AppTabBar: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const insets = useSafeAreaInsets();

  // Memoized tab bar height calculation for both platforms
  const tabBarHeight = useMemo(() => {
    const baseHeight = ANIMATION_CONFIG.minHeight;
    return baseHeight + insets.bottom;
  }, [insets.bottom]);

  // Memoized container style
  const containerStyle = useMemo(
    () => [
      styles.container,
      {
        height: tabBarHeight,
        paddingBottom: insets.bottom,
      },
    ],
    [tabBarHeight, insets.bottom]
  );

  // Optimized navigation handlers
  const createOnPress = useCallback(
    (route: any, isFocused: boolean) => () => {
      const event = navigation.emit({
        type: "tabPress",
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation.navigate(route.name, route.params);
      }
    },
    [navigation]
  );

  const createOnLongPress = useCallback(
    (route: any) => () => {
      navigation.emit({
        type: "tabLongPress",
        target: route.key,
      });
    },
    [navigation]
  );

  return (
    <View style={containerStyle}>
      <View style={styles.shadow} />
      <View style={styles.tabBar}>
        <AnimatedIndicator
          activeIndex={state.index}
          tabCount={
            state.routes.filter((route) => TAB_CONFIGS[route.name]).length
          }
        />

        {state.routes.map((route, index) => {
          // const { options } = descriptors[route.key];
          const isFocused = state.index === index;
          const config = TAB_CONFIGS[route.name];

          // Skip if no config found
          if (!config) return null;

          return (
            <AnimatedTabItem
              key={route.key}
              route={route}
              index={index}
              isFocused={isFocused}
              onPress={createOnPress(route, isFocused)}
              onLongPress={createOnLongPress(route)}
              config={config}
            />
          );
        })}
      </View>
    </View>
  );
};

export default AppTabBar;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: theme.background,
  },
  shadow: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: theme.border,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  tabBar: {
    flexDirection: "row",
    backgroundColor: theme.card,
    paddingHorizontal: tokens.spacing16,
    paddingTop: tokens.spacing6,
    paddingBottom: tokens.spacing8,
    position: "relative",
  },
  indicator: {
    position: "absolute",
    top: 0,
    height: ANIMATION_CONFIG.indicatorHeight,
    backgroundColor: theme.primary,
    borderRadius: ANIMATION_CONFIG.indicatorHeight / 2,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    minHeight: ANIMATION_CONFIG.minHeight,
  },
  tabContent: {
    alignItems: "center",
    justifyContent: "center",
  },
  iconContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 2,
  },
  badge: {
    position: "absolute",
    top: -2,
    right: -2,
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.red,
  },
  tabLabel: {
    fontSize: Platform.select({ ios: 12, android: 12 }),
    textAlign: "center",
    fontFamily: "Satoshi",
    fontWeight: 600,
    lineHeight: 20,
  },
});
