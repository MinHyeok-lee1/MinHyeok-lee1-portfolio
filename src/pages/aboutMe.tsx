import Head from "next/head";
import Layout from "../components/layout";

export default function AboutMe() {
  return (
    // <Layout>
    //   <Head>
    //     <title>minhyeok.lee1 Portfolio</title>
    //     <meta name="description" content="오늘도 코딩" />
    //     <meta name="viewport" content="width=device-width, initial-scale=1" />
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <h1 className="text-4xl font-bold sm:text-6xl">자기소개</h1>
    //   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 m-6 py-10 w-full">
    //     아이엠그라운드 자기소개 하기
    //   </div>
    // </Layout>
       <>
       <Layout>
         <div className="flex flex-col items-center justify-center min-h-screen px-5 mb-10">
           <Head>
             <title>minhyeok.lee1 Portfolio</title>
             <meta name="description" content="오늘도 코딩" />
             <meta
               name="viewport"
               content="width=device-width, initial-scale=1"
             />
             <link rel="icon" href="/favicon.ico" />
           </Head>
 
           <h1 className="text-2xl font-bold sm:text-4xl">
             저에게 연락이 하고 싶나요?
             <span className="pl-4">minhyeok.lee1@gmail.com</span>
           </h1>
         </div>
       </Layout>
     </>
  );
}
