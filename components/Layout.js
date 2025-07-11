import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';
// Chatbot feature temporarily disabled
// import Chatbot from './Chatbot';

export default function Layout({ children, title = 'MSQ IT - Managed Services Provider' }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="MSQ IT specialises in supporting small to medium-sized businesses across Brisbane, helping them simplify technology and remove the complexity from IT." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        {/* Chatbot temporarily disabled */}
        {/* <Chatbot /> */}
      </div>
    </>
  );
}
