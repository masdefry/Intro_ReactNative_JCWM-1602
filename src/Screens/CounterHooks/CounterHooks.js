import React, {useState, useEffect} from 'react'
import { Button, Text, TextInput, View } from 'react-native'

// STYLES
import color from './../../Supports/Styles/Color'

const CounterHooks = () => {

    // const [Variable, SetterVariable] = useState(InitialValue)
    const [counter, setCounter] = useState(0)
    // const [a, setA] = useState('')
    // const [b, setB] = useState(0)

    // State With Multiple Value (State of Object)
    const [inputUser, setInputUser] = useState({
        name: '',
        address: ''
    })

    // componentDidMount
    useEffect(() => {
        getData()
    }, [])

    // componentDidUpdate
    useEffect(() => {
        console.log('Hello')
    }, [counter, inputUser])

    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(json => console.log(json))
    }

    return(
        <>
            <View>
                <Text style={{marginTop: 30, textAlign: 'center', fontSize: 30, fontWeight: 'bold', ...color.secondary}}>
                    Counter Hooks Apps
                </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'center', marginTop: 15}}>
                <Button title='Min' onPress={() => setCounter(counter - 1)} />
                <Text style={{marginHorizontal: 15, fontSize: 25}}>
                    {counter}
                </Text>
                <Button title='Plus' onPress={() => setCounter(counter + 1)} />
            </View>

            {/* INPUT HANDLER */}
            <View style={{marginTop: 30}}>
                <TextInput placeholder='Enter Your Name' style={{borderWidth: 1, borderColor: 'black'}} onChangeText={(text) => setInputUser({...inputUser, name: text})} />
                <TextInput placeholder='Enter Your Address' style={{borderWidth: 1, borderColor: 'black', marginVertical: 10}} onChangeText={(text) => setInputUser({...inputUser, address: text})} />
                <Button title='Submit' onPress={() => console.log(inputUser)} />
            </View>
        </>
    )
}

export default CounterHooks


// const [inputUser, setInputUser] = useState({
//     name: '',
//     address: '',
//     age: 0
// })

// {{...inputUser, age: 15}}
// console.log(inputUser) // name: '', address: '', age: 15

// {{...inputUser, address: 'Sidoarjo'}}
// console.log(inputUser) // name: '', address: 'Sidoarjo, age: 15

// {{name: 'Defryan'}}
// console.log(inputUser) // name: 'Defryan'
