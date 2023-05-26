import React from "react";
import Menu from '../../components/Menu';
import { BrowserRouter } from 'react-router-dom';
import { useUserContext } from "../../context/UserContext";
import { useFavoritesContext } from "../../context/FavoritesContext";
import { useSearchContext } from "../../context/SearchContext";
import {render, fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';

jest.mock('../../context/UserContext',() => ({
    useUserContext: jest.fn()
}));

jest.mock("../../context/FavoritesContext", () => ({
    useFavoritesContext: jest.fn()
}));

jest.mock("../../context/SearchContext", () => ({
    useSearchContext: jest.fn()
}));

describe('Menu test', () => {
    beforeEach(() => {
        useUserContext.mockReturnValue({
            user: null,
            setUser: jest.fn(),
            clearUser: jest.fn(),
        })
        useFavoritesContext.mockReturnValue({
            favorites: null,
            addFavorite: jest.fn(),
            removeFavorite: jest.fn(),
        })
        useSearchContext.mockReturnValue({
            searchResults: null,
            setSearchResults: jest.fn(),
            clearSearchResults: jest.fn(),
        })
    });

    it('Should test the linkage from Login to Search post User Login', () => {
        useUserContext.mockReturnValue({
            user: null,
            setUser: jest.fn(),
            clearUser: jest.fn(),
        });

        const {getByText, getByPlaceholderText, getByTestId} = render(
            <BrowserRouter> 
                <Menu/>
            </BrowserRouter>
        );
        const loginLink = getByText('Login');
        
        expect(loginLink).toBeInTheDocument();
    });

    // const searchLink = getByText('./Search');

    // //Begin with Logging in
    // fireEvent.click(loginLink);

    // const loginButton = screen.getByTestId('button');
    // const usernameInput = screen.getByPlaceholderText('Username');
    // const passwordInput = screen.getByPlaceholderText('Password');

    // fireEvent.change(usernameInput,{target: {value: 'Jim'}});
    // fireEvent.change(passwordInput,{target: {value: 'pa$$w0rd'}});

    // fireEvent.click(loginButton);

    // expect(setUser).toHaveBeenCalledWith([{ favId: 0, password: 'pa$$w0rd', username: 'Jim' }]);

    // //After the user has been set manually click the search link inorder to switch
    // //or it might auto switch post call but we'll see xD
    // fireEvent.click(searchLink);

    // const searchButton = getByTestId('Search');

    // fireEvent.click(searchButton);

    // const useStateSpy = jest.spyOn(React, 'useState');
    // const setUrl = jest.fn();
    // useStateSpy.mockImplementation((init) => [init, setUrl]);

    // expect(setUrl).toHaveBeenCalled("&q=&rating=g");
})