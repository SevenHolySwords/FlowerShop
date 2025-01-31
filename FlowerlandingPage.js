import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { styles } from './FlowerLandingPage';


export default function FlowerlandingPage() {
    return (
        <ScrollView style={styles.container}>
            {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Blooming Flowers</Text>
                <Text style={styles.subHeaderText}>Fresh and Beautiful Flowers Delivered to Your Doorstep</Text>
            </View>
            <view style={styles.imageCOntainer} />
        </ScrollView>
    );
}
