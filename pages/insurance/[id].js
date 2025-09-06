import { client } from "../../libs/client";

export default function insuranceId({ insurance }){
  return(
        <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.body}`,
        }}
      />
    </main>
  );
}

export const getStaticPaths = async () => {
  const data = await client.get({endpoint:"insurance"});
  const paths = data.contents.map((content) => '/insurance/${content.id}');
  return { paths , fallnack: false };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "insurance", contentId:id});
  
  retuen {
    props: {
      insurance:data,
  },
};
