import React from 'react'
import { Text, View } from 'react-native'

const Layouting = () => {
    return(
        <>
            <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            
                <View style={{borderWidth: 3, borderColor: 'red'}}>
                    <Text>
                        Box-1
                    </Text>
                </View>

                <View style={{borderWidth: 3, borderColor: 'blue'}}>
                    <Text>
                        Box-2
                    </Text>
                </View>

                <View style={{borderWidth: 3, borderColor: 'red'}}>
                    <Text>
                        Box-3
                    </Text>
                </View>

            </View>



            <View style={{justifyContent: 'space-between', flexDirection: 'row', marginTop: 30}}>
            
                <View>
                    <View style={{borderWidth: 3, borderColor: 'red'}}>
                        <Text>
                            Box-3
                        </Text>
                    </View>
                </View>

                <View style={{flexDirection: 'row'}}>
                    <View style={{borderWidth: 3, borderColor: 'blue'}}>
                        <Text>
                            Box-4
                        </Text>
                    </View>

                    <View style={{borderWidth: 3, borderColor: 'red'}}>
                        <Text>
                            Box-5
                        </Text>
                    </View>
                </View>

            </View>

            <View style={{justifyContent: 'flex-end', flexDirection: 'row', marginTop: 30}}>
            
                <View style={{flexDirection: 'row'}}>
                    <View style={{borderWidth: 3, borderColor: 'red'}}>
                        <Text>
                            Box-6
                        </Text>
                    </View>
                    <View style={{borderWidth: 3, borderColor: 'blue'}}>
                        <Text>
                            Box-7
                        </Text>
                    </View>

                    <View style={{borderWidth: 3, borderColor: 'red'}}>
                        <Text>
                            Box-8
                        </Text>
                    </View>
                </View>

            </View>
        </>
    )
}

export default Layouting