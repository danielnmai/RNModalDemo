import {Text, View, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';

export default Example = () => {

  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>I am playing with hook. You clicked {count} times.</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text>Click me</Text>
        </TouchableOpacity>
    </View>

    
  )
}