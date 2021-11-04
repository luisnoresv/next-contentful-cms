import type { NextPage, GetStaticProps, GetStaticPropsResult, GetStaticPropsContext } from 'next';
import { Entry } from 'contentful';
import RecipeCard from '@components/Recipes/RecipeCard';
import ContentfulService from '@lib/api/contentfulService';

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
   const service = new ContentfulService();

   const recipes = await service.getRecipes();

   return {
      props: {
         recipes
      }
      // , revalidate: 3000
   };
};


export default Recipes;
