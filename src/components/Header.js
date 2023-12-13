import {View, Text, StyleSheet} from 'react-native';

const Header = ({title, style}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'coral',
    padding: 15,
  },
  title: {
    fontSize: 20,
    color: '#fff',
    alignSelf: 'center',
  },
});

export default Header;
