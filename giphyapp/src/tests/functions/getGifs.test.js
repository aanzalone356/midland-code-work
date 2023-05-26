import getMyGifs from '../../functions/getMyGifs';
import fetchMock from 'jest-fetch-mock';

fetchMock.enableMocks();

describe('getMyGifs', () => {
    beforeEach(() => {fetch.resetMocks()});

    it('Should get an array of watermelon gifs', async () => {
        const expectedGifs = [{
            gif_id: '0123',
            title: 'random',
            url: 'https://giphy.com/gifs/random',
        },{
            gif_id: '7643',
            title: 'watermelon',
            url: 'https://giphy.com/gifs/watermelon',
        }];
        fetch.mockResponseOnce(JSON.stringify({
            data: expectedGifs.map(({ gif_id, title, url }) => ({
            id: gif_id,
            title,
            images: {
              original: { url },
            },
          })),
        }));

        const output = await getMyGifs('&q=watermelon');

        expect(output).toEqual(expectedGifs)
    });
})