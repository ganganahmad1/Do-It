import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

const image = { uri: "https://mfiles.alphacoders.com/770/thumb-770594.jpg" };

const Profile = props => {
    return (
        <View style={styles.container}>
            <Image
                source={image}
                style={styles.image}
            />
            <View style={ styles.card }>
                <Avatar
                    size="medium"
                    rounded
                    source={{
                        uri:
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT2Ws7N5Rj_6wj33jH5XnzwdMY8ytg4Zf4fQg&usqp=CAU',
                    }}
                    containerStyle={{
                        marginTop: -25,
                        marginLeft: 30
                    }}
                />
                <View style={{ flexDirection: 'row', marginHorizontal: 25,  justifyContent: 'flex-end' }}>
                    <View style={{ alignItems: 'center', marginRight: 10, }}>
                        <Text style={{ fontSize: 12, fontWeight: '700' }}>0</Text>
                        <Text style={{ fontSize: 12, fontWeight: '700' }}>Following</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, fontWeight: '700' }}>0</Text>
                        <Text style={{ fontSize: 12, fontWeight: '700' }}>Followers</Text>
                    </View>
                </View>
                <View style={{ marginHorizontal: 25 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Nama Penjual</Text>
                    <Text style={{ marginVertical: 5 }}>Jakarta Selatan</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon 
                            type="material"
                            name="star"
                            size={15}
                            color="#f9d56e"
                        />
                        <Text style={{ fontSize: 13, color: '#f9d56e', fontWeight: '700' }}> 4.5</Text>
                    </View>
                    <View style={{ flexDirection: "row", justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{
                                backgroundColor: "#3e64ff",
                                height: 30,
                                width: 100,
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: 10,
                                marginRight: 15
                            }}
                        >
                            <Text style={{ color: '#fff' }}>Ikuti</Text>
                        </TouchableOpacity>
                        <View style={{ borderColor: '#99b19c', borderWidth: 2, borderRadius: 10 }}>
                            <Icon 
                                type="font-awesome-5"
                                name="comments"
                                color="#99b19c"
                                containerStyle={{ padding: 2 }}
                            />
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
     },
    card: {
        flex:1,
        marginTop: -350,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        zIndex: 99
    }
})

export default Profile;