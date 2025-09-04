import { useUser } from '@auth0/nextjs-auth0/client';
import { client } from "../lib/client";

import Link from 'next/link';
import Head from 'next/head';


export default function Home({agent}) {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
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
        {agent.map((agent) => (
          <li key={agent.id}>
            <p>{agent.title}</p>
          </li>
        ))}
      </ul>
    </div>
		<h3>自動車の保険商品</h3>
		<div class="product">
			<div class="product-item">
				<div class="product-item-img">img</div>
				<div class="product-item-text">
					<div>保険商品</div>
					<div>自動車の保険自動車の保険自動車の保険自動車の保険
自動車の保険自動車の保険自動車の保険自動車の保険自動車の保険自動車の保険</div>
					<div class="product-item-review">
						<div>星</div>
						<div>人数</div>
					</div>
				</div>
			</div>
			<div class="product-item">
				<div class="product-item-img">img</div>
				<div class="product-item-text">
					<div>保険商品</div>
					<div>自動車の保険自動車の保険自動車の保険自動車の保険
自動車の保険自動車の保険自動車の保険自動車の保険自動車の保険自動車の保険</div>
					<div class="product-item-review">
						<div>星</div>
						<div>人数</div>
					</div>
				</div>
			</div>
			<div class="product-item">
				<div class="product-item-img">img</div>
				<div class="product-item-text">
					<div>自動車の保険自動車の保険自動車の保険自動車の保険
自動車の保険自動車の保険自動車の保険自動車の保険自動車の保険自動車の保険</div>
					<div>東京</div>
					<div class="product-item-review">
						<div>星</div>
						<div>人数</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section>
		<h3>おすすめのエージェント</h3>
		<div class="agent">
			{agent.map((agent) => (
				
			<div class="agent-item">
				<div class="agent-item-img"><img src={css_bg} /></div>
				<div class="agent-item-text" key={agent.id}>
					<div>{agent.title}</div>
					<div>{agent.erea}</div>
					<div class="agent-item-review">
						<div>星</div>
						<div>人数</div>
					</div>
				</div>
			</div>
				))}
			<div class="agent-item">
				<div class="agent-item-img">img</div>
				<div class="agent-item-text">
					<div>エージェント名</div>
					<div>東京</div>
					<div class="agent-item-review">
						<div>星</div>
						<div>人数</div>
					</div>
				</div>
			</div>
			<div class="agent-item">
				<div class="agent-item-img">img</div>
				<div class="agent-item-text">
					<div>エージェント名</div>
					<div>東京</div>
					<div class="agent-item-review">
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
	  const data = await client.get({ endpoint: "agent" });
const css_bg={
    "background":`url(${agent.id}) 0 0 no-repeat`,
    "backgroundSize":"contain",
    "height":"10vw"
  }
  return { props: {agent: data.contents,} };
};
