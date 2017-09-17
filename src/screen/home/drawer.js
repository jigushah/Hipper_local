import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import {
    StackNavigation,
    DrawerNavigation,
    DrawerNavigationItem,
} from '@expo/ex-navigation';
import Router from '../../navigationHelper/router'
// Treat the DrawerNavigationLayout route like any other route -- you may want to set
// it as the intiial route for a top-level StackNavigation

export  default class Drawer extends React.Component {
    static route = {
        navigationBar: {
            visible: false,
        }
    };

    render() {
        return (
            <DrawerNavigation
                id='main'
                initialItem='home'
                drawerWidth={300}
                renderHeader={this._renderHeader}
            >
                <DrawerNavigationItem
                    id='home'
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle('Home', isSelected)}
                >
                    <StackNavigation
                        id='home'
                        initialRoute={Router.getRoute('homeScreen')}
                    />
                </DrawerNavigationItem>

                <DrawerNavigationItem
                    id='about'
                    selectedStyle={styles.selectedItemStyle}
                    renderTitle={isSelected => this._renderTitle('About', isSelected)}
                >
                    <StackNavigation
                        id='about'
                        initialRoute={Router.getRoute('login')}
                    />
                </DrawerNavigationItem>

            </DrawerNavigation>
        );
    }

    _renderHeader = () => {
        return (
            <View style={styles.header}>
                <Text>fdgdfgd</Text>
            </View>
        );
    };

    _renderTitle(text, isSelected) {
        return (
            <Text style={[styles.titleText, isSelected ? styles.selectedTitleText : {}]}>
                {text}
            </Text>
        );
    };
}

const styles = StyleSheet.create({
    header: {
        height: 20
    },

    selectedItemStyle: {
        backgroundColor: 'blue'
    },

    titleText: {
        fontWeight: 'bold'
    },

    selectedTitleText: {
        color: 'white'
    }
});