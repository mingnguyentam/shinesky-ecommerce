import styles from './ProductSort.module.scss';
import classNames from 'classnames/bind';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import { useDispatch} from 'react-redux';
import { addToCart } from '../../slices/cartSlide';

const cx = classNames.bind(styles);

function ProductSort({ path, property, sort = 1, numinline, maxshow, brand }) {
    const dispath = useDispatch();

    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const loadingArr = [];
    for (let i = 0; i < maxshow; i++) {
        loadingArr.push(i);
    }
    const handleAddCart = (product) => {
        dispath(addToCart(product));
    };
    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/${path}`)
            .then((res) => {
                setProductList(res.data.products.sort((a, b) => sort * (a[property] - b[property])));
                setLoading(false);
            })
            .catch(() => {
                setProductList([]);
                setLoading(true);
            });
    }, [property, sort]);
    return (
        <div className={cx('row', 'gx-5', 'product-wrapper')}>
            {loading &&
                loadingArr.map((item, index) => (
                    <div key={index} className={cx('loading-icon', 'rotate-circle', `col-${12 / numinline}`)}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </div>
                ))}
            {!loading &&
                productList.map((item, index) => {
                    if (index < maxshow) {
                        return (
                            <div key={index} className={cx('product-item', `col-${12 / numinline}`)}>
                                <div className={cx('product-item-wrapper')}>
                                    <div className={cx('product-item-img-wrapper')}>
                                        <img
                                            className={cx('product-item-img')}
                                            src={item.thumbnail}
                                            alt="product-images"
                                        />
                                    </div>
                                    <h4 className={cx('product-item-name', 'text-center')}>{item.title}</h4>
                                    <span className={cx('product-item-price', 'bold', 'text-center')}>
                                        ${item.price}
                                    </span>
                                    <div className={cx('add-cart')}>
                                        <button className={cx('add-cart-btn')} onClick={() => handleAddCart(item)}>
                                            Add to cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    }
                })}
        </div>
    );
}

export default ProductSort;
