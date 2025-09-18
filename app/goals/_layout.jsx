import { Tabs } from 'expo-router'
import { Ionicons } from "@expo/vector-icons"
import { GoalsProvider } from '../../contexts/GoalsContext'

export default function GoalsLayout() {
  return (
    <GoalsProvider>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: '#229fa8ff', 
            borderTopWidth: 0, 
            height: 70, 
            paddingBottom: 10, 
            elevation: 10,
          },
          tabBarActiveTintColor: '#ff5722', 
          tabBarInactiveTintColor: '#bbb', 
          tabBarLabelStyle: {
            fontSize: 12, 
            fontWeight: '600',
            paddingBottom: 5, 
          },
          tabBarIconStyle: {
            marginTop: 5, 
            width: 30, 
            height: 30,
          }
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Your Goals',
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={28} 
                name={focused ? 'home' : 'home-outline'}
                color={focused ? '#ff5722' : '#bbb'} 
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: 'Create Goal',
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={28}
                name={focused ? 'create' : 'create-outline'}
                color={focused ? '#ff5722' : '#bbb'}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="login"
          options={{
            title: 'Login',
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={28}
                name={focused ? 'log-in' : 'log-in-outline'} // Changed 'login' to 'log-in'
                color={focused ? '#ff5722' : '#bbb'}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="signup"
          options={{
            title: 'Signup',
            tabBarIcon: ({ focused }) => (
              <Ionicons
                size={28}
                name={focused ? 'person-add' : 'person-add-outline'} 
                color={focused ? '#ff5722' : '#bbb'}
              />
            ),
          }}
        />
      </Tabs>
    </GoalsProvider>
  )
}
