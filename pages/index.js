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
	  <style>
        h1 {
            color: red;
            }
        p{
            background-color: yellow;
        }
    </style>
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
		<div>ロゴmann</div>
		<div>
			<ul>
				<li><Link href="/api/auth/login">サービスとは</Link></li>
				<li><Link href="/api/auth/login">保険カテゴリ</Link></li>
				<li><Link href="/api/auth/login">保険会社一覧</Link></li>
			</ul>
			<div>
				<div><Link href="/api/auth/login">新規会員登録</Link></div>
				<div><Link href="/api/auth/login">ログイン</Link></div>
			</div>
		</div>
		
	</header>
	<main>
	<section>
		<h3>サービスの魅力</h3>
		<div>
			<div>魅力１</div>
		</div>
	</section>
	<section>
		<h3>保険サービス</h3>
		<div>
			<div>
				<div>img</div>
				<div>証券サービス</div>
			</div>
		</div>
	</section>
	<section>
		<h3>目的の保険をさがす</h3>
		<div>
			<div>
				<div>img</div>
				<div>
					<div>自動車・バイクの保険</div>
					<div>自動車の保険自動車の保険自動車の保険自動車の保険
					自動車の保険自動車の保険自動車の保険自動車の保険自動車の保険自動車の保険</div>
				</div>
			</div>
		</div>
	</section>
	<section>
		<h3>おすすめのエージェント</h3>
		<div>
			<div>
				<div>img</div>
				<div>
					<div>エージェント名</div>
					<div>東京</div>
					<div>
						<div>星</div>
						<div>人数</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	</main>
    </div>

  );
}

export const getServerSideProps = async () => {
  return { props: {} };
};
