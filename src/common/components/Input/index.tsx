import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import React, { useState } from 'react';
import EyeIcon from '../../../assets/icons/EyeIcon';
import EyeOffIcon from '../../../assets/icons/EyeOffIcon';
import styles from './styles';

interface IInput {
  onBlur?: () => void;
  value: string;
  onChangeText: (text: string) => void;
  placeholderColor?: string;
  placeholder?: string;
  error?: string | null;
  secureTextEntry?: boolean;
  additionalContainerStyle?: ViewStyle;
  additionInputStyle?: ViewStyle;
  onFocus?: () => void;
}
export default function Input({
  onBlur,
  placeholder,
  value,
  onChangeText,
  placeholderColor = '#838383',
  error,
  secureTextEntry = false,
  additionalContainerStyle,
  additionInputStyle,
  onFocus,
}: IInput) {
  const [isPassHidden, setIsPassHidden] = useState(secureTextEntry);

  return (
    <>
      <View style={[styles.inputContainer, additionalContainerStyle]}>
        <TextInput
          placeholder={placeholder}
          style={[styles.input, additionInputStyle]}
          placeholderTextColor={placeholderColor}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          onChangeText={text => onChangeText(text)}
          secureTextEntry={isPassHidden}
        />
        {secureTextEntry && (
          <TouchableOpacity
            onPress={() => {
              setIsPassHidden(!isPassHidden);
            }}
            hitSlop={{ top: 15, bottom: 15, right: 15, left: 15 }}
          >
            {isPassHidden ? (
              <EyeIcon color={'#000000'} />
            ) : (
              <EyeOffIcon color={'#a36161'} />
            )}
          </TouchableOpacity>
        )}
      </View>
      {!!error && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
}
