import type { NextPage, GetStaticProps, GetStaticPropsResult, GetStaticPropsContext } from 'next';
import { createClient, Entry } from 'contentful';
import RecipeCard from '../components/RecipeCard';

interface IProps {
   recipes: Entry<any>[];
};

const Recipes: NextPage<IProps> = ({ recipes }) => {
   // console.log('list of recipes', recipes);

   return (
      <div className="recipe-list" >
         {recipes.map(recipe => (
            <RecipeCard key={recipe.sys.id} recipe={recipe} />
         ))}

         <style jsx>{`
            .recipe-list {
               display:grid;
               grid-template-columns: 1fr 1fr;
               grid-gap: 20px 60px;
            }
         `}</style>
      </div >
   );
};

export const getStaticProps: GetStaticProps = async () => {

   const client = createClient({
      space: process.env.CONTENTFUL_SPACE_ID || "",
      accessToken: process.env.CONTENTFUL_ACCESS_KEY || ""
   });

   const res = await client.getEntries({
      content_type: 'recipes'
   });

   return {
      props: {
         recipes: res.items
      }
      // , revalidate: 3000
   };
};


export default Recipes;
