import axios from 'axios';

export async function getMicroCMSData() {
  // "your-endpoint" をmicroCMSで設定したAPIエンドポイント名に置き換えてください（例: blog）
  const res = await axios.get(`https://${process.env.MICROCMS_SERVICE_DOMAIN2}.microcms.io/api/v1/your-endpoint`, {
    headers: {
      'X-MICROCMS-API-KEY': process.env.MICROCMS_API_KEY2
    }
  });
  return res.data;
}
