import { useRoute } from "@react-navigation/native";
import React from "react";
import {View, Text, StyleSheet} from 'react-native'

const NewsDetail = ({navigation}) =>{

    const route = useRoute();
    const newsItem = route.params?.newsItem;

    return(
        <View style={styles.container}>
            <Text style={styles.title}>{newsItem.title}</Text>
            <Text style={styles.description}>{newsItem.description}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000',
    },
    description: {
        fontSize: 14,
        color: '#000000',
    }
});

export default NewsDetail;