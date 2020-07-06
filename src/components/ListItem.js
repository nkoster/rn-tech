import React, { Component } from 'react'
import { Text } from 'react-native'
import { CardSection } from './common'

class ListItem extends Component {
    render() {
        console.log(this.props.library)
        return (
            <CardSection>
                <Text style={{height:30}}>{this.props.library.title}</Text>
            </CardSection>
        )

    }
}

export default ListItem
