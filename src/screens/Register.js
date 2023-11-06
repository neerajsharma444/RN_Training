import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Pressable,
  Alert,
} from 'react-native';
import Header from '../components/Header';
import {RadioButton} from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import DatePicker from 'react-native-date-picker';
import {Dropdown} from 'react-native-element-dropdown';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Register = ({navigation}) => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [gender, setGender] = useState('');
  const [programmingLanguages, setProgrammingLanguages] = useState([]);
  const [date, setDate] = useState(new Date());
  const [datePickerVisibility, setDatePickerVisibility] = useState(false);

  const locations = [
    {label: 'Bangalore', value: 'Bangalore'},
    {label: 'Delhi', value: 'Delhi'},
    {label: 'Goa', value: 'Goa'},
    {label: 'Gujarat', value: 'Gujarat'},
    {label: 'Other', value: 'Other'},
  ];

  const genders = ['Male', 'Female', 'Other'];
  const programmingLanguagesList = [
    'JavaScript',
    'Python',
    'Java',
    'C++',
    'Other',
  ];

  const handleRegister = () => {
    // Simple validation: check if name and location are not empty
    if (!name.trim() || !location.trim()) {
      Alert.alert('Validation Error', 'Name and Location are required');
    } else {
      // Convert date to a serializable string
      const serializableDate = date.toJSON();

      // Navigate to home screen with user data
      navigation.navigate('Home', {
        name,
        location,
        gender,
        programmingLanguages,
        date: serializableDate,
      });
    }
  };

  return (
    <View style={styles.container}>
      <Header title="Register to your account" style={styles.header} />
      <View style={styles.input_container}>
        <TextInput
          style={styles.name_input}
          placeholder="Enter your name"
          value={name}
          onChangeText={text => setName(text)}
        />
        <View style={styles.dropdown_container}>
          <Text style={styles.dropdown_text}>Location</Text>
          <Dropdown
            style={styles.dropdown}
            placeholder="Select"
            selectedTextStyle={{color: '#000'}}
            data={locations}
            labelField="label"
            valueField="value"
            onChange={item => {
              setLocation(item.value);
            }}
          />
        </View>
        <View style={styles.radio_container}>
          <Text style={styles.gender}>Gender:</Text>
          {genders.map((gen, index) => (
            <View key={index} style={styles.radioButton}>
              <RadioButton
                value={gen}
                status={gen === gender ? 'checked' : 'unchecked'}
                onPress={() => setGender(gen)}
              />
              <Text>{gen}</Text>
            </View>
          ))}
        </View>
        <Text style={styles.programming}>Programming Languages:</Text>
        {programmingLanguagesList.map((lang, index) => (
          <View key={index} style={styles.checkBox}>
            <CheckBox
              value={programmingLanguages.includes(lang)}
              onValueChange={() => {
                if (programmingLanguages.includes(lang)) {
                  setProgrammingLanguages(
                    programmingLanguages.filter(item => item !== lang),
                  );
                } else {
                  setProgrammingLanguages([...programmingLanguages, lang]);
                }
              }}
            />
            <Text>{lang}</Text>
          </View>
        ))}
        <TouchableOpacity onPress={() => setDatePickerVisibility(true)}>
          <Text style={styles.choose_date}>Choose</Text>
        </TouchableOpacity>
        {datePickerVisibility && (
          <DatePicker
            mode="date"
            date={date}
            onDateChange={date => {
              setDatePickerVisibility(false);
              setDate(date);
            }}
          />
        )}
      </View>
      <Pressable onPress={handleRegister}>
        <Text style={styles.register_text}>Register</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {},
  input_container: {
    padding: '10%',
  },
  name_input: {
    fontSize: 18,
  },
  dropdown_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  dropdown_text: {
    fontSize: 18,
    alignSelf: 'center',
  },
  dropdown: {
    width: '50%',
    alignSelf: 'center',
  },
  radio_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  gender: {
    fontSize: 18,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  programming: {
    fontSize: 18,
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  choose_date: {
    backgroundColor: '#6793A9',
    color: '#fff',
    fontWeight: '600',
    padding: 10,
    borderRadius: 20,
    width: '50%',
    alignSelf: 'center',
    textAlign: 'center',
    marginTop: 20,
  },
  register_text: {
    fontSize: 18,
    backgroundColor: 'coral',
    color: '#fff',
    textAlign: 'center',
    padding: 10,
    borderRadius: 10,
  },
});

export default Register;
