import React from "react";
import Head from "next/head";
const RandomPage = ({ now, description }) => {
  return (
    <div>
      <Head>
        <title>{now}</title>
        <meta name={now} content={description}></meta>
      </Head>
      <h1>
        This page reflects what time it is in miliseconds when first opened -{" "}
        {now}
      </h1>
    </div>
  );
};

export default RandomPage;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          randomPage: "1",
        },
      },
    ],
    fallback: false,
  };
}

// export function getServerSideProps() {
//   return {
//     props: {
//       now: 'test title',
//       description: "Test",
//     },
//   };
// }

export function getStaticProps() {
  console.log(
    "connecting to db with username -> ",
    process.env.DB_USERNAME + " and, password -> ",
    process.env.DB_PASSWORD
  );
  return {
    props: {
      now: "test title",
      description: "Test",
    },
  };
}
