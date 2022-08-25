export const baseUrl = 'https://restcountries.com/v3.1';

export const regions = [
  {
    name: 'All',
    endpoint: '/all',
  },
  {
    name: 'Americas',
    endpoint: '/region/ame',
  },
  {
    name: 'Oceania',
    endpoint: '/region/oceania',
  },
  {
    name: 'Europe',
    endpoint: '/region/europe',
  },
  {
    name: 'Africa',
    endpoint: '/region/africa',
  },
  {
    name: 'Asia',
    endpoint: '/region/asia',
  },
];

export const theme = localStorage.theme;
