import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
// import Styles from './404.css';

const ErrorPage = () => {

    const router = useRouter();

    setTimeout(() => {
        router.push("/");
    }, 4000);

    return (
        <div className=' d-flex justify-content-center text-center my-5'>
            <div>
                <h1 className=' fs-1 my-1  fw-bolder'>404</h1>
                <h3>We are sorry! the page you are searching for does not exist.</h3>
                <Link className=' btn btn-primary my-3 text-center' href="/">Goback to Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;