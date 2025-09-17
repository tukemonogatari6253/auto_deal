// pages/_app.js
import { UserProvider } from '@auth0/nextjs-auth0/client';
import './style.css';
import dayjs from 'dayjs';
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import 'dayjs/locale/ja';

dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.locale('ja');

export const formatCommon =
  (format) =>
  (date) => {
    return dayjs.utc(date).tz("Asia/Tokyo").format(format);
  };



export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
