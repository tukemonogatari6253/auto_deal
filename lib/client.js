// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'pzdihe48ey',
  apiKey: process.env.API_KEY,
});
