import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';
import Head from 'next/head';

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div>
      <Head>
        <title>ホーム - こんにちは。</title>
        <meta name="description" content="Auth0認証を使ったNext.jsアプリ" />
    <meta name="robots" content="noindex , nofollow" />
      </Head>
      {!user ? (
        <>
        		<div>ロゴ</div>
		<div>
			<ul>
				<li><Link>サービスとは</Link></li>
				<li><Link>保険カテゴリ</Link></li>
				<li><Link>保険会社一覧</Link></li>
			</ul>
			<div>
				<div><Link>新規会員登録</Link></div>
				<div><Link>ログイン</Link></div>
			</div>
		</div>
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
    </div>
  );
}

export const getServerSideProps = async () => {
  return { props: {} };
};
