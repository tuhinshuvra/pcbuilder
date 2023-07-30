import MainLayout from '@/components/Layouts/MainLayout';
import AllCategories from '@/components/CategoriesShow/AllCategories';

const HomePage = ({ allCategories }) => {
  // console.log("allCategories : ", allCategories);
  return (
    <div>
      <AllCategories allCategories={allCategories} />
    </div>
  );
};

export default HomePage;

HomePage.getLayout = function getLayout(page) {
  return (<MainLayout>{page}</MainLayout>);
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:5000/categories");
  const data = await res.json();
  // console.log("all fetched categories", data);

  return {
    props: {
      allCategories: data,
    },
    revalidate: 10,
  }
}
