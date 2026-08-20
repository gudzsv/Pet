import { useState, useEffect } from 'react';

import AuthHeader from '../components/AuthHeader';
import AuthLayout from '../components/AuthLayout';
import Input from '../../../common/components/Input';
import DefaultButton from '../../../common/components/DefaultButton';

interface InputValues {
  email: string;
  password: string;
  errorEmail?: string | null;
  errorPassword?: string | null;
  isHidePassword: boolean;
}

interface ActiveTabValues {
  activeTab: 'login' | 'registration';
  setActiveTab: (tab: string) => void;
}

export default function LoginPage() {
  const [inputValues, setInputValues] = useState<InputValues>({
    email: '',
    password: '',
    errorEmail: null,
    errorPassword: null,
    isHidePassword: true,
  });

  const [activeTab, setActiveTab] =
    useState<ActiveTabValues['activeTab']>('login');

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
      );
      const posts = await response.json();
      console.log(posts);
    };

    fetchPosts();
  }, []);

  const handleChangeInput = (
    field: keyof InputValues,
    value: string | null,
  ) => {
    setInputValues(prevValues => ({
      ...prevValues,
      [field]: value,
    }));
  };

  const isDisabled = Boolean(
    !inputValues.email ||
      !inputValues.password ||
      inputValues.errorEmail ||
      inputValues.errorPassword,
  );

  const checkEmail = () => {
    const emailValidator = new RegExp(
      '^([a-z0-9._%-]+@[a-z0-9.-]+.[a-z]{2,6})*$',
    );
    if (!emailValidator.test(inputValues.email)) {
      handleChangeInput('errorEmail', 'Not valid email');
    } else {
      handleChangeInput('errorEmail', null);
    }
  };
  const checkPassword = (text: string) => {
    if (text.length < 8) {
      handleChangeInput(
        'errorPassword',
        'Password must be more then 8 symbols ',
      );
    } else {
      handleChangeInput('errorPassword', null);
    }
  };

  return (
    <AuthLayout>
      <AuthHeader activeTab={activeTab} setActiveTab={setActiveTab} />

      <Input
        onBlur={checkEmail}
        value={inputValues.email}
        onChangeText={text => handleChangeInput('email', text)}
        error={inputValues.errorEmail}
        placeholder={'Email'}
      />
      <Input
        placeholder={'Password'}
        value={inputValues.password}
        onChangeText={text => {
          handleChangeInput('password', text);
          checkPassword(text);
        }}
        secureTextEntry={true}
        error={inputValues.errorPassword}
      />

      <DefaultButton onPress={() => {}} disabled={isDisabled} text={'Увійти'} />
    </AuthLayout>
  );
}
