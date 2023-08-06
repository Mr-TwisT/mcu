import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  someItems: [
    {
      id: 1,
      name: 'Tony Stark',
      aka: 'Iron Man',
      bio: "Genius inventor Tony Stark continued his father Howard Stark's weaponry business after his parents' untimely deaths and flew it to even greater heights of innovation. While in Afghanistan to demonstrate a new missile for the U.S. military, Stark's convoy came under fire by a terrorist group known as the Ten Rings and he was severely wounded. Taken prisoner by the group, Stark awoke in their headquarters to learn that shrapnel near his heart had nearly cost him his life, but swift action by scientist and fellow prisoner Ho Yinsen—who had inserted a powerful electromagnet in Stark's chest—would prolong it temporarily.",
      posters: [
        'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_02.jpg',
        'https://terrigen-cdn-dev.marvel.com/content/prod/1x/002irm_ons_crd_03.jpg',
      ],
      movies: [
        {
          movie: {
            title: 'Iron Man',
            id: 1,
            poster:
              'https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/iron-man.jpg',
          },
          own_movie: true,
          appearance: 'major appearance',
        },
        {
          movie: {
            title: 'The Incredible Hulk',
            id: 2,
            poster:
              'https://raw.githubusercontent.com/AugustoMarcelo/mcuapi/master/covers/hulk.jpg',
          },
          own_movie: false,
          appearance: 'post-credits',
        },
      ],
    },
  ],
  someInfo: 'qwerty',
  isLoading: true,
};

const cardSlice = createSlice({
  name: 'card',
  initialState,
});

export default cardSlice.reducer;
