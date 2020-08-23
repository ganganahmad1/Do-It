import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Icon} from 'react-native-elements';

const BottomNavigator = props => {
        return (
            <View style={{
                flexDirection: 'column',
                backgroundColor: 'transparent'
            }}>
                
                <View style={{ position: 'absolute', backgroundColor: '#fff', bottom: 0, zIndex: 1, width: '100%', height: 60, flexDirection: 'row', justifyContent: 'space-between',  borderTopWidth: 2, borderTopColor: '#f0f0f0' }}>
                    <View style={{ flex: 1, flexDirection: 'column', paddingVertical: 15 }}>
                        <View>
                            <Icon
                                name='widgets'
                                type='material'
                                color='#0779e4'
                                onPress={() => {}}
                            />
                            <View
                                style={{
                                    borderBottomColor: '#0779e4',
                                    borderBottomWidth: 3,
                                    width: 25,
                                    alignSelf: 'center'
                                }}
                            />
                        </View>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'column', paddingVertical: 15 }}>
                        <Icon
                            name='menu'
                            type='material'
                            color='#0779e4'
                            onPress={() => {}}
                        />
                    </View>
                </View>
                
            </View>
        );
}

export default BottomNavigator;