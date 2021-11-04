import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const NotFound: NextPage = () => {
   const router = useRouter();

   useEffect(() => {
      setTimeout(() => {
         router.push('/');
      }, 4000);
   }, [router]);

   return (
      <div className='no-found'>
         <h1>404</h1>
         <h2>Ooops! That page cannot be found 😱</h2>
         <p>Redirecting to the <Link href="/">Homepage</Link> for more recipes...</p>

         <style jsx>{`
        .not-found {
          background: #fff;
          padding: 30px;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          transform: rotateZ(-1deg);
        }
        h1 {
          font-size: 3em;
        }
      `}</style>
      </div>
   );
};

export default NotFound;