import Image from "next/image";

const Home = () => {
  return (
    <>
      <p>welcome to my blog!</p>
      <Image src="/images/logo.gif" width={300} height={300} alt="logo" />
    </>
  );
};

export default Home;
