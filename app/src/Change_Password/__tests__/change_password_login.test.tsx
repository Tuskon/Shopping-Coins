import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Change_Password_Login from '../change_password_login';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
    dispatch: jest.fn(),
  }),
  CommonActions: {
    reset: jest.fn(),
  },
}));

jest.mock('axios', () => ({
  put: jest.fn(),
}));

jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => 'MaterialCommunityIcons');

describe('Change_Password_Login Screen', () => {
  it('should render the Change_Password_Login screen', () => {
    const { getByText, getByPlaceholderText } = render(<Change_Password_Login />);

    
    expect(getByText('Altere sua senha')).toBeTruthy();
    expect(getByText('Alterar')).toBeTruthy();
    expect(getByPlaceholderText('Senha')).toBeTruthy();
    expect(getByPlaceholderText('Confirmar Senha*')).toBeTruthy();
  });

  it('should toggle password visibility on icon press', () => {
    const { getByPlaceholderText, getByRole } = render(<Change_Password_Login />);

    const passwordInput = getByPlaceholderText('Senha');
    const confirmPasswordInput = getByPlaceholderText('Confirmar Senha*');

   
    expect(passwordInput.props.secureTextEntry).toBe(true);
    expect(confirmPasswordInput.props.secureTextEntry).toBe(true);

    
    fireEvent.press(getByRole('button', { name: /eye/i }));

    
    expect(passwordInput.props.secureTextEntry).toBe(false);
    expect(confirmPasswordInput.props.secureTextEntry).toBe(false);
  });
});
