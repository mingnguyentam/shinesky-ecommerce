import classNames from 'classnames/bind';
import styles from './Contacts.module.scss';
import images from '../../assets/images';
const cx = classNames.bind(styles);

function Contacts() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('contact-wrapper', 'block')}>
                <div className={cx('contact-item', 'text-center')}>
                    <div className={cx('contact-item-img')}>
                        <img src={images.lienhe1} alt="Ha-Noi-Office" />
                    </div>
                    <div className={cx('contact-item-city')}>HA NOI</div>
                    <div className={cx('contact-item-address', 'bold')}>
                        Số 121 đường Cầu Giấy
                        <br />
                        Quận Cầu Giấy, Thành Phố Hà Nội
                    </div>
                    <div className={cx('contact-item-info')}>
                        + SĐT: 0996693396
                        <br />+ Email: vuloc1810@gmail.com
                    </div>
                </div>
                <div className={cx('contact-item', 'text-center')}>
                    <div className={cx('contact-item-img')}>
                        <img src={images.lienhe2} alt="Ho-Chi-Minh-Office" />
                    </div>
                    <div className={cx('contact-item-city')}>HO CHI MINH</div>
                    <div className={cx('contact-item-address', 'bold')}>
                        6A3, Phạm Ngũ Lão
                        <br />
                        Quận 1, Thành phố Hồ Chí Minh
                    </div>
                    <div className={cx('contact-item-info')}>
                        + SĐT: 091.345.2502
                        <br />+ Email: vuloc11A3MĐA@gmail.com
                    </div>
                </div>
            </div>
            <div className={cx('map-wrapper', 'block')}>
                <p className={cx('title')}>STORE LOCATION ON THE MAP</p>
                <div className={cx('map')}>
                    <iframe
                        className={cx('map-frame')}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8858.70173270601!2d105.83772665588455!3d21.007653359756837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac76ccab6dd7%3A0x55e92a5b07a97d03!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIEjDoCBO4buZaQ!5e0!3m2!1svi!2s!4v1635151693471!5m2!1svi!2s"
                        allowFullScreen=""
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contacts;
