import React, {useState} from 'react'
import { View,  StyleSheet, ScrollView, SafeAreaView, TextInput, Button, TouchableOpacity} from 'react-native'
import { Icon, Text} from 'react-native-elements'
import { login } from '../publics/redux/actions/users';
import { connect } from 'react-redux';

const Login = props => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const submit = () => {
        const formData = {
            username,
            password
        }

        if (username !== '' && password !== '') {
            props.login(formData, props.navigation)
            setPassword('')
            setUsername('')
        } else {
            alert("Please fill data correctly!")
        }
    }
    
    const regis = () => {
        props.navigation.navigate('Register')
    }
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ marginHorizontal: 20,}}>
                <Text h1 style={[ styles.c1]}>Do It -</Text>
                <Text h1 style={[ styles.c1]}>Login Page</Text>
                <Text style={[ styles.c1, { fontWeight: 'bold',fontSize: 16, marginBottom: 5, marginTop: 25 } ]}>Username</Text>
                <TextInput 
                    style={{ flex:1, borderRadius: 10, color: '#084177' , backgroundColor: '#DDE3FD', height: 60, padding: 20, marginBottom: 20 }}
                    placeholder= 'Username'
                    returnKeyType="next"
                    onChangeText={(val) => setUsername(val)}
                    value={username}
                />
                <Text style={[ styles.c1, { fontWeight: 'bold',fontSize: 16, marginBottom: 5 } ]}>Password</Text>
                <TextInput 
                    style={{ flex:1, borderRadius: 10, color: '#084177' ,backgroundColor: '#FFEDD9', height: 60, padding: 20, marginBottom: 20 }}
                    placeholder= 'Password'
                    secureTextEntry={true}
                    returnKeyType="done"
                    onChangeText={(val) => setPassword(val)}
                    value={password}
                />
                <View style={{ flex: 1, flexDirection: 'row', }} >
                    <TouchableOpacity style={ styles.btnRegis } onPress={() => regis()}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}> Register </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.btnLogin } onPress={() => submit()}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}> Login </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingBottom: 50
    },
    c1: {
        color: '#084177'
    },
    btnLogin:{
        flex: 1,
        margin: 5,
        height: 36,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#4565EC',
    },
    btnRegis:{
        flex: 1,
        margin: 5,
        height: 36,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#cf1b1b',
    },
})

const mapStateToProps = s => {
    return {
        dataUser: s.UsersReducer.data
    }
}

const mapDispatchToProps = d => {
    return {
        login: (data, navigation) => {
            d(login(data, navigation));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);