import axios from 'axios';

const url = 'https://api-coffee-chat.herokuapp.com'

export const login = (data, navigation) => {
    return (dispatch) => {
        dispatch({
            type: 'LOGIN_PENDING'
        })

        return axios.post(`${url}/users/login`, data)
            .then((response) => {
                let payload = response.data;
                navigation.navigate('Home')
                dispatch({
                    type: 'LOGIN_SUCCESS',
                    payload
                })
            })
            .catch(error => {
                throw (error);
            })
    }
}

export const logout = (id, navigation) => {
    return (dispatch) => {
        dispatch({
            type: 'LOGOUT_PENDING'
        })

        return axios.post(`${url}/users/logout`, id)
            .then(response => {
                let payload = response.data;
                navigation.navigate('Home')
                dispatch({
                    type: 'LOGOUT_SUCCESS',
                    payload
                })
            })
            .catch(error => {
                throw (error);
            })
    }
}   

export const regis = (data, navigation) => {
    console.log(data)
    return (dispatch) => {
        dispatch({
            type: 'REGIS_PENDING'
        })

        return axios.post(`${url}/users/register`, data)
            .then((response) => {
                console.log(response)
                let payload = response.data;
                navigation.navigate('Login', data)
                dispatch({
                    type: 'REGIS_SUCCESS',
                    payload
                })
            })
            .catch(error => {
                console.log(error)
                throw (error);
            })
    } 
}