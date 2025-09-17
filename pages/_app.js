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

// 正しい呼び出し例
console.log(formatCommon("YYYY/MM/DD HH:mm")(new Date()));

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
