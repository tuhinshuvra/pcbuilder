import React from 'react';
import CategoriesDisplay from './CategoriesDisplay';

const AllCategories = ({ allCategories }) => {
    // console.log("Categories Show allCategories : ", allCategories);
    return (
        <div>
            {/* <h2>Categories Show Component</h2> */}
            <div className=' d-flex justify-content-evenly'>
                {allCategories?.map((category) =>
                    <CategoriesDisplay
                        key={category.id}
                        category={category}
                    ></CategoriesDisplay>
                )}

            </div>
        </div>
    );
};

export default AllCategories;