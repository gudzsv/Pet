import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import { ScreenNames } from '../../../../constants/screenNames';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackNavigation } from '../../../../navigation/types';

type AuthTab = 'login' | 'registration';

export interface AuthHeaderProps {
  activeTab: AuthTab;
  setActiveTab?: (tab: AuthTab) => void;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ activeTab, setActiveTab }) => {
  const navigation = useNavigation<StackNavigationProp<RootStackNavigation>>();
  const navigateToLogin = () => {
    setActiveTab && setActiveTab('login');
    navigation.navigate(ScreenNames.LOGIN_PAGE);
  };
  const navigateToRegistration = () => {
    setActiveTab && setActiveTab('registration');
    navigation.navigate(ScreenNames.REGISTRATION_PAGE);
  };
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hello there !!!</Text>
        <Text style={styles.welcomeText}>{`Welcome to ${
          activeTab === 'login' ? 'Login' : 'Registration'
        } Form`}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityState={{ selected: activeTab === 'login' }}
          style={[
            styles.tabBase,
            activeTab === 'login' ? styles.activeTab : styles.disabledTab,
          ]}
          onPress={navigateToLogin}
        >
          <Text
            style={
              activeTab === 'login' ? styles.activeTabText : styles.tabText
            }
          >
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityState={{ selected: activeTab === 'registration' }}
          style={[
            styles.tabBase,
            activeTab === 'registration'
              ? styles.activeTab
              : styles.disabledTab,
          ]}
          onPress={navigateToRegistration}
        >
          <Text
            style={
              activeTab === 'registration'
                ? styles.activeTabText
                : styles.tabText
            }
          >
            Register
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default memo(AuthHeader);
