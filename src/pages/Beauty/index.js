import classNames from 'classnames/bind';
import styles from './Beauty.module.scss';
import axios from 'axios';
import ProductSort from '../../components/ProductSort';
import { useState, useEffect, useRef } from 'react';
const cx = classNames.bind(styles);

function Beauty() {
    const [listBrand, setListBrand] = useState([]);
    const [property, setProperty] = useState('id');
    const [sort, setSort] = useState(1);
    const handleSoftProduct = (e) => {
        if (e.target.value === 'Newest') {
            setProperty('id');
            setSort(1);
        }
        if (e.target.value === 'PriceLow') {
            setProperty('price');
            setSort(1);
        }
        if (e.target.value === 'PriceHight') {
            setProperty('price');
            setSort(-1);
        }
    };
    useEffect(() => {
        axios.get('https://dummyjson.com/products/category/skincare').then((res) => {
            let brandName = [];
            for (let i = 0; i < res.data.products.length; i++) {
                if (brandName.indexOf(res.data.products[i].brand) === -1) {
                    brandName.push(res.data.products[i].brand);
                }
            }
            setListBrand(brandName);
        });
    }, []);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('shop-big-img-box')}>
                <div className={cx('shop-big-img')}></div>
                <div className={cx('shop-big-img-box-content')}>
                    <div className={cx('shop-big-img-content', 'text-center')}>
                        <div className={cx('shop-big-img-content-header')}>
                            <span className={cx('fs-1')}>Big Sale</span>
                        </div>
                        <div className={cx('shop-big-img-content-main', 'bold')}>
                            <span>BLACK FRIDAY</span>
                        </div>
                        <div className={cx('shop-big-img-content-end', 'bold')}>
                            <span>OFF 20% ALL ITEMS</span>
                        </div>
                    </div>
                </div>
            </div>
            <p className={cx('title')}>Beauty</p>
            <div className={cx('product-wrapper', 'row', 'gx-5')}>
                <div className={cx('product-filter', 'col-3')}>
                    <span className={cx('fs-2', 'bold')}>BRAND</span>
                    <ul className={cx('brand-list')}>
                        {listBrand.map((item, index) => (
                            <li className={cx('brand-list-item')}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className={cx('product-list', 'col-9')}>
                    <div className={cx('product-sort', 'text-end')}>
                        <select className={cx('sort-option')} onChange={handleSoftProduct}>
                            <option value="Newest" key="1">
                                Newest
                            </option>
                            <option value="PriceLow" key="2">
                                {' '}
                                Price Low to High
                            </option>
                            <option value="PriceHight" key="3">
                                {' '}
                                Price Hight to Low
                            </option>
                        </select>
                    </div>
                    <div>
                        <ProductSort
                            path={'category/skincare'}
                            numinline={3}
                            maxshow={12}
                            property={property}
                            sort={sort}
                            // Nghiên cứu xử lý nốt sort by brand
                            //brand={'Apple'}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Beauty;
