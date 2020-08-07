import React, { useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
} from "react-native";


const GenericFunctionComponent = (props) => {
    const { color, route, providerId, token } = props;

    useEffect(() => {
        console.log("Entered the screen");
    }, []);

    return (
        <View style={styles.body}>
            <Text style={{ color: color }}>
                {route}
            </Text>
            <Text>{providerId}</Text>
            <Text>{token}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: 'white'
    }
});

export default GenericFunctionComponent;