import Link from 'next/link';
import React from 'react';

const PCBbuilderSection = ({ category }) => {
    console.log("PC Builder category", category);
    return (

        <div className='d-flex justify-content-between my-1'>
            {/* <Link className=' btn btn-primary text-white text-decoration-none' href={`/categories/${category?.id}`}>
                {category?.title}
            </Link>
            <button className='btn btn-success'>Choose</button> */}
        </div>
    );
};

export default PCBbuilderSection;