import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import { connect } from 'react-redux';
import { CardSection } from './common'
import * as actions from '../actions'

class ListItem extends Component {
    render() {
        const { id, title, description } = this.props.library
        return (
            <TouchableWithoutFeedback
                onPress={_ => this.props.selectLibrary(id)}
            >
                <View>
                    <CardSection>
                        <Text style={styles.title}>{title}</Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        )

    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        paddingLeft: 15
    }
})

const mapStateToProps = state => {
    return { selectedId: state.selectedId }
}

export default connect(mapStateToProps, actions)(ListItem)
