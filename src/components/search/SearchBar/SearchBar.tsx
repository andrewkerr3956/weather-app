import { useEffect, useMemo, useState, type InputHTMLAttributes } from "react";
import magnifyingGlassImg from '../../../assets/images/icon-search.svg'
import styles from './SearchBar.module.css';
import type { GeocodeSearchResult } from "../../../services/geocode.service";
import geocodeService from "../../../services/geocode.service";

interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
    onSearch: (q: string) => void;
    onSubmit: (q: any) => void;
}

export default function SearchBar({ onSearch, onSubmit, ...props }: SearchBarProps) {
    const [searchVal, setSearchVal] = useState('');
    const [searchData, setSearchData] = useState(null);

    const [searchResultsDropdown, setSearchResultsDropdown] = useState(true);
    const [searchResults, setSearchResults] = useState<GeocodeSearchResult[]>([]);

    const handleGetSearchSuggestions = async () => {
        try {
            const data = await geocodeService.search(searchVal);
            setSearchResults(data?.results || []);
        } catch (error) {
            console.error(error);
        }
    }

    const handleSearchSubmit = async() => {
        // let data = searchData;
        // if(!data?.latitude || !data?.longitude || !data?.name) {
        //     // Get the coordinate data first before submitting the data, which requires coordinates to work correctly.
        //     const geocodeData = await geocodeService.search(searchVal);
        //     setSearchData(geocodeData?.results?.[0]);
        //     data = geocodeData?.results?.[0];
        // }
        const searchQuery = {
            name: searchData?.name || searchVal,
            latitude: searchData?.latitude,
            longitude: searchData?.longitude
        };
        onSubmit(searchQuery);
    };

    useEffect(() => {
        // if (searchVal?.length > 0) {
        //     handleGetSearchSuggestions();
        //     return;
        // }
        // setSearchResults([]);
        // setSearchResultsDropdown(false);
    }, [searchVal]);

    return (
        <search className={styles.searchBarWrapper}>
            <form method='GET' action={handleSearchSubmit} className={styles.searchBarForm}>
                <div className={styles.searchBar}>
                    <span className={styles.searchBarIcon}>
                        <img src={magnifyingGlassImg} alt="Magnifying Glass" height={'100%'} width={'100%'} />
                    </span>
                    <input
                        {...props}
                        type='search'
                        className={styles.searchBarInput}
                        value={searchVal}
                        onChange={(e) => setSearchVal(e.target.value)}
                    />
                    {searchResultsDropdown && (
                        <div className={styles.searchBarResults}>
                            <p>This is a fun test</p>
                        </div>
                    )}
                </div>
                <button type="submit" className={`btn ${styles.searchBtn}`}>
                    Search
                </button>
            </form>
        </search>
    )
}