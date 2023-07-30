import Link from 'next/link';
import React from 'react';

const PCBuilderCategoriesDisplay = ({ category }) => {
    return (
        <div className='d-flex justify-content-between my-2'>
            {/* <h2>PCBuilderCategoriesDisplay</h2> */}

            <button className=' btn btn-primary'>
                <Link className=' text-white text-decoration-none' href={`/categories/${category?.id}`}> {category?.title} </Link>
            </button>

            <button className=' btn btn-primary'>Choose</button>
        </div>
    );
};

export default PCBuilderCategoriesDisplay;