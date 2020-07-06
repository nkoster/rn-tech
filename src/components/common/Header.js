import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({ title, fg, bg }) => {
    const fgStyle = {
        fontSize: 25,
        color: fg
    }
    const bgStyle = { 
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        height: 60,
        backgroundColor: bg,
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 2,
        position: 'relative'
    }
    return (
        <View style={bgStyle}>
            <Text style={fgStyle}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 15,
        height: 60,
        backgroundColor: '#684',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.4,
        shadowRadius: 4,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 25,
        color: 'white'
    }
})

export { Header }
