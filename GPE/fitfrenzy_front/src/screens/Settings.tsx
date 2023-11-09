import React, { useState } from "react";
import { ScrollView, View, StyleSheet, Text, TouchableOpacity, Switch } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Profile } from "../components/Profile";
import { CompositeScreenProps, ParamListBase, RouteProp, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import RootStackScreens, { RootStackPramList, TabsProps } from "../navigation/Navigation";
const data = [
    {
        header: 'Preferences',
        items: [
            {id: 'language', icon: 'globe', label: 'Language', type: 'select'},
            {id: 'darkmode', icon: 'moon', label: 'Dark Mode', type: 'toggle'},
        ]
    },
    {
        header: 'Content',
        items: [
            { id: 'save', icon: 'save', label: 'Saved', type: 'link'},
            { id: 'download', icon: 'download', label: 'downloads', type: 'link'}
        ]
    },
    {
        header: 'Help',
        items: [
            { id: 'bugreport', icon: 'flag', label: 'Report a Bug', type: 'link'},
            { id: 'contact', icon: 'mail', label: 'Contact Us', type: 'link'},
            { id: 'privacy', icon: 'lock', label: 'Privacy Policy', type: 'link'}
        ]
    },
]


export interface SettingsProps {
    route?: RouteProp<ParamListBase, 'Home'>;
    navigation?: NativeStackNavigationProp<ParamListBase, 'Home'>
}


export const Settings = ({ route, navigation }: SettingsProps) => {

    
    const [form, setForm] = useState({
        language: 'English',
        darkmode: false,
    })

    return (
        <View style={{  flex: 1, backgroundColor: '#F6F6F6' }}>
            <ScrollView contentContainerStyle={styles.container}>
                {/* <View style={[styles.header]}>
                    <Text style={styles.title}>Settings</Text>
                    <Text style={styles.subtitle}>Update your preference here</Text>
                </View> */}

                <Profile navigation={navigation} />
                
                {data.map(({ header, items }) => (
                    <View style={styles.section} key={header}>
                        <View style={styles.sectionHeader}>
                            <Text style={styles.sectionHeaderText}>{header}</Text>
                        </View>

                        <View style={styles.sectionBody}>
                            {items.map(({ id, icon, label, type }, index) => (
                                <View 
                                    style={[
                                        styles.rowWrapper, 
                                        index === 0 && { borderTopWidth: 0 }
                                    ]} 
                                    key={id}
                                >
                                    <TouchableOpacity onPress={() => console.log('Pressed')}>
                                        <View style={styles.row}>
                                            <FeatherIcon 
                                                name={icon} 
                                                color="#616161" 
                                                size={22} 
                                                style={{marginRight: 12}}
                                            />
                                            <Text style={styles.rowLabel}>{label}</Text>

                                            <View style={styles.rowSpacer}>
                                                {type === 'select' && (
                                                    <Text style={styles.rowValue}>{form[id]}</Text>
                                                )}
                                                {type === 'toggle' && (
                                                    <Switch 
                                                        value={form[id]} 
                                                        onValueChange={value => setForm({ ...form, [id]: value })}
                                                    />
                                                )}

                                                {['select', 'link'].includes(type) && (
                                                    <FeatherIcon 
                                                        name="chevron-right"
                                                        color="#ababab"
                                                        size={22}
                                                    />
                                                )}
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 24,
    },
    header: {
        paddingHorizontal: 24,
        paddingBottom: 12,
    },
    border: {
        borderWidth: 1,
        borderColor: '#000',
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#1D1D1D',
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#929292',
    },
    section: {
        paddingTop: 12
    },
    sectionBody: {
        paddingTop: 12,
    },
    sectionHeader: {
        paddingHorizontal: 24,
        paddingVertical: 0,
    },
    sectionHeaderText: {
        fontSize: 14,
        /* borderWidth: 1,
        borderColor: 'red', */
        fontWeight: '600',
        color: '#A7A7A7',
        textTransform : 'uppercase',
        letterSpacing: 1.2
    },
    rowWrapper: {
        paddingLeft: 24,
        borderTopWidth: 1,
        borderColor: '#E3E3E3',
        backgroundColor: '#FFF'
    },
    row: {
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingRight: 24
    },
    rowLabel: {
        fontSize: 17,
        fontWeight: '500',
        color: '#000'
    },
    rowSpacer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    rowValue: {
        fontSize: 17,
        color: '#616161',
        marginRight: 4
    }
});