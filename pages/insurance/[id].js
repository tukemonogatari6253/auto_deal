import { client } from "../../lib/client";

export default function insuranceId({ insurance }){
  return(
        <main>
      <h1>{insurance.title}</h1>
      <p>{insurance.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${insurance.text}`,
        }}
      />
    </main>
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
  };
};
