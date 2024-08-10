import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import SignUp from '../signup';
import { TextInput } from 'react-native-paper';
import { RenderAPI } from '@testing-library/react-native';

describe('SignUp Component', () => {
  test('should render correctly', () => {
    render(<SignUp />);
    
    
    expect(screen.getByText('Sign Up')).toBeTruthy();

    
    expect(screen.getByPlaceholderText('Senha*')).toBeTruthy();
    expect(screen.getByPlaceholderText('Confirmar Senha*')).toBeTruthy();
    expect(screen.getByText('Cadastrar')).toBeTruthy();
  });

  test('should toggle password visibility', () => {
    const { getByPlaceholderText, getAllByTestId }: RenderAPI = render(<SignUp />);

    
    const toggleButtons = getAllByTestId('toggle-visibility'); 
    const passwordInput = getByPlaceholderText('Senha*');

   
    expect(passwordInput.props.secureTextEntry).toBe(true);

    
    fireEvent.press(toggleButtons[0]);

  });
});
