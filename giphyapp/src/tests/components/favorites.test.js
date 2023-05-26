import React from 'react';
import {render} from '@testing-library/react'
import FavoritesPage from '../../components/FavoritesPage';
import { useFavoritesContext } from '../../context/FavoritesContext';
import { useUserContext } from '../../context/UserContext';
import '@testing-library/jest-dom';

jest.mock('../../context/FavoritesContext', () => ({
    useFavoritesContext: jest.fn(),
}))

jest.mock('../../context/UserContext', () => ({
    useUserContext: jest.fn(),
}))

describe('Favorites', () => {
    beforeEach(() => {
        useUserContext.mockReturnValue({
            user: null,
            setUser: jest.fn(),
            clearUser: jest.fn(),
        });
        useFavoritesContext.mockReturnValue({
            favorites: [],
            addFavorite: jest.fn(),
            removeFavorite: jest.fn(),
            clearFavorite: jest.fn(),
        });
    });

    it('Should be in the doc', () => {
        const favorites = [{
            key: '123',
            title: 'fav Gif', 
            gif_id: '785', 
            url: 'http://gifhy.com/q=corn', 
            removeFavorite: jest.fn(),                    
            isFavorite: true,
        }]
        useUserContext.mockReturnValue({
            user: null,
            setUser: jest.fn(),
            clearUser: jest.fn(),
        });
        useFavoritesContext.mockReturnValue({
            favorites,
            addFavorite: jest.fn(),
            removeFavorite: jest.fn(),
        });

        const {getByTestId} = render(<FavoritesPage/>)

        const favoritesMenu = getByTestId('favorites');

        expect(favoritesMenu).toBeInTheDocument();
    })
})