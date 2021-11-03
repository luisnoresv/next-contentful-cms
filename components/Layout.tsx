import { NextPage } from 'next';
import Link from 'next/link';

const Layout: NextPage = ({ children }) => {
   return (
      <div className="layout">
         <header>
            <Link href="/">
               <a>
                  <h1>
                     <span>Just Add</span>
                     <span>Recipes</span>
                  </h1>
                  <h2>Spread The Joy of life 🤤</h2>
               </a>
            </Link>
         </header>

         <div className="page-content">
            {children}
         </div>

         <footer>
            <p>Copyright 2021 Just Add Recipes 😋</p>
         </footer>
      </div>
   );
};

export default Layout;