import {View, Text, Button, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {logoutUser} from '../redux/actions/actions';

const Home = ({navigation}) => {
  const user = useSelector(state => state.userReducer.loginUser);
  const dispatch = useDispatch();
  console.log('home', user);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      {!!user && (
        <View>
          <Text style={styles.text}>
            Your Email is : {user.email} & Password is : {user.password}
          </Text>
          <View style={styles.btn}>
            <Button title="Logout" onPress={handleLogout} />
          </View>
        </View>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 40,
  },
  btn: {
    marginTop: '20%',
  },
});
