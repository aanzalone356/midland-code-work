import React from "react";
import LoginPage from "../../components/Login";
import { useUserContext } from "../../context/UserContext";
import { render, fireEvent, screen} from "@testing-library/react";
import '@testing-library/jest-dom';

//! If the password or username is too short, make sure the button is disabled

jest.mock('../../context/UserContext', () => ({
    useUserContext: jest.fn(),
}));


describe('LoginPage', () => {

    beforeEach(() => {
        // Set default return values before each test
        useUserContext.mockReturnValue({
        user: null,
        setUser: jest.fn(),
        clearUser: jest.fn(),
        });
    });

    it('should disable the button if username or password is less than 4 characters', () => {
        const { getByPlaceholderText,getByTestId } = render(
            <LoginPage />
        );

        const button = getByTestId('button');
        const usernameInput = getByPlaceholderText('Username');
        const passwordInput= getByPlaceholderText('Password');

        //This is a failed test due to lack of implementation
        fireEvent.change(usernameInput, { target: { value: 'abcd' } });
        fireEvent.change(passwordInput, { target: { value: '1234' } });

        expect(button).not.toBeDisabled();

        fireEvent.click(button);
    });

    it('should set username when login button is clicked', () => {
        const setUser = jest.fn();
        const mockContextValue = { setUser, user: null, clearUser: jest.fn() };

        // Set the return value of the useUserContext hook
        useUserContext.mockReturnValue(mockContextValue);

        const { getByPlaceholderText, getByTestId } = render(
            <LoginPage />
        );

        const usernameInput = getByPlaceholderText('Username');
        const passwordInput = getByPlaceholderText('Password');
        const loginButton = getByTestId('button');

        fireEvent.change(usernameInput, { target: { value: 'abcd' } });
        fireEvent.change(passwordInput, { target: { value: '1234' } });

        fireEvent.click(loginButton);

        expect(setUser).toHaveBeenCalledWith([{ favId: 0, password: '1234', username: 'abcd' }]);
    });
});

//! Mock a success, and make sure full functionality works

//! Mock a failure, and display a message to the user

//! Ensure the correct format and data is being sent if the user logs in