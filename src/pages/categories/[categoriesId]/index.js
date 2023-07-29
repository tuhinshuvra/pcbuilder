import Link from 'next/link';
import { useRouter } from 'next/router';

const ProductDetailsPage = ({ category }) => {
    const router = useRouter();
    return (
        <div>
            {/* <h2>This is Category wise product page</h2> */}
            <h2>This is Category wise Product Page: {router.query.categoriesId}</h2>
            {/* <Link className=' btn btn-primary text-decoration-none' href={`/categories/${category?.id}`}>{category?.title}</Link> */}
        </div>
    );
};

export default ProductDetailsPage;