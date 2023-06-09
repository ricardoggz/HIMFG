import { useContext } from 'react'
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'
import { CourseContext } from '@/contexts'
import {
    cardWrapper,
    cardButton,
    cardTitle,
    cardIframe
} from './card.module.css'

const modal = withReactContent(Swal)
export const Card = ({course})=>{
    const {login} = useContext(CourseContext)
    return (
        <div className={cardWrapper}>
            <h3 className={cardTitle}>
                {course.course_name}
            </h3>
            <span>{course.course_start_date}</span>
            <span>{course.course_finish_date}</span>
            <div>
                <button className={cardButton} onClick={()=>openModal({course})}>
                    Consultar detalles
                </button>
                <button
                    className={cardButton}
                    onClick={()=>login(course)}>
                    Inscripción
                </button>
            </div>
        </div>
    )
}
const openModal = ({course})=>(
    modal.fire({
        title: course.course_name,
        html:
        <div className={cardWrapper}>
            <span>Programa:</span>
            <iframe
                src={course.course_pdf}
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