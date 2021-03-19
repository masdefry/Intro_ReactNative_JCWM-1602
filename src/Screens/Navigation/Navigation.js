import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

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
    return(
        <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                This is Login Screen
            </Text>
            <Text style={{color: 'blue', fontStyle: 'italic'}} onPress={() => navigate('Register')}>
                Don't Have Account? Register!
            </Text>
            <Text style={{color: 'blue', fontStyle: 'italic'}} onPress={() => navigate('Home')}>
                Go to Home
            </Text>
        </View>
    )
}


// Screen Register
const Register = () => {
    return(
        <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                This is Register Screen
            </Text>
        </View>
    )
}

// ####################################################################################################

const HomeStack = createStackNavigator()
const HomeStackNavigation = () => {
    return(
        <HomeStack.Navigator>
            <HomeStack.Screen name='Home' component={Home} />
            <HomeStack.Screen name='Product' component={Product} />
            <HomeStack.Screen name='Cart' component={Cart} />
            <HomeStack.Screen name='Profile' component={ProfileStackNavigation} options={{headerShown: false}} />
        </HomeStack.Navigator>
    )
}

// Screen Home
const Home = ({navigation: {navigate}}) => {
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
        </View>
    )
}

// Screen Product
const Product = () => {
    return(
        <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                This is Product Screen
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

// Login
// Register
// Home
    // Product
    // Cart
    // Profile
        // Edit Profile
        // Edit Password
        // Transaction History