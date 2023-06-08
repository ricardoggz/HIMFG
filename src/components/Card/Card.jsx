import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import {
    cardWrapper,
    cardButton,
    cardTitle,
    cardIframe
} from './card.module.css'

const modal = withReactContent(Swal)
export const Card = ({courseName, startDate, finishDate, coursePDF})=>{
    return (
        <div className={cardWrapper}>
            <h3 className={cardTitle}>
                {courseName}
            </h3>
            <span>{startDate}</span>
            <span>{finishDate}</span>
            <button className={cardButton} onClick={()=>openModal({
                courseName, startDate, finishDate, coursePDF
            })}>
                Consultar detalles
            </button>
        </div>
    )
}
const openModal = ({courseName, startDate, finishDate, coursePDF})=>(
    modal.fire({
        title: courseName,
        html:
        <div className={cardWrapper}>
            <span>Programa:</span>
            <iframe
                src={coursePDF}
                className={cardIframe}
            />
            <a href='#' className={cardButton}>
                Ingresar
            </a>
        </div>,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        width:1000
    })
)