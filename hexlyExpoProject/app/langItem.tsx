// LangItem.tsx
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface LangItemProps {
    lang: {
        id: string;
        lang: string;
        logo: string;
    };
}

const LangItem: React.FC<LangItemProps> = ({ lang }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: lang.logo }} style={styles.logo} />
            <Text style={styles.text}>{lang.lang}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    logo: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    text: {
        fontSize: 18,
    },
});

export default LangItem;
