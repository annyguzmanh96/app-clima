import { Card } from './Card';
import { Carousels } from './Carousels';
import style from './MainContent.module.css';
import { Photo } from './Photo';
import { Planet } from './Planet';
import { SearchBarCards } from './SearchBarCards';

export function MainContent (){
    return(   
        <div className={style.containerAll}>
            <div className={style.cardySearchBar}>
                <div className={style.card}>
                    <Card />
                </div>
                <div className={style.searchBar}>
                    <SearchBarCards/>
                </div>
            </div>
            <div className={style.carousel}>
                <Carousels />
            </div>
            <div>
                <Photo />
            </div>   
            <div>
                <Planet />
            </div>   
        </div>
    )
}