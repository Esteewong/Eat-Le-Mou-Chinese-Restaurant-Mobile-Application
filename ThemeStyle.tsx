import { StyleSheet } from 'react-native';

const lightTheme = StyleSheet.create({
  container: {
    backgroundColor: '#f8f9f9',
  },
  text: {
    color: '#000',
  },
  button: {
    backgroundColor: '#007BFF',
  },
  buttonText: {
    color: '#fff',
  },
  settingsItems: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#000',
  },
  input: {
    placeholderColor: '#888',
    disabledColor: '#ccc',
    color: '#000',
    borderColor: '#000',
  },
  headerStyle:{
    backgroundColor: '#fff',
  },
  tabBarStyle:{
    backgroundColor: '#fff',
  },
  headerTitleStyle:{
    color: '#000',
  },
  drawerStyle:{
    backgroundColor: '#fff',
  },
  drawerLabelStyle:{
    color: '#000'
  },
});

const darkTheme = StyleSheet.create({
  container: {
    backgroundColor: '#1f2937', 
  },
  text: {
    color: '#f9fafb',
  },
  button: {
    backgroundColor: '#1E90FF',
  },
  buttonText: {
    color: '#fff',
  },
  settingsItems: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#c9c7c7',
  },
  input: {
    placeholderColor: '#bbb',
    disabledColor: '#555',
    color: '#f9fafb',
    borderColor: '#f9fafb',
  },
  headerStyle:{
    backgroundColor: '#1f2937',
  },
  tabBarStyle:{
    backgroundColor: '#1f2937',
  },
  headerTitleStyle:{
    color: '#f9fafb',
  },
  drawerStyle:{
    backgroundColor: '#1f2937',
  },
  drawerLabelStyle:{
    color: '#f9fafb'
  },
});

export { lightTheme, darkTheme };
