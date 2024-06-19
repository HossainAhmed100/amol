import { View, Text } from 'react-native'
import React from 'react'
import ColorList from '../components/ColorList'
import TaskList from '../components/TaskList'

const Home = () => {
  return (
    <View>
      <TaskList />
    </View>
  )
}

export default Home