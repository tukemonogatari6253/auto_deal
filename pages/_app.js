// pages/_app.js
import { UserProvider } from '@auth0/nextjs-auth0/client';
import './style.css';
import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';

dayjs.locale(ja);

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
