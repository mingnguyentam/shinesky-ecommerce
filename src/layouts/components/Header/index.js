import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { faMagnifyingGlass, faShoppingBag, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import images from '../../../assets/images';
import publicRoutes from '../../../routes';

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { removeToCart } from '../../../slices/cartSlide';

const cx = classNames.bind(styles);

function Header() {
    const dispath = useDispatch();

    const [page, setPage] = useState(0);
    const [searchInput, setSearchInput] = useState('');
    const [searchValue, setSearchValue] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const cartList = useSelector((state) => state.cart);
    const inputRef = useRef();
    const searchResult = useRef();
    const handlePage = (param) => {
        setPage(param);
    };
    const handleChange = (e) => {
        setSearchInput(e.target.value);
    };
    const handleHideResult = (e) => {
        const { target } = e;
        if (!searchResult.current.contains(target)) {
            setShowResult(false);
        }
    };
    const handleremoveToCart = (product) => {
        dispath(removeToCart(product));
    };
    useEffect(() => {
        // Because API will return results when params > 2
        if (searchInput.length < 2) {
            setSearchValue([]);
            return;
        }
        axios
            .get('https://dummyjson.com/products/search', {
                params: {
                    q: searchInput,
                },
            })
            .then((res) => {
                setSearchValue(res.data.products);
            })
            .catch(() => {
                setSearchValue([]);
            });
        document.addEventListener('click', handleHideResult);
        return () => {
            document.removeEventListener('click', handleHideResult);
        };
    }, [searchInput]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header-control')}>
                <Link className={cx('header-logo')} to="/">
                    <img className={cx('logo-img')} src={images.logo} alt="logo" />
                </Link>
                <div ref={searchResult} className={cx('header-search')}>
                    <form className={cx('search-form')}>
                        <input
                            onChange={handleChange}
                            className={cx('search-input')}
                            placeholder="Search"
                            value={searchInput}
                            ref={inputRef}
                            onFocus={(e) => setShowResult(true)}
                        />
                        <button>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </form>
                    <div className={cx('search-value')}>
                        {showResult && searchValue.length > 0 && (
                            <ul className={cx('search-value-list')}>
                                {searchValue.map((item, index) => {
                                    if (index <= 4) {
                                        return (
                                            <li className={cx('search-value-item')}>
                                                <img
                                                    className={cx('search-value-img')}
                                                    src={item.thumbnail}
                                                    alt="product-thumbnail"
                                                />
                                                <p className={cx('search-value-title')}>{item.title}</p>
                                            </li>
                                        );
                                    }
                                })}
                            </ul>
                        )}
                    </div>
                </div>
                <div className={cx('header-auth')}>
                    <div className={cx('header-cart', 'bold')}>
                        Cart
                        <div className={cx('cart-icon-number', 'text-center')}>{cartList.length}</div>
                        <FontAwesomeIcon className={cx('cart-icon')} icon={faShoppingBag} />
                        <div className={cx('cart-list')}>
                            {cartList.length == 0 && 'No product in cart'}
                            {cartList.map((item, index) => (
                                <div className={cx('cart-item')}>
                                    <img className={cx('cart-item-img')} src={item.thumbnail} alt="product-img" />
                                    <p className={cx('cart-item-name')}>{item.title}</p>
                                    <p className={cx('cart-item-price')}>${item.price}</p>
                                    <button
                                        className={cx('cart-item-btn')}
                                        onClick={() => {
                                            handleremoveToCart(item);
                                        }}
                                    >
                                        <FontAwesomeIcon icon={faXmark} />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                    <btn className={cx('register-btn', 'bold', 'btn')}>Register</btn>
                    <btn className={cx('login-btn', 'bold', 'btn')}>Login</btn>
                </div>
            </div>
            <nav className={cx('header-navbar')}>
                <ul className={cx('header-nav-list')}>
                    {publicRoutes.map((item, index) => (
                        <li
                            onClick={() => handlePage(index)}
                            key={index}
                            className={cx('header-nav-item', 'bold', 'text-center')}
                        >
                            <Link
                                className={cx('header-nav-item-link', `${page === index ? 'active' : ''}`)}
                                to={item.path}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}

export default Header;
