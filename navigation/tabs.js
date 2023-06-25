import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Home from '../screens/Home';
import Settings from '../screens/Settings';

const Tab = createBottomTabNavigator();

export default function Tabs() {
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    borderTopWidth: 0,
                    elevation: 0,
                    backgroundColor: '#000000',
                    borderRadius: 100,
                    height: 70,
                    ...styles.shadow
                }  
            }}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Settings" component={Settings} />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    shadow: {
    shadowColor: '#ffffff',
    shadowOffset: {
    width: 0,
    height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
    }
    });