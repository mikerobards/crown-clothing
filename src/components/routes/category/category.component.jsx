import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router';

import ProductCard from '../../product-card/product-card.component';

import { CategoriesContext } from '../../../context/categories.context';

import './category.styles.scss';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [categoriesMap, category]);

    return (
        <div className='category-container'>
            {
                products && products.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))
            }
        </div>
    )
};

export default Category;