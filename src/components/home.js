import React from 'react';
import { View,  StyleSheet, ScrollView, TouchableOpacity, SafeAreaView} from 'react-native';
import { Text,Avatar, Icon } from 'react-native-elements';
import BottomNavigator from "../components/utilities/bottomNavigation";



const Home = props => {
    return (
        <SafeAreaView style={{flex:1, backgroundColor: '#fff'}}>
            <View style={styles.container}>
                <View style={ styles.head }>
                    <Text h1 style={ styles.c1 }>Schedule</Text>
                    <Avatar
                        rounded
                        avatarStyle={{ overflow: "hidden", borderColor: '#0779e4', borderWidth: 2, borderRadius: 50,}}
                        size="medium"
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShfJrNLSQQ0Hm1_DDoJSUzok5d87dT6R9RvEkJTlu-AVG5TR22&usqp=CAU'
                        }}
                    />
                </View>        
                <ScrollView style={{ marginTop: 15 }}>
                    <View style={ styles.sch }>
                        <Text style={ styles.date }>Today, Mon, June 13</Text>
                        <View style={[ styles.event,{ backgroundColor: '#D9F5F8', } ]}>
                            <View 
                            style={{ 
                                width: 7, 
                                backgroundColor: '#2BC8D9', 
                                height: 125, 
                                borderTopLeftRadius: 10, 
                                borderBottomLeftRadius: 10 
                                }}
                            />
                            <View style={ styles.data }>
                                <Text style={ styles.title }>Product Planning</Text>
                                <Text style={ styles.desc }>10:00 - 17:00</Text>
                                <Text style={ styles.desc }>Office</Text>
                                <Text style={ styles.desc }>Work</Text>
                            </View>
                        </View>
                        <View style={[ styles.event,{ backgroundColor: '#FFE5E6', } ]}>
                            <View 
                            style={{ 
                                width: 7, 
                                backgroundColor: '#FF6D6E', 
                                height: 125, 
                                borderTopLeftRadius: 10, 
                                borderBottomLeftRadius: 10 
                                }}
                            />
                            <View style={ styles.data }>
                                <Text style={ styles.title }>MLBB Tournament</Text>
                                <Text style={ styles.desc }>19:00 - 22:00</Text>
                                <Text style={ styles.desc }>Home</Text>
                                <Text style={ styles.desc }>Play</Text>
                            </View>
                        </View>
                    </View>
                    <View style={ styles.sch }>
                        <Text style={ styles.date }>Tomorrow, Tue, June 14</Text>
                        <View style={[ styles.event,{ backgroundColor: '#FFEDD9', } ]}>
                            <View 
                            style={{ 
                                width: 7, 
                                backgroundColor: '#FF9B2B', 
                                height: 125, 
                                borderTopLeftRadius: 10, 
                                borderBottomLeftRadius: 10 
                                }}
                            />
                            <View style={ styles.data }>
                                <Text style={ styles.title }>Falih Marriage</Text>
                                <Text style={ styles.desc }>10:00 - 13:00</Text>
                                <Text style={ styles.desc }>Sutan Raja Hotel</Text>
                                <Text style={ styles.desc }>Freindship</Text>
                            </View>
                        </View>
                        <View style={[ styles.event,{ backgroundColor: '#FFE5E6', } ]}>
                            <View 
                            style={{ 
                                width: 7, 
                                backgroundColor: '#FF6D6E', 
                                height: 125, 
                                borderTopLeftRadius: 10, 
                                borderBottomLeftRadius: 10 
                                }}
                            />
                            <View style={ styles.data }>
                                <Text style={ styles.title }>Product Planning</Text>
                                <Text style={ styles.desc }>10:00 - 17:00</Text>
                                <Text style={ styles.desc }>Office</Text>
                                <Text style={ styles.desc }>Work</Text>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <TouchableOpacity 
                onPressIn={() => props.navigation.navigate('Insert')}
                style={{
                    position: 'absolute',
                    alignSelf: 'center',
                    backgroundColor: 'transparent', 
                    width: 70, 
                    height: 70, 
                    borderRadius: 35,
                    bottom: 25,
                    zIndex: 10
                }}
                >
                    <Icon
                        name='add'
                        type='material'
                        color='#0779e4'
                        containerStyle={{ alignSelf: 'center' }}
                        reverse
                        size={28}
                    />
                </TouchableOpacity>
            <BottomNavigator {...props} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 25,
        marginTop: 25,
        marginRight: 25,
        marginBottom: 60
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    c1: {
        color: '#084177'
    },
    sch: {
        marginTop: 10,
        marginBottom: 10
    },
    date: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#808593'
    },
    event: {
        flex: 1,
        marginTop: 10,
        backgroundColor: '#D9F5F8',
        height: 125,
        borderRadius: 10,
        flexDirection: 'row'
    },
    data: {
        marginTop: 15,
        marginBottom: 15,
        marginLeft: 20
    },
    title: {
        fontWeight: 'bold',
        color: '#084177',
        fontSize: 15
    },
    desc: {
        color: '#808593',
        fontWeight: 'bold',
        fontSize: 15,
        marginTop: 5
    },
})

export default Home;