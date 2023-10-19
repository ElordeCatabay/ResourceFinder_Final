import { View, Text,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import { signOut } from 'firebase/auth'
import { auth } from '../config/firebase'
import {COLORS, SIZES} from '../theme/theme'
import { MaterialIcons } from '@expo/vector-icons';
export default function SettingsScreen ({ navigation }) {
  const handleLogout = async () => {
    await signOut(auth)
  }

  const handleAboutUsNavigation = () => {
    navigation.navigate('AboutUs')
  }

  const handleGuidelinesNavigation = () => {
    navigation.navigate('Guidelines')
  }

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#101820FF' }}>
      <TouchableOpacity
        onPress={handleAboutUsNavigation}
        style={{ ...styles.button, marginBottom: 10 }}
      >
        <Text style={styles.buttonText}>About Us</Text>
        <MaterialIcons name="info" size={30} color="black" style={styles.icon} />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={handleGuidelinesNavigation}
        style={{ ...styles.button, marginBottom: 10 }}
      >
        <Text style={styles.buttonText}>Guidelines</Text>
        <MaterialIcons name="list" size={30} color="black" style={styles.icon} />
      </TouchableOpacity>

    
      <TouchableOpacity onPress={handleLogout} style={styles.button}>
        <Text style={styles.buttonText}>Logout</Text>
        <MaterialIcons name="logout" size={30} color="red" style={styles.icon} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = {
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#AEE8F5',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'black',
    padding: 20,
    margin: 10,
    width: '90%',
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
  icon: {
    marginLeft: 'auto',
  },
};
