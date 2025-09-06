// libs/client.js
import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: '03lhpimfin',
  apiKey: process.env.MICROCMS_API_KEY,
});
