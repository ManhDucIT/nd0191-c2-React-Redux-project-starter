import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import { render, screen, fireEvent } from '@testing-library/react';
import store from "../store/index";
import Login from '../screens/LoginScreen';

describe("LoginScreen", () => {
    it("Should render a snapshot for Login screen", async () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>
        );

        expect(component).toMatchSnapshot();
    });

    it("Will display an error if username is empty", async () => {
        const component = render(
            <MemoryRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </MemoryRouter>
        );
        const passwordInput = screen.getByTestId('password-field');
        fireEvent.change(passwordInput, { target: { value: 'abc123' } });
        const loginButton = screen.getByTestId('submit-button');
        fireEvent.click(loginButton);
        expect(component.queryByTestId("error-username")).toBeInTheDocument();
        expect(loginButton).toBeInTheDocument();
    });

    it('Should render user name field, password field, and submit button', () => {
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
});