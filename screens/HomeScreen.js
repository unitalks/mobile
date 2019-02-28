import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';

export default class Example extends Component {
    render() {
        const items = [
            {name: 'GROUPS', code: '#1abc9c'}, {name: 'FACULTY SCHEDULE', code: '#2ecc71'},
            {name: 'CONTACTS', code: '#3498db'}, {name: 'FOLDERS', code: '#9b59b6'},
            {name: 'ANNOUNCEMENTS', code: '#34495e'}, {name: 'COPYBOOK', code: '#16a085'},
            {name: 'BOOKS & MATERIALS', code: '#27ae60'}, {name: 'PROBLEMS AND SOLUTIONS', code: '#2980b9'},
            {name: 'ANTI-PROCRASTINATOR', code: '#8e44ad'}, {name: 'SEARCH BY GOOGLE', code: '#2c3e50'},
            {name: 'RESOURCES', code: '#f1c40f'}, {name: 'DICTIONARY', code: '#e67e22'},
        ];

        return (
            <FlatGrid
                itemDimension={130}
                items={items}
                style={styles.gridView}
                // staticDimension={300}
                // fixed
                // spacing={20}
                renderItem={({item, index}) => (
                    <View style={[styles.itemContainer, {backgroundColor: item.code}]}>
                        <Text style={styles.itemName}>{item.name}</Text>
                    </View>
                )}
            />
        );
    }
}

const styles = StyleSheet.create({
    gridView: {
        marginTop: 20,
        flex: 1,
    },
    itemContainer: {
        justifyContent: 'flex-end',
        borderRadius: 5,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '600',
    },
    itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
    },
});