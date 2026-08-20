import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
  inputContainer: {
    borderWidth: 1,
    borderColor: '#EAE9FB',
    borderRadius: 20,
    paddingHorizontal: 24,
    paddingVertical: Platform.select({ ios: 14, android: 6, default: 6 }),
    marginVertical: 4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 10,
  },

  input: {
    padding: 0,
  },

  showPassword: {
    width: 20,
    height: 20,
    color: 'red',
  },

  hidePassword: {
    width: 20,
    height: 20,
    color: '#8183d0',
  },

  submitButtonContainer: {
    alignItems: 'center',
  },

  submitButton: {
    backgroundColor: '#8183d0',
    padding: 10,
    borderRadius: 20,
    width: '100%',
    textAlign: 'center',
  },

  disabledButton: {
    opacity: 0.5,
  },
});
