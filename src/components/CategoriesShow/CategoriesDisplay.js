import Link from 'next/link';
import React from 'react';

const CategoriesDisplay = ({ category }) => {
    return (
        <div>
            <button className=' btn btn-primary'>
                <Link className=' text-white text-decoration-none' href={`/categories/${category?.id}`}>
                    {category?.title}
                </Link>
            </button>
        </div>
    );
};

export default CategoriesDisplay;