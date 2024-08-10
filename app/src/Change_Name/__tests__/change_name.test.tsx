import React from 'react';
import { render } from '@testing-library/react-native';
import Change_Name from '../change_name';

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

jest.mock('@/Session', () => ({
  getEmail: jest.fn(),
  removeEmail: jest.fn(),
}));

describe('Change_Name Screen', () => {
  it('should render the Change_Name screen', () => {
    const { getByText } = render(<Change_Name />);

    expect(getByText('Altere seu Nome')).toBeTruthy();
    expect(getByText('Alterar')).toBeTruthy();
  });
});
