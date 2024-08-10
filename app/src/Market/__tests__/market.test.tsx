import React from 'react';
import { render } from '@testing-library/react-native';
import Market from '../market';

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({ navigate: jest.fn() }),
  useIsFocused: jest.fn(),
}));

jest.mock('axios', () => ({
  get: jest.fn(),
  put: jest.fn(),
}));

jest.mock('@/Session', () => ({
  getUserData: jest.fn(),
  getEmail: jest.fn(),
  addPurchaseToHistory: jest.fn(),
}));

jest.mock('expo-notifications', () => ({
  scheduleNotificationAsync: jest.fn(),
}));

describe('Market Screen', () => {
  it('should render the Market screen', () => {
    const { getByText } = render(<Market />);

    expect(getByText('Olá,')).toBeTruthy();
    expect(getByText('Shopping Coins')).toBeTruthy();
    expect(getByText('Lc')).toBeTruthy();
    expect(getByText('Ver todos os produtos')).toBeTruthy();
  });
});
