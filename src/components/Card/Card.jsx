import {cardWrapper} from './card.module.css'

export const Card = ({courseName, startDate, finishDate})=>{
    return (
        <div className={cardWrapper}>
            <h3>{courseName}</h3>
            <span>{startDate}</span>
            <span>{finishDate}</span>
            <button>Consultar detalles</button>
        </div>
    )
}