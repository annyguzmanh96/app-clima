import { Card } from './Card';
import { Carousels } from './Carousels';
import style from './MainContent.module.css';
import { SearchBar } from './SearchBar';

export function MainContent (){
    return(   
        <div className={style.containerAll}>
            <div className={style.cardySearchBar}>
                <div className={style.card}>
                    <Card />
                </div>
                <div className={style.searchBar}>
                    <SearchBar/>
                </div>
            </div>
            <div className={style.carousel}>
                <Carousels />
            </div>
            
        </div>
    )
}