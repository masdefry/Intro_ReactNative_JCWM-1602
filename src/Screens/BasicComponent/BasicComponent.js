/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import { Alert, BackHandler, Button, FlatList, Image, ScrollView, Switch, Text, TextInput, ToastAndroid, View, StyleSheet } from 'react-native';
 
//  Import External CSS
import externalStyles from './BasicComponentStyle'

 const student = [
   {id: 1, name: 'Defryan', age: 20},
   {id: 2, name: 'Ibnu', age: 17},
   {id: 3, name: 'Fandi Ario', age: 15},
   {id: 4, name: 'Lynette', age: 17},
   {id: 5, name: 'Wahyu', age: 15},
 ]
 
 const BasicComponent = () => {
 
   const onExitPress = () => {
     Alert.alert("Hold on!", "Are you sure you want to exit?", [
       {
         text: "Cancel",
         onPress: () => null,
         style: "cancel"
       },
       { text: "YES", onPress: () => BackHandler.exitApp() }
     ]);
   }
 
   const onToastPress = () => {
     ToastAndroid.showWithGravity(
       'Hello Student Purwadhika',
       ToastAndroid.LONG,
       ToastAndroid.CENTER
     )
   }
 
   return(
     <View>
       <Text style={{fontSize: 30}}>
         Hello, World!
       </Text>
 
       {/* <View style={{marginTop: 30}}>
         <Image 
           style={{width: '100%', height: 300}}
           source={{uri: 'https://sportshub.cbsistatic.com/i/r/2020/11/24/a66f04a3-aa75-4007-ad21-67c77df0ee7b/thumbnail/1200x675/c60d03bcb7fdf41158c534438faaf4d2/manchester-united-2.png'}} />
       </View> */}
         
       <View style={{marginTop: 30}}>
         <TextInput placeholder='Enter Your Name' style={{borderWidth: 1, borderColor: 'black'}} />
       </View>
 
       <View style={{marginTop: 30}}>
         <Button title='Learn More' color='blue' />
       </View>
 
       <View style={{marginTop: 30}}>
         <Switch 
           trackColor={{false: 'red', true: 'blue'}}
           thumbColor='silver'
         />
       </View>
 
       {/* <View style={{marginTop: 30}}>
         {
           student.map((value, index) => {
             return(
               <Text key={index}>
                 {value.name}
               </Text>
             )
           })
         }
       </View> */}
 
       <FlatList 
         data={student}
         renderItem={({item, index}) => (
           <Text>
             {item.name}
           </Text>
         )}
         keyExtractor={(item) => item.id}
       />
 
       <View style={{marginTop: 30}}>
         <Button title='Exit Apps' onPress={onExitPress} />
       </View>
 
       <View style={{marginTop: 30}}>
         <Button title='Show Toast' onPress={onToastPress} />
       </View>

       <View style={{marginTop: 30}}>
            <Text style={styles.colorRed}>
                Styling 1 (Hanya Menggunakan 1 Class Saja)
            </Text>
            <Text style={{...styles.colorRed, ...styles.fontSize}}>
                Styling 2 (Menggunakan Lebih Dari 1 Class)
            </Text>
            <Text style={{...externalStyles.colorBlue, ...externalStyles.fontSize60}}>
                Styling 3 (Menggunakan External CSS)
            </Text>
       </View>
     </View>
   )
 }

const styles = StyleSheet.create({
    colorRed: {
        color: 'red'
    },

    fontWeightBold: {
        fontWeight: 'bold'
    },

    fontSize: {
        fontSize: 30
    }
})
 
 export default BasicComponent;
 