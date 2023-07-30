import Link from 'next/link';
import React from 'react';
import PCBuilderCategoriesDisplay from './PCBuilderCategoriesDisplay';

const PCBuilderCategories = ({ allCategories }) => {
    console.log("allCategories : ", allCategories);
    return (
        <div>
            <div className=' col-md-7 mx-auto d-flex flex-column bg-secondary shadow-lg rounded-3 p-3 my-3'>
                {allCategories.map((category) =>
                    <PCBuilderCategoriesDisplay
                        key={category.id}
                        category={category}
                    ></PCBuilderCategoriesDisplay>
                )}

            </div>
        </div>
    );
};

export default PCBuilderCategories;