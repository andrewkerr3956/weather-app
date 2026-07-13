import { useState } from 'react';
import logoImg from '../../../assets/images/logo.svg';
import styles from './Header.module.css';

const Header = () => {
    const [unitDropdownActive, setUnitDropdownActive] = useState(false);

    return (
        <header id="main-header" className={styles.header}>
            <picture>
                <img src={logoImg} alt="WeatherNow Logo" />
            </picture>
            <button onClick={() => setUnitDropdownActive(!unitDropdownActive)}>
                Units
            </button>
            {unitDropdownActive && (
                <menu className={styles.unitDropdownMenu}>
                    <div className={styles.unitDropdownGroup} aria-roledescription='Groups the temperature unit controls'>
                        <strong className={styles.unitDropdownTitle}>Temperature</strong>
                    </div>
                    <hr />
                </menu>
            )}
        </header>
    )
};

export default Header;