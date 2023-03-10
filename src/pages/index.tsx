import { type NextPage } from "next";
import Head from "next/head";

import { Container } from "../components/cards/Card";
import Emoji from "../components/typography/Emoji";
import Heading from "../components/typography/Heading";
import Text from "../components/typography/Text";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Name</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center bg-zinc-50">
        <Container className="w-full max-w-lg text-center">
          <Emoji>🚀</Emoji>
          <Heading>Let&apos;s build!</Heading>
          <Text>
            This code boilerplate is a fully functional starting point with all
            the necessary components and configurations to begin building your
            project.
          </Text>
        </Container>
      </main>
    </>
  );
};

export default Home;
