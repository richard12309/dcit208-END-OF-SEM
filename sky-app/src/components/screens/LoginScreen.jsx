import React from 'react'
import { View, Text,StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Ionicons } from '@expo/vector-icons';
const Title= styled.Text`
    font-weight:700,
    font-size:30px
`
const LightText = styled.Text`
    padding-left:10px
`
const LoginScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Title>
                    Login
                </Title>
            </View>
            <View style={styles.light}>
                <LightText>
                    Please sign in to continue
                </LightText>
            </View>
            <View style={styles.email}>
            <Input
                placeholder='Email'
                leftIcon={
                    <Icon
                    name='envelope-o'
                    size={24}
                    color='black'
                    />
                }
                />
            </View>
            <View style={styles.email}>
            <Input
                placeholder='Password'
                leftIcon={
                    <Ionicons name="lock-closed-outline" size={24} color="black" />
                }
                />
            </View>

        </View>
    )
}

export default LoginScreen
const styles = StyleSheet.create({
    container:{
    },
    title:{
        marginTop:100,
        marginHorizontal:20
    },
    light:{
        color:'#989a9c',
        margin:10
    },
    email:{
        margin:10
    }
})