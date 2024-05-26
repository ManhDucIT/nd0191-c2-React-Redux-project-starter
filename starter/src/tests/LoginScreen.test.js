import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { render, screen } from '@testing-library/react';
import store from "../store/index";
import Login from '../screens/LoginScreen';


test('renders user name field, password field, and submit button', () => {
    render(
        <MemoryRouter>
            <Provider store={store}>
                <Login />
            </Provider>
        </MemoryRouter>
    );
  
    const usernameElement = screen.getByTestId('username-field');
    expect(usernameElement).toBeInTheDocument();
  
    const passwordElement = screen.getByTestId('password-field');
    expect(passwordElement).toBeInTheDocument();

    const submitElement = screen.getByTestId('submit-button');
    expect(submitElement).toBeInTheDocument();
});
