import { useUser } from '@auth0/nextjs-auth0/client';
import { client } from "../../lib/client";
import Header from '../../components/Header';
import Link from 'next/link';
import Head from 'next/head';

import { useState, useEffect } from 'react';

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

export default function insuranceId({ insurance }){
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
    const [content, setContent] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const loadReviews = async () => {
      const res = await fetch(`/api/get-reviews?productId=${insurance.id}`);
      const data = await res.json();
      setReviews(data);
    };
    loadReviews();
  }, [insurance.id]);

  const handleSubmit = async () => {
    await fetch('/api/reviews', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
		  content,
		  productId: insurance.id
	  }),
    });
    setContent('');
    location.reload(); // シンプルな再読み込み
  };
  return(
    <div>
      <Head>
        <title>保険ページ - こんにちは。</title>
        <meta name="description" content="Auth0認証を使ったNext.jsアプリ" />
    <meta name="robots" content="noindex , nofollow" />
      </Head>
      {!user ? (
        <>

          <h1>こんにちは。autodealです。まずはログインしよう</h1>
          <Link href="/api/auth/login">ログイン</Link>
        </>
      ) : (
        <>
          <h1>ログインできました。こんにちは, {user.name}</h1>
          <Link href="/api/auth/logout">ログアウト</Link>
          <br />
          <Link href="/protected">会員ページにいく</Link>
          <br />
          <Link href="/reviews">口コミページへ</Link>
        </>
      )}
	<Header />
	<div id="contet-wrap">
	<main id="contet-main">
	<section>
		   <div>
      <ul>
          <li key={insurance.id}>
          <p>{insurance.publishedAt}</p>
            <p>{insurance.title}</p>
          </li>
      </ul>
    </div>
		<div class="detail" key={insurance.id}>
			<h3>{insurance.title}</h3>
			<div class="detail-img"><img src={insurance.icon.url} /></div>
			<div class="detail-text">
				<div
        			dangerouslySetInnerHTML={{
       			   __html: `${insurance.text}`,
        		}}
      			/>
			</div>
		</div>
	</section>
	<section>
		<div class="campaign">
			<h3>キャンペーン</h3>
			<div>{insurance.campaign}</div>
		</div>
	</section>
	<section>
		<div class="range">
			<h3>保険範囲</h3>
			<div>{insurance.range}</div>
		</div>
	</section>
	<section>
		<div class="review">
			<div class="review-head">
			<h3>最近の利用者のレビュー</h3>
			</div>
			<div class="review-items">
		      <ul>
		        {reviews.map((r) => (
   			    <li key={r.id}>
	        	    <div class="detail-img"><img src={insurance.icon.url} /></div>
					<div class="detail-text">
							 <strong>{r.user_name}</strong>{r.created_at}<br />{r.content}
					</div>
  		        </li>
       			 ))}
      		</ul>
			{user && (
        	<>
          	<textarea value={content} onChange={(e) => setContent(e.target.value)} />
       		<button onClick={handleSubmit}>投稿</button>
      		</>
    		)}
			</div>
			<div class="review-more"><div class="more-button">全ての口コミを表示</div></div>
		</div>
	</section>
	<section>
		<div class="faq">
			<div class="faq-head">
			<h3>よくある質問</h3>
			<p>いただいた質問に保険会社の担当スタッフが直接答えます。</p>
			</div>
			<div class="faq-items">
			{insurance.faq.map((faq,id) => (
				<div key={id} class="faq-item">
				<div>{faq.question}</div>
				<div>{faq.answer}</div>
				</div>
			))}
			</div>
			<div class="faq-more"><div class="more-button">その他のよくある質問を見る</div></div>
		</div>
	</section>
	</main>
	<div id="contet-side">
	</div>
	</div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({endpoint:"insurance"});
  const paths = data.contents.map((content) => `/insurance/${content.id}`);
  return { paths , fallback: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "insurance", contentId:id});
  
  return {
    props: {
      insurance:data,
    },
  };
};
