import React, {useRef, useState, useEffect, useImperativeHandle} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
  Modal,
  Pressable,
  Image,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  incrementCounterAction,
  decrementCounterAction,
} from '../../actions/counterAction';
export const ReduxDemo = props => {
  const dispatch = useDispatch();
  const [counter, setCounter] = useState('');
  const counterReducer = useSelector(state => state);

  useEffect(() => {
    console.log(counterReducer, 'stateReducer');
    setCounter(counterReducer.counter);
  }, [counterReducer]);

  const increaseCounter = parameter => {
    // dispatch(incrementCounterAction(parameter));
    dispatch({
      type: 'INCREMENT_COUNTER',
      payload: parameter,
    });
  };
  const decreaseCounter = () => {
    dispatch(decrementCounterAction());
  };

  return (
    <View style={styles.container}>
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <View style={{marginVertical: 50}}>
          <Text style={{fontSize: 25, fontWeight: 'bold'}}>
            {' '}
            Counter Value ={counter}
          </Text>
        </View>
        <View style={{marginVertical: 5}}>
          <Button
            title="Increment +1"
            style={{marginVertical: 50}}
            onPress={() => {
              increaseCounter(1);
            }}
          />
        </View>
        <View style={{marginVertical: 5}}>
          <Button
            title="Increment +5"
            style={{marginVertical: 50}}
            onPress={() => {
              increaseCounter(5);
            }}
          />
        </View>
        <View style={{marginVertical: 50}}>
          <Button
            title="Decrement -1"
            onPress={() => {
              decreaseCounter();
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});
