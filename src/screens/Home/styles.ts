import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    eventName: {
      color: '#FFF',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop: 48
    },
    eventDate: {
      color: '#6B6B6B',
      fontSize: 16
    },
    input: {
      flex: 1,
      backgroundColor: '#1F1E25',
      height: 56,
      borderRadius: 5,
      color: '#FFF',
      padding: 16,
      marginRight: 12
    },
    buttonText: {
      color: '#FFF',
      fontSize: 24,
      alignItems: 'center', // alinha da vertical
     
    },
    button: {
      width: 55,
      height: 55,
      borderRadius: 5,
      backgroundColor: '#31C567',
      alignItems: 'center', // alinha da vertical
      justifyContent: 'center' // alinha da horizontal
    },
    form: {
      width: '100%',
      flexDirection: 'row',
      marginTop: 36,
      marginBottom: 42
    },
    listEmptyText: {
      color: '#FFF',
      fontSize: 14,
      textAlign: 'center',
    }
  });