// pages/_app.js
import { UserProvider } from '@auth0/nextjs-auth0/client';
import './style.css';
import dayjs from 'dayjs';
import timezone from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);
dayjs.extend(timezone);

export const formatCommon =
  (format: string) =>
  (date: string | Date | number): string => {
    return dayjs.utc(date).tz("Asia/Tokyo").format(format) as string;
  };


dayjs.locale(ja);
console.log(formatCommon(new Date));

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
