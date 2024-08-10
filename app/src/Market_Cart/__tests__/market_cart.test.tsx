import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Market_Cart from '../market_cart';

jest.mock('axios');
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
  useIsFocused: () => true,
}));
jest.mock('@/Session', () => ({
  getEmail: jest.fn(),
}));
jest.mock('expo-notifications', () => ({
  scheduleNotificationAsync: jest.fn(),
}));

describe('Market_Cart', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Market_Cart />);
    
    
    expect(getByText('Shop')).toBeTruthy();
  });

  it('calls handleCompra when the purchase button is pressed', () => {
    const { getByRole } = render(<Market_Cart />);

    
    const button = getByRole('button');
    fireEvent.press(button);


  });
});
