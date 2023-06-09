import { useContext } from 'react'
import Image from 'next/image'
import { openModal } from './openModal'
import { CourseContext } from '@/contexts'
import {
    cardWrapper,
    cardButton,
    cardTitle,
    cardButtons,
    cardImage
} from './card.module.css'

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