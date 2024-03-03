import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Topbar from '../components/home/Topbar'
import Header from '../components/home/Header'

const SingelScreen = () => {
  return (
    <SafeAreaView style={styles.container}>

        <Topbar />
      <Text style={{color: "#fff"}}>SingelScreen</Text>
    </SafeAreaView>
  )
}

export default SingelScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: "#000",
        flex: 1,
      },
})