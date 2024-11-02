import React, { useState } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import LangItem from './langItem';

interface Language {
    id: string;
    lang: string;
    logo: string;
}

const langs: Language[] = [
    { id: '1', lang: 'JavaScript', logo: 'https://example.com/js-logo.png' },
    { id: '2', lang: 'Python', logo: 'https://example.com/python-logo.png' },
    // добавьте другие языки
];

const App: React.FC = () => {
    const [refreshing, setRefreshing] = useState(false);

    const onRefresh = () => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 2000);
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={langs}
                renderItem={({ item }) => <LangItem lang={item} />}
                keyExtractor={item => item.id}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
    },
});

export default App;
