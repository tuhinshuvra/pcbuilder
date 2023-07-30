import AllCategories from '@/components/CategoriesShow/AllCategories';
import PCBuilderCategories from '@/components/CategoriesShow/PCBuilderCategories';
import MainLayout from '@/components/Layouts/MainLayout';
import Link from 'next/link';
import React from 'react';

const PCBbuilderRoute = ({ allCategories }) => {
    return (
        <div className=''>
            <AllCategories allCategories={allCategories}></AllCategories>
            <PCBuilderCategories allCategories={allCategories} />
        </div>
    );
};

export default PCBbuilderRoute;

PCBbuilderRoute.getLayout = function getLayout(page) {
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