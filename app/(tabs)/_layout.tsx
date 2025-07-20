import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Feather from '@expo/vector-icons/Feather';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Fontisto from '@expo/vector-icons/Fontisto';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={24} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Series',
          tabBarIcon: ({ color }) => <Feather name="tv" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="home"
        options={{
          title:"",
          tabBarIcon: ({ color }) => <Fontisto name="netflix" size={30} color="black" />,
        }}
      />
       <Tabs.Screen
        name="series"
        options={{
          title: 'Movies',
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="movie-open-outline" size={24} color="black" />,
        }}
      />
       <Tabs.Screen
        name="setting"
        options={{
          title: 'Setting',
          tabBarIcon: ({ color }) => <Feather name="settings" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}
