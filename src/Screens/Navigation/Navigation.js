import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useEffect } from 'react/cjs/react.development';

const Stack = createStackNavigator()
const StackNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Home' component={HomeStackNavigation} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}

// Screen Login
const Login = ({navigation: {navigate}}) => {

    let name = 'Defryan'

    return(
        <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                This is Login Screen
            </Text>
            <Text style={{color: 'blue', fontStyle: 'italic'}} onPress={() => navigate('Register', {sendName: name})}>
                Don't Have Account? Register!
            </Text>
            <Text style={{color: 'blue', fontStyle: 'italic'}} onPress={() => navigate('Home', {sendName: name})}>
                Go to Home
            </Text>
            <Text>
                Icon <Icon name='facebook' color='blue' />
            </Text>
        </View>
    )
}


// Screen Register
const Register = ({route}) => {

    useEffect(() => {
        console.log(route.params.sendName)
    }, [])

    return(
        <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                This is Register Screen
            </Text>
            <Text style={{color: 'red', fontStyle: 'italic'}}>
                This is Params From Login Screen : {route.params.sendName}
            </Text>
        </View>
    )
}

// ####################################################################################################

const HomeStack = createBottomTabNavigator()
const HomeStackNavigation = ({route}) => {

    useEffect(() => {
        console.log(`${route.params.sendName} Baru Sampai Entry Point Home`)
    }, [])

    return(
        <HomeStack.Navigator
            tabBarOptions={{
                activeTintColor: '#e45826',
                activeBackgroundColor: '#0a043c',
                size: 6
            }}
        >
            <HomeStack.Screen name='Home' component={Home} initialParams={{sendNameFromEntry: route.params.sendName}}
                options={{tabBarIcon: ({color, size}) => {
                    return(
                        <Icon name='home' color={color} size={size} />
                    )
                }}}
            />
            <HomeStack.Screen name='Product' component={Product} initialParams={{sendNameFromEntry: route.params.sendName}}
                options={{tabBarIcon: ({color, size}) => {
                    return(
                        <Icon name='tags' color={color} size={size} />
                    )
                }}}
            />
            <HomeStack.Screen name='Cart' component={Cart}
                options={{tabBarIcon: ({color, size}) => {
                    return(
                        <Icon name='shopping-bag' color={color} size={size} />
                    )
                }}}
            />
            <HomeStack.Screen name='Profile' component={ProfileStackNavigation} 
                options={{headerShown: false, tabBarIcon: ({color, size}) => {
                    return(
                        <Icon name='user' color={color} size={size} />
                    )
                }}} 
            />
        </HomeStack.Navigator>
    )
}

// Screen Home
const Home = ({route, navigation: {navigate}}) => {
    return(
        <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                This is Home Screen
            </Text>
            <Text style={{color: 'blue', fontStyle: 'italic'}} onPress={() => navigate('Product')}>
                PRODUCT
            </Text>
            <Text style={{color: 'blue', fontStyle: 'italic'}}>
                CART
            </Text>
            <Text style={{color: 'blue', fontStyle: 'italic'}} onPress={() => navigate('Profile')}>
                PROFILE
            </Text>
            <Text style={{color: 'red', fontStyle: 'italic'}}>
                Ini Params Yang Dikirim Dari Login : {route.params.sendNameFromEntry}
            </Text>
        </View>
    )
}

// Screen Product
const Product = ({route}) => {

    useEffect(() => {
        console.log(`${route.params.sendNameFromEntry} Sudah Sampai Di Component Product`)
    }, [])

    return(
        <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                This is Product Screen
            </Text>
            <Text style={{color: 'red', fontStyle: 'italic'}}>
                Ini Params Yang Dikirim Dari Login : {route.params.sendNameFromEntry}
            </Text>
        </View>
    )
}

// Screen Cart
const Cart = () => {
    return(
        <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                This is Cart Screen
            </Text>
        </View>
    )
}

// ####################################################################################################
// Entry Point Profile
const ProfileStack = createStackNavigator()
const ProfileStackNavigation = () => {
    return(
        <ProfileStack.Navigator>
            <ProfileStack.Screen name='Profile' component={Profile} />
            <ProfileStack.Screen name='Edit Profile' component={EditProfile} />
            <ProfileStack.Screen name='Edit Password' component={EditPassword} />
            <ProfileStack.Screen name='Transaction History' component={TransactionHistory} />
        </ProfileStack.Navigator>
    )
}

// Screen Profile
const Profile = () => {
    return(
        <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                This is Profile Screen
            </Text>
            <Text style={{color: 'blue', fontStyle: 'italic'}}>
                EDIT PROFILE
            </Text>
            <Text style={{color: 'blue', fontStyle: 'italic'}}>
                EDIT PASSWORD
            </Text>
            <Text style={{color: 'blue', fontStyle: 'italic'}}>
                TRANSACTION HISTORY
            </Text>
        </View>
    )
}

const EditProfile = () => {
    return(
        <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                EDIT PROFILE
            </Text>
        </View>
    )
}

const EditPassword = () => {
    return(
        <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                EDIT PASSWORD
            </Text>
        </View>
    )
}

const TransactionHistory = () => {
    return(
        <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                TRANSACTION HISTORY
            </Text>
        </View>
    )
}

export default StackNavigation

// Login ---> name='Defryan'
// Register
// Home
    // Product
    // Cart
    // Profile
        // Edit Profile
        // Edit Password
        // Transaction History