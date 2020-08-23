    import React, {useState} from 'react'
    import { View,  StyleSheet, ScrollView, SafeAreaView, TextInput, Button, TouchableOpacity} from 'react-native'
    import { Icon, Text} from 'react-native-elements'
    import DateTimePicker from '@react-native-community/datetimepicker'

    const Insert = props => {
        const [date, setDate] = useState(new Date())
        const [mode, setMode] = useState('date')
        const [show, setShow] = useState(false)

        var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        const showDate = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear()
        const showTime = date.getHours() + ":" + date.getMinutes()

        const [jobActive, setJobActive] = useState(30)
        const [friendActive, setFriendActive] = useState(30)
        const [familyActive, setFamilyActive] = useState(30)
        const [romanceActive, setRomanceActive] = useState(30)
        
        var category = [
            {
                name: 'Job',
                color: '#948BFF',
                stat: jobActive
            },
            {
                name: 'Friendship',
                color: '#2BC8D9',
                stat: friendActive
            },
            {
                name: 'Family',
                color: '#FF9B2B',
                stat: familyActive
            },
            {
                name: 'Romance',
                color: '#FF6D6E',
                stat: romanceActive
            },
        ]

        const cat = (catName) => {
            console.log(catName)
            if( catName == 'Job' ) {
                setJobActive(47)
                setFriendActive(35)
                setFamilyActive(35)
                setRomanceActive(35)
            } else if ( catName == 'Friendship' ) {
                setJobActive(35)
                setFriendActive(47)
                setFamilyActive(35)
                setRomanceActive(35)
            } else if ( catName == 'Family' ) {
                setJobActive(35)
                setFriendActive(35)
                setFamilyActive(47)
                setRomanceActive(35)
            } else if ( catName == 'Romance' ) {
                setJobActive(35)
                setFriendActive(35)
                setFamilyActive(35)
                setRomanceActive(47)
            }
        }

        const onChange = (event, selectedDate) => {
            const currentDate = selectedDate || date
            setShow(Platform.OS === 'ios')
            setDate(currentDate)
        };

        const showMode = currentMode => {
            setShow(true)
            setMode(currentMode)
        };

        const showDatepicker = () => {
            showMode('date')
        };

        const showTimepicker = () => {
            showMode('time')
        };
        
        return (
            <SafeAreaView style={{flex:1, backgroundColor: '#fff'}}>
                <View style={ styles.container }>
                    <View style={ styles.head }>
                        <Icon
                            name='long-arrow-left'
                            type='font-awesome'
                            color='#084177' 
                        />
                        <Icon
                            name='menu'
                            type='material'
                            color='#084177'
                        />
                    </View>
                    <ScrollView style={{ marginTop: 15, marginBottom: 10, flex: 1 }}>
                        <Text h1 style={[ styles.c1, { marginTop: 10 } ]}>Create</Text>
                        <Text h1 style={ styles.c1 }>New Schedule</Text>
                        <Text style={[ styles.c1, { fontWeight: 'bold',fontSize: 16, marginBottom: 5, marginTop: 20 } ]}>Schedule Title</Text>
                        <TextInput 
                            style={{ flex:1, borderRadius: 10, color: '#084177' , backgroundColor: '#DDE3FD', height: 60, padding: 20, marginBottom: 20 }}
                            placeholder= 'Schedlue Title'
                        />
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }} onPress={showDatepicker}>
                            <View style={[ styles.icon ]}>
                                <Icon
                                    name='today'
                                    type='material'
                                    color='#FF9B2B'
                                />
                            </View>
                            <Text style={[ styles.c1, { fontWeight: 'bold', fontSize: 17 } ]}> {showDate} </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }} onPress={showTimepicker}>
                            <View style={[ styles.icon ]}>
                                <Icon
                                    name='schedule'
                                    type='material'
                                    color='#2BC8D9'
                                />
                            </View>
                            <Text style={[ styles.c1, { fontWeight: 'bold', fontSize: 17 } ]}> {showTime} </Text>
                        </TouchableOpacity>
                        <Text style={[ styles.c1, { fontWeight: 'bold',fontSize: 16, marginBottom: 5 } ]}>Schedule Place</Text>
                        <TextInput 
                            style={{ flex:1, borderRadius: 10, color: '#084177' ,backgroundColor: '#FFE5E6', height: 60, padding: 20, marginBottom: 20 }}
                            placeholder= 'Schedlue Place'
                        />
                        {show && (
                            <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                            />
                        )}
                        <Text style={[ styles.c1, { fontWeight: 'bold',fontSize: 16, marginBottom: 5 } ]}>Category</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                            { category.map ((data, key)=>{return(
                                <TouchableOpacity style={[ styles.category, { backgroundColor: data.color, height: data.stat, padding: 7} ]} key={key} onPress={ () => cat(data.name) }>
                                    <Text style={{ color: '#fff', textAlign: 'center' }}> { data.name } </Text>
                                </TouchableOpacity>
                            )})}
                        </View>
                        <TouchableOpacity style={ styles.btn }>
                            <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}> Create Schedule </Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            marginLeft: 25,
            marginTop: 35,
            marginRight: 25,
        },
        head: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        c1: {
            color: '#084177'
        },
        icon: {
            width: 50,
            height: 50,
            justifyContent: 'center',
            elevation: 1,
            borderColor: '#f0f0f0',
            borderWidth: 2,
            borderRadius: 3,
            marginRight: 20
        },
        category: {
            borderRadius: 15,
            justifyContent: 'center',
            alignSelf: 'center',
            marginBottom: 20
        },
        btn:{
            height: 55,
            flex: 1,
            justifyContent: 'center',
            borderRadius: 15,
            backgroundColor: '#4565EC',
            marginBottom: 20
        }
    })

    export default Insert;