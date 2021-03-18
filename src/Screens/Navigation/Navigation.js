import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'

const Stack = createStackNavigator()
const StackNavigation = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
        </Stack.Navigator>
    )
}

const Login = ({navigation: {navigate}}) => {
    return(
        <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                This is Login Screen
            </Text>
            <Text style={{color: 'blue', fontStyle: 'italic'}} onPress={() => navigate('Register')}>
                Don't Have Account? Register!
            </Text>
        </View>
    )
}

const Register = () => {
    return(
        <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
            <Text>
                This is Register Screen
            </Text>
        </View>
    )
}

export default StackNavigation

// Login
// Register