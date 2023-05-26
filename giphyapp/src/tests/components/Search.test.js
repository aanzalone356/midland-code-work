import React from "react";
import { render, fireEvent} from "@testing-library/react";
import Search from "../../components/Search";
import { useSearchContext } from "../../context/SearchContext";
import { useFavoritesContext } from "../../context/FavoritesContext";
import { useQuery } from "react-query";


jest.mock('../../context/SearchContext', () => ({ 
    useSearchContext: jest.fn(),
}));

jest.mock('../../context/FavoritesContext', () => ({
    useFavoritesContext: jest.fn(),
}));

jest.mock('react-query', () => ({
    ...jest.requireActual('react-query'),
    useQuery: jest.fn(),
}));   

describe('SearchPage', () => {
    //
    // beforeEach(() => {
    //     useSearchContext.mockReturnValue({
    //         searchResults: [],
    //         clearSearchResults: jest.fn(),
    //         setSearchResults:  jest.fn(),
    //     })
    //     useFavoritesContext.mockReturnValue({
    //         favorites: [],
    //         addFavorite: jest.fn(),
    //         removeFavorite: jest.fn(),
    //     })
    //     useQuery.mockReturnValue({
    //         isLoading: false,
    //         error: null,
    //         isSuccess: true,
    //         data: [
    //             {
    //                 gif_id: '123',
    //                 title: 'funny cat',
    //                 url: 'https://giphy.com/gifs/funny-cat',
    //             },
    //         ],
    //     });
    // })

    it('Should return a gify array of Corn', () => {
        //
        const setSearchResults = jest.fn();
        useSearchContext.mockReturnValue({
            searchResults: [],
            clearSearchResults: jest.fn(),
            setSearchResults,
        });
        useFavoritesContext.mockReturnValue({
            favorites: [],
            addFavorite: jest.fn(),
            removeFavorite: jest.fn(),
        });
        useQuery.mockReturnValue({
            isLoading: false,
            error: null,
            isSuccess: true,
            data: [
                {
                    gif_id: '123',
                    title: 'Corn',
                    url: 'https://giphy.com/gifs/Corn',
                },
            ],
        });
        //
        const { getByPlaceholderText, getByTestId } = render(<Search />);

        const searchTermInput = getByPlaceholderText('Search a Gif!');
        const searchButton = getByTestId('Search');

        fireEvent.change(searchTermInput, {target: {value: 'Corn'}});

        const useStateSpy = jest.spyOn(React, 'useState');
        const setUrl = jest.fn();
        useStateSpy.mockImplementation((init) => [init, setUrl]);

        fireEvent.click(searchButton);

        expect(setUrl).toHaveBeenCalled("&q=Corn&rating=g");
    });

    it('Should add a HA HA Funny gif to favorites', () => {
        //
        const setSearchResults = jest.fn();
        useSearchContext.mockReturnValue({
            searchResults: [],
            clearSearchResults: jest.fn(),
            setSearchResults:  jest.fn(),
        });
        useFavoritesContext.mockReturnValue({
            favorites: [],
            addFavorite: jest.fn(),
            removeFavorite: jest.fn(),
        });
        useQuery.mockReturnValue({
            isLoading: false,
            error: null,
            isSuccess: true,
            data: [
                {
                    gif_id: '123',
                    title: 'HA HA Funny',
                    url: 'https://giphy.com/gifs/HA-HA-Funny',
                },
            ],
        });
        //
        const { getByPlaceholderText, getByTestId } = render(<Search />);

        const searchTermInput = getByPlaceholderText('Search a Gif!');
        const searchButton = getByTestId('Search');
        
        fireEvent.change(searchTermInput, {target: {value: 'HA HA Funny'}});

        const useStateSpy = jest.spyOn(React, 'useState');
        const setUrl = jest.fn();
        useStateSpy.mockImplementation(() => [url, setUrl]);
        
        fireEvent.click(searchButton);

        expect(setUrl).toHaveBeenCalled();

    })
});