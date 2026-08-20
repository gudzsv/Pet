import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import styles from './styles';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.mainWrapper}>
        <KeyboardAvoidingView
          keyboardVerticalOffset={Platform.select({ ios: 90, android: 20 })}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
          {children}
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}
