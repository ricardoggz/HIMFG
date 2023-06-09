import Link from 'next/link'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { formatDate } from "@/helpers"
import {
    cardIframe,
    cardDate,
    cardWrapper,
    cardButton,
    disabledLink
} from './card.module.css'

const modal = withReactContent(Swal)
export const openModal = ({course})=>(
    modal.fire({
        title: course.course_name,
        html:
        <div className={cardWrapper}>
            {
                !course.course_pdf ?
                <span>Programa no disponible</span>
                :
                <>
                    <span>Programa:</span>
                    <iframe
                    src={course.course_pdf}
                    className={cardIframe}
                    />
                </>
            }
            <span className={cardDate}>
                Inicia: {formatDate(course.course_start_date)}
            </span>
            <span className={cardDate}>
                Termina: {formatDate(course.course_finish_date)}
            </span>
            <Link
                href='#'
                className={!course.course_url ? disabledLink:cardButton}
            >
                Ingresar
            </Link>
        </div>,
        showCloseButton: true,
        showCancelButton: false,
        showConfirmButton: false,
        width:1000
    })
)