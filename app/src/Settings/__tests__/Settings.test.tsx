import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import Settings from '../settings'; 


jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(),
}));

jest.mock('@/Session', () => ({
  getUserData: jest.fn(),
  getEmail: jest.fn(),
  removeEmail: jest.fn(),
}));

describe('Settings Screen', () => {
  it('should render the Settings screen correctly', () => {
    const { getByText, getByTestId } = render(<Settings />);
    
    
    expect(getByText('Editar Perfil')).toBeTruthy();

    
    expect(getByText('Sair')).toBeTruthy();
  });

  it('should open and close the profile details modal', async () => {
    const { getByText, getByTestId } = render(<Settings />);

    
    fireEvent.press(getByText('Detalhes do Perfil'));

   
    await waitFor(() => expect(getByTestId('modal-view')).toBeTruthy());

    
    fireEvent.press(getByText('Fechar'));

    
    await waitFor(() => expect(getByTestId('modal-view')).not.toBeTruthy());
  });
});
