import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { faTruck, faRotateLeft, faHouseChimney } from '@fortawesome/free-solid-svg-icons';
import images from '../../assets/images';
import ProductSort from '../../components/ProductSort';

const cx = classNames.bind(styles);
function Home() {
    return (
        <div className={cx('wrapper')}>
            <div style={{ backgroundImage: `url(${images.homeBackground})` }} className={cx('slider', 'block')}>
                <p className={cx('fs-1')}>SUPER SALE HAPPY BIRTHDAY</p>
                <p className={cx('sub-title', 'bold')}>Apple Watch Series 5</p>
                <p className={cx('fs-1')}>Discount of 50$ from September 15 to September 31</p>
            </div>
            <div className={cx('block', 'main-product', 'row', 'gx-5')}>
                <div className={cx('main-product-item', 'col-4')}>
                    <Link to='/cellphones'>
                        <div
                            style={{ backgroundImage: `url(${images.mainProduct1})` }}
                            className={cx('main-product-item-background')}
                        ></div>
                        <div className={cx('main-product-item-name')}>
                            <p className={cx('bold', 'fs-1')}>Cell Phones</p>
                            <p>Discount 30%</p>
                        </div>
                    </Link>
                </div>
                <div className={cx('main-product-item', 'col-4')}>
                    <Link to='/laptops'>
                        <div
                            style={{ backgroundImage: `url(${images.mainProduct2})` }}
                            className={cx('main-product-item-background')}
                        ></div>
                        <div className={cx('main-product-item-name')}>
                            <p className={cx('bold', 'fs-1')}>Laptops</p>
                            <p>Discount 10%</p>
                        </div>
                    </Link>
                </div>
                <div className={cx('main-product-item', 'col-4')}>
                  <Link to='/furniture'>
                        <div
                            style={{ backgroundImage: `url(${images.mainProduct3})` }}
                            className={cx('main-product-item-background')}
                        ></div>
                        <div className={cx('main-product-item-name')}>
                                <p className={cx('bold', 'fs-1')}>Furniture</p>
                                <p>Discount 20%</p>
                        </div>
                  </Link>
                </div>
            </div>
            <div className={cx('hot-product', 'block')}>
                <p className={cx('title')}>HOT PRODUCTS</p>
                <ProductSort path={'category/smartphones'} property="rating" sort={-1} numinline={4} maxshow={4} />
            </div>
            <div className={cx('hot-product', 'block')}>
                <p className={cx('title')}>BEST SELLER</p>
                <ProductSort path={'category/laptops'} property="rating" sort={-1} numinline={4} maxshow={4} />
            </div>
            <div className={cx('policy', 'block', 'row', 'gx-5')}>
                <div className={cx('policy-item', 'col-4', 'text-center')}>
                    <div className={cx('policy-item-icon')}>
                        <FontAwesomeIcon icon={faTruck} />
                    </div>
                    <h5 className={cx('fs-2', 'bold')}>Worldwide Shipping</h5>
                    <p className={cx('policy-content')}>Deliver the goods within 30 days.</p>
                </div>
                <div className={cx('policy-item', 'col-4', 'text-center')}>
                    <div className={cx('policy-item-icon')}>
                        <FontAwesomeIcon icon={faRotateLeft} />
                    </div>
                    <h5 className={cx('fs-2', 'bold')}>Free Return</h5>
                    <p className={cx('policy-content')}>Check the goods before paying.</p>
                </div>
                <div className={cx('policy-item', 'col-4', 'text-center')}>
                    <div className={cx('policy-item-icon')}>
                        <FontAwesomeIcon icon={faHouseChimney} />
                    </div>
                    <h5 className={cx('fs-2', 'bold')}>1 Year Warranty</h5>
                    <p className={cx('policy-content')}>1 Change 1 all products of Apple.</p>
                </div>
            </div>
        </div>
    );
}

export default Home;
