import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import MainLayout from '@/components/Layouts/MainLayout';
import AllCategories from '@/components/CategoriesShow/AllCategories';

const HomePage = ({ allCategories }) => {
  // console.log("allCategories : ", allCategories);
  return (
    <div>
      {/* <h2>This is main homepage</h2> */}
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
