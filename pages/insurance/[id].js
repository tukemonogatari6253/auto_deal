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
        {insurance.map((insurance) => (
          <li key={insurance.id}>
          <p>{insurance.publishedAt}</p>
            <p>{insurance.title}</p>
          </li>
        ))}
      </ul>
    </div>
		<h3>自動車の保険商品</h3>
		<div class="product">
			{insurance.map((insurance) => (
			<div class="product-item">
				<div class="product-item-img"><img src={insurance.icon.url} /></div>
				<div class="product-item-text" key={insurance.id}>
					<div>{insurance.title}</div>
					<div>{insurance.description}</div>
					<div class="product-item-review">
						<div>星</div>
						<div>人数</div>
					</div>
				</div>
			</div>
				))}
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
