import {Text, View, TouchableOpacity} from 'react-native';
import React, { useState, useRef, useEffect } from 'react';

export default Example = () => {

  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);
  return (
    <View>
      <Text>I am playing with hook. You clicked {count} times. Previous count: {prevCount}</Text>
      <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text>Click me</Text>
        </TouchableOpacity>
    </View>    
  )
}

const usePrevious = value => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  })
  return ref.current;
}