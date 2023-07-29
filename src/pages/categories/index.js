import React from 'react';
import MainLayout from '../../../components/Layouts/MainLayout';
import { useRouter } from 'next/router';

const CategoryDetailsPage = () => {
    const router = useRouter();

    return (
        <div>
            <h2>This is Category Details Page: {router.query.productId}</h2>
        </div>
    );
};

export default CategoryDetailsPage;



CategoryDetailsPage.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            {page}
        </MainLayout>
    )
}