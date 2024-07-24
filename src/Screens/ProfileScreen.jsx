import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Modal, FlatList } from 'react-native';

const Gender = {
  MALE: 'Male',
  FEMALE: 'Female',
  OTHER: 'Other',
};

const ProfilePage = () => {
  const [name, setName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [showGenderDropdown, setShowGenderDropdown] = useState(false);
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');

  const toggleGenderDropdown = () => {
    setShowGenderDropdown(!showGenderDropdown);
  };

  const selectGender = (selectedGender) => {
    setGender(selectedGender);
    setShowGenderDropdown(false);
  };

  const validateDate = (dateString) => {
    // Regular expression to match DD/MM/YYYY format
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;
    if (!dateRegex.test(dateString)) {
      return false;
    }

    // Further validation to check if it's a valid date
    const [day, month, year] = dateString.split('/').map(Number);
    const date = new Date(year, month - 1, day);
    return date && date.getMonth() + 1 === month && date.getDate() === day;
  };

  const validateInputs = () => {
    if (name.trim().length < 2) {
      Alert.alert('Invalid Name', 'Name must be at least 2 characters long.');
      return false;
    }
    
    if (!validateDate(dob)) {
      Alert.alert('Invalid Date of Birth', 'Please enter a valid date in DD/MM/YYYY format.');
      return false;
    }

    const [day, month, year] = dob.split('/').map(Number);
    const dobDate = new Date(year, month - 1, day);
    const today = new Date();
    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDiff = today.getMonth() - dobDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dobDate.getDate())) {
      age--;
    }
    if (age < 18) {
      Alert.alert('Invalid Date of Birth', 'You must be at least 18 years old.');
      return false;
    }
    
    if (!/^\d{10}$/.test(mobile)) {
      Alert.alert('Invalid Mobile Number', 'Please enter a 10-digit mobile number.');
      return false;
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return false;
    }
    
    return true;
  };

  const handleSave = () => {
    if (validateInputs()) {
      Alert.alert('Success', 'Profile saved successfully!');
      // Here you would typically save the data to your backend or local storage
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add Profile</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Date of Birth (DD/MM/YYYY)"
        value={dob}
        onChangeText={setDob}
        keyboardType="numeric"
      />
      
      <TouchableOpacity onPress={toggleGenderDropdown} style={styles.input}>
        <Text>{gender==''?"Gender":gender}</Text>
      </TouchableOpacity>
      <Modal visible={showGenderDropdown} transparent={true} animationType="slide">
        <View style={styles.modalView}>
          <FlatList
            data={Object.values(Gender)}
            renderItem={({item}) => (
              <TouchableOpacity style={styles.modalItem} onPress={() => selectGender(item)}>
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item}
          />
        </View>
      </Modal>
      
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={mobile}
        onChangeText={setMobile}
        keyboardType="phone-pad"
        maxLength={10}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <TouchableOpacity style={styles.button} onPress={handleSave}>
        <Text style={styles.buttonText}>Save Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#1a73e8',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    width: '100%',
  },
});

export default ProfilePage;