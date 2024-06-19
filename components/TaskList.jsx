import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const TaskList = () => {
  return (
    <View style={styles.cardContainer}>
        <Text style={styles.taskTitle}>New Dua</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    cardContainer: {
      paddingHorizontal: 20,
      paddingVertical: 20,
      backgroundColor: '#c8f49ba6',
      borderRadius: 20,
      marginVertical: 10,
      marginHorizontal: 10,
      shadowColor: '#000',
    },
    taskTitle: {
      fontSize: 20,
      color: '#000',
      fontFamily: 'HindSiliguri_300Light',
    }
});

export default TaskList