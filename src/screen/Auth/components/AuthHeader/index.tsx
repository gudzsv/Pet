import React, { memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

type AuthTab = 'login' | 'registration';

export interface AuthHeaderProps {
  activeTab: AuthTab;
  setActiveTab?: (tab: AuthTab) => void;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Hello there !!!</Text>
        <Text style={styles.welcomeText}>Welcome to Login Form</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          accessibilityRole="button"
          accessibilityState={{ selected: activeTab === 'login' }}
          style={[
            styles.tabBase,
            activeTab === 'login' ? styles.activeTab : styles.disabledTab,
          ]}
          onPress={() => setActiveTab && setActiveTab('login')}
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
          onPress={() => setActiveTab && setActiveTab('registration')}
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
