import css from "./SearchBox.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter,selectNameFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
    const filters = useSelector(selectNameFilter);
    const dispatch = useDispatch();
    return (
        <div className={css.searchWrapper}>
            <p>Find contacts by name</p>  
            <input
                className={css.searchInput}
                type="text"
                value={filters}
                onChange={e => dispatch(changeFilter(e.target.value))} />
        </div>
    );
}