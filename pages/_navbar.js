import Head from "next/head";
import { MainContainer } from "./index"

export default function NavBar () {
  return (
    <>
      <Head>
        <title>Next.js with Styled Components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainContainer>
        <h1>Home</h1>
        <h1>Hello World</h1>
      </MainContainer>
    </>
  );
};
