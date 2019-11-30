import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from 'react-navigation-stack';
 
import HomeScreen from './pages/HomeScreen';
import SettingsScreen from './pages/SettingsScreen';
import DetailsScreen from './pages/DetailsScreen';
import ProfileScreen from './pages/ProfileScreen';
import LoginScreen from './pages/Authentication/LoginScreen';
import RegisterScreen from './pages/Authentication/RegisterScreen';


const HomeStack = createStackNavigator(
  {
    Home: { screen: HomeScreen },
    Details: { screen: DetailsScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#FFFFFF',
      title: 'Home',
    },
  }
);
const SettingsStack = createStackNavigator(
  {
    Settings: { screen: SettingsScreen },
    Details: { screen: DetailsScreen },
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: 'black',
      },
      headerTintColor: '#FFFFFF',
      title: 'Settings',
    },

  },

);
const ProfileStack = createStackNavigator(
	{
	  Profile: { screen: ProfileScreen },
	  Login: { screen: LoginScreen },
	  Register: { screen: RegisterScreen },
	},
	{
	  defaultNavigationOptions: {
		headerStyle: {
		  backgroundColor: 'black',
		},
		headerTintColor: '#FFFFFF',
		title: 'Profile',
	  },
	},
  );
const App = createBottomTabNavigator(
  {
    Home: { screen: HomeStack },
    Settings: { screen: SettingsStack },
    Profile: { screen: ProfileStack},
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home`;
        } 
        else if (routeName === 'Settings') {
          iconName = `ios-settings`;
        }
        else if (routeName === 'Profile') {
          iconName = `ios-person`;
        }
        return <IconComponent name={iconName} size={35} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',

    },
    initialRouteName: "Home",
    
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'black',
        borderTopWidth:0,
      },
    }
  }
);
export default createAppContainer(App);