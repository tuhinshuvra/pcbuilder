import React from 'react';
import CategoriesDisplay from './CategoriesDisplay';
import ProductDetailsPage from '@/pages/categories/[categoriesId]';
import PCBbuilderSection from '@/pages/pcbuilder';

const AllCategories = ({ allCategories }) => {
    // console.log("Categories Show allCategories : ", allCategories);
    return (
        <div>
            {/* <h2>Categories Show Component</h2> */}
            <div className=' d-flex justify-content-evenly'>
                {allCategories.map((category) =>
                    <CategoriesDisplay
                        key={category.id}
                        category={category}
                    ></CategoriesDisplay>
                )}

            </div>
            <div className=' col-10 mx-auto d-flex flex-column  bg-secondary shadow-lg'>
                {allCategories.map((category) =>
                    <PCBbuilderSection
                        key={category.id}
                        category={category}
                    ></PCBbuilderSection>
                )}
            </div>
        </div>
    );
};

export default AllCategories;