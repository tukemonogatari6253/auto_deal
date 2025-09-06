import { useUser } from '@auth0/nextjs-auth0/client';
import { client } from "../../lib/client";

import Link from 'next/link';
import Head from 'next/head';

export default function insuranceId({ insurance }){
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  
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
			 	   <header>
		<div class="rogo">ロゴmann</div>
		<div class="header-contents">
			<ul>
				<li><Link href="/api/auth/login">サービスとは</Link></li>
				<li><Link href="/api/auth/login">保険カテゴリ</Link></li>
				<li><Link href="/api/auth/login">保険会社一覧</Link></li>
			</ul>
			<div class="login-menu">
				<div class="register"><Link href="/api/auth/login">新規会員登録</Link></div>
				<div class="login"><Link href="/api/auth/login">ログイン</Link></div>
			</div>
		</div>
		
	</header>
	<main>
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
		<div class="faq">
			<h3>よくある質問</h3>
			<p>いただいた質問に保険会社が直接答えます。</p>
			<div>{insurance.range}</div>
		</div>
	</section>
	</main>
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
