import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { fonts } from '../../../../constants/fonts';

type Styles = {
  titleContainer: ViewStyle;
  title: TextStyle;
  welcomeText: TextStyle;
  buttonContainer: ViewStyle;
  tabBase: ViewStyle;
  disabledTab: ViewStyle;
  activeTab: ViewStyle;
  tabText: TextStyle;
  activeTabText: TextStyle;
};

export default StyleSheet.create<Styles>({
  titleContainer: {
    marginBottom: 4,
  },

  title: {
    fontSize: 24,
    fontFamily: fonts.ComfortaaRegular,
    marginBottom: 4,
  },

  welcomeText: {
    fontSize: 14,
    fontFamily: fonts.MontserratRegular,
  },

  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#EAE9FB',
    padding: 4,
    borderRadius: 20,
  },

  tabBase: {
    alignItems: 'center',
    padding: 10,
    borderRadius: 20,
    flex: 1,
  },

  disabledTab: {
    // inherits tabBase — keep transparent background for disabled state
  },

  activeTab: {
    backgroundColor: '#E8F8F9',
  },

  tabText: {
    color: '#000',
    fontFamily: fonts.MontserratMedium,
  },

  activeTabText: {
    color: '#0a7c80',
    fontFamily: fonts.MontserratMedium,
  },
});
