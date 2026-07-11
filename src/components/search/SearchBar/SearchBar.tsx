import type { InputHTMLAttributes } from "react";
import magnifyingGlassImg from '../../../assets/images/icon-search.svg'
import styles from './SearchBar.module.css';

interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> { }

export default function SearchBar(props: SearchBarProps) {
    return (
        <div className={styles.searchBar}>
            <span className={styles.searchBarIcon}>
                <img src={magnifyingGlassImg} alt="Magnifying Glass" height={'100%'} width={'100%'} />
            </span>
            <input
                {...props}
                className={styles.searchBarInput}
            />
        </div>
    )
}