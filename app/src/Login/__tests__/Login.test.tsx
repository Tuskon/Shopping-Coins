import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react-native';
import Login from '../login'; 
import axios from 'axios';


jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Login Screen', () => {
  test('deve renderizar o formulário de login corretamente', () => {
    render(<Login />);

    
    expect(screen.getByPlaceholderText('Senha*')).toBeTruthy();
    expect(screen.getByLabelText('Email')).toBeTruthy();
    expect(screen.getByText('Entrar')).toBeTruthy();
  });

  test('deve chamar a função handleLogin ao pressionar o botão "Entrar"', async () => {
    
    mockedAxios.get.mockResolvedValue({
      data: {
        nome: 'Nome Teste',
        primeiro_nome: 'Primeiro Nome Teste',
        saldo: 100,
      }
    });

    render(<Login />);

    
    fireEvent.changeText(screen.getByLabelText('Email'), 'teste@teste.com');
    fireEvent.changeText(screen.getByPlaceholderText('Senha*'), 'senha123');

    
    fireEvent.press(screen.getByText('Entrar'));

    
    await waitFor(() => {
      expect(mockedAxios.get).toHaveBeenCalledWith(expect.stringContaining('/usuarios/FindOne'), expect.any(Object));
      
    });
  });
});
