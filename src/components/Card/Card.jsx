import { useContext } from 'react'
import Swal from 'sweetalert2'
import Image from 'next/image'
import withReactContent from 'sweetalert2-react-content'
import { formatDate } from '@/helpers'
import { CourseContext } from '@/contexts'
import {
    cardWrapper,
    cardButton,
    cardTitle,
    cardIframe,
    cardButtons,
    cardDate,
    cardImage
} from './card.module.css'

const modal = withReactContent(Swal)
export const Card = ({course})=>{
    const {login} = useContext(CourseContext)
    return (
        <div className={cardWrapper}>
            <figure className={cardImage}>
            <Image
                src={
                    !course.course_image ?
                    `${process.env.BASE_URL_IMAGE}`
                    :
                    course.course_image
                }
                loading='lazy'
                alt='No se pudo cargar la imágen'
                width={1000}
                height={150}
                quality
                />
            </figure>
            <h3 className={cardTitle}>
                {course.course_name}
            </h3>
            <div className={cardButtons}>
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
            <span className={cardDate}>
                Inicia: {formatDate(course.course_start_date)}
            </span>
            <span className={cardDate}>
                Termina: {formatDate(course.course_finish_date)}
            </span>
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