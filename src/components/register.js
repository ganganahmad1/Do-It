import React, {useState} from 'react'
import { View,  StyleSheet, ScrollView, SafeAreaView, TextInput, Button, TouchableOpacity} from 'react-native'
import { Icon, Text} from 'react-native-elements'
import { regis } from '../publics/redux/actions/users';
import { connect } from 'react-redux';

const Register = props => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [fullname, setFullName] = useState('')
    const [phone, setPhone] = useState('')
    const submit = () => {
        const formData = {
            username,
            password,
            fullname,
            phone
        }

        if (username !== '' && password !== '' && fullname !== '' && phone !== '') {
            props.regis(formData, props.navigation)
            setPassword('')
            setUsername('')
            setFullName('')
            setPhone('')
        } else {
            alert("Please fill data correctly!")
        }
    }
    const login = () => {
      props.navigation.navigate('Login')
    } 
    
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{ marginHorizontal: 20,}}>
                <Text h1 style={[ styles.c1]}>Do It -</Text>
                <Text h1 style={[ styles.c1]}>Login Page</Text>
                <Text style={[ styles.c1, { fontWeight: 'bold',fontSize: 16, marginBottom: 5, marginTop: 25 } ]}>Full Name</Text>
                <TextInput 
                    style={{ flex:1, borderRadius: 10, color: '#084177' , backgroundColor: '#DDE3FD', height: 60, padding: 20, marginBottom: 20 }}
                    placeholder= 'Full Name'
                    returnKeyType="next"
                    onChangeText={(val) => setFullName(val)}
                    value={fullname}
                />
                <Text style={[ styles.c1, { fontWeight: 'bold',fontSize: 16, marginBottom: 5} ]}>Username</Text>
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
                    secureTextEntry = {true}
                    returnKeyType="next"
                    onChangeText={(val) => setPassword(val)}
                    value={password} 
                />
                <Text style={[ styles.c1, { fontWeight: 'bold',fontSize: 16, marginBottom: 5, } ]}>Phone Number</Text>
                <TextInput 
                    style={{ flex:1, borderRadius: 10, color: '#084177' , backgroundColor: '#DDE3FD', height: 60, padding: 20, marginBottom: 20 }}
                    placeholder= 'Phone Number'
                    returnKeyType="done"
                    onChangeText={(val) => setPhone(val)}
                    value={phone}
                    keyboardType="phone-pad"
                />
                <View style={{ flex: 1, flexDirection: 'row', }}>
                    <TouchableOpacity style={ styles.btnRegis } onPress={() => submit()}>
                        <Text style={{ color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 18 }}> Register </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={ styles.btnLogin } onPress={() => login()}>
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
        marginTop: 20,
        marginBottom: 20
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
        regis: (data, navigation) => {
            d(regis(data, navigation));
        }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Register);