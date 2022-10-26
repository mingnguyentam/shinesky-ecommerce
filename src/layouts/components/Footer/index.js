import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('footer-info', 'row', 'gx-5')}>
                <div className={cx('col-4')}>
                    <div className={cx('foter-info-item')}>
                        <h2 className={cx('footer-info-title')}>SHINE SKY</h2>
                        <p className={cx('footer-info-des')}>
                            SHINE SKY is a subsidiary of LOC PHAT GROUP, leading in the largest retail chain in Vietnam.
                            SHINE SKY will bring customers the best experience.
                        </p>
                    </div>
                </div>
                <div className={cx('col-4')}>
                    <div className={cx('foter-info-item')}>
                        <h2 className={cx('footer-info-title')}>INFORMATION AND GUIDELINES</h2>
                        <p className={cx('footer-info-des')}>
                            <a className={cx('footer-info-link')} href="#">
                                Delivery and payment
                            </a>
                            <a className={cx('footer-info-link')} href="#">
                                Warranty
                            </a>
                            <a className={cx('footer-info-link')} href="#">
                                Receive goods and exchange
                            </a>
                            <a className={cx('footer-info-link')} href="#">
                                Open the box and get the gift
                            </a>
                            <a className={cx('footer-info-link')} href="#">
                                Privacy Policy
                            </a>
                        </p>
                    </div>
                </div>
                <div className={cx('col-4')}>
                    <div className={cx('foter-info-item')}>
                        <h2 className={cx('footer-info-title')}>STORE LOCATION</h2>
                        <p className={cx('footer-info-des')}>
                            <p>Số 207a, Trần Duy Hưng</p>
                            <p>No. 108, Tran Hung Dao</p>
                            <p>No. 201, Pham Ngu Lao, District 1</p>
                            <p>No. 04, Nguyen Hue, District 1</p>
                        </p>
                    </div>
                </div>
            </div>
            <div className={cx('copy-right')}>
                <p className={cx('fs-4', 'text-center')}>Copyright 2021 © Copyright belongs to LOC PHAT GROUP</p>
            </div>
        </div>
    );
}

export default Footer;
