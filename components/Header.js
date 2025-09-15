import { useUser } from '@auth0/nextjs-auth0/client';
import { client } from "lib/client";

import Link from 'next/Link';

export default function Header(){
	  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return(
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
  )
}
