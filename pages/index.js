export default function Home() {
import Link from 'next/link';
import Head from 'next/head';

	import Header from '../components/Header';

  return (
    <div>
      <Head>
        <title>ホーム - こんにちは。</title>
        <meta name="description" content="Auth0認証を使ったNext.jsアプリ" />
    <meta name="robots" content="noindex , nofollow" />
      </Head>
	<Header />
	<main>
	<section>
		<h3>サービスの魅力</h3>
		<div class="appeal">
			<div>魅力１</div>
		</div>
	</section>
	<section>
		<h3>保険サービス</h3>
		<div class="service">
			<div class="service-item">
				<div class="service-item-img">img</div>
				<div class="service-item-text">証券サービス</div>
			</div>
			<div class="service-item">
				<div class="service-item-img">img</div>
				<div class="service-item-text">証券サービス</div>
			</div>
			<div class="service-item">
				<div class="service-item-img">img</div>
				<div class="service-item-text">証券サービス</div>
			</div>
		</div>
	</section>
	<section>
		<h3>目的の保険をさがす</h3>
		<div class="insurance">
			<Link href="/insurance" class="insurance-item">
				<div class="insurance-item-img">img</div>
				<div class="insurance-item-text">
					<div class="insurance-item-title">自動車・バイクの保険</div>
					<div class="insurance-item-subtitle">自動車の保険自動車の保険自動車の保険自動車の保険
					自動車の保険自動車の保険自動車の保険自動車の保険自動車の保険自動車の保険</div>
				</div>
			</Link>
			<div class="insurance-item">
				<div class="insurance-item-img">img</div>
				<div class="insurance-item-text">
					<div class="insurance-item-title">住まいの保険</div>
					<div class="insurance-item-subtitle">自動車の保険自動車の保険自動車の保険自動車の保険
					自動車の保険自動車の保険自動車の保険自動車の保険自動車の保険自動車の保険</div>
				</div>
			</div>
			<div class="insurance-item">
				<div class="insurance-item-img">img</div>
				<div class="insurance-item-text">
					<div class="insurance-item-title">旅行の保険</div>
					<div class="insurance-item-subtitle">自動車の保険自動車の保険自動車の保険自動車の保険
					自動車の保険自動車の保険自動車の保険自動車の保険自動車の保険自動車の保険</div>
				</div>
			</div>
		</div>
	</section>
	<section>
		<h3>おすすめのエージェント</h3>
		<div class="agent">
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
  return { props: {} };
};
