import { Card } from "@/components"
import { useFetch } from "@/hooks"
import { coursesContainer } from './oferta.module.css'

const AcademicOffer = ()=>{
    const { data, loading } = useFetch({
        url:'https://courses-rest-api-hospital.vercel.app/api/courses/all-courses'
    })
    return (
        <>
            <h1>Oferta académica</h1>
            <div className={coursesContainer}>
                {
                    !loading && data ?
                    data.map((course)=>(
                        <Card
                            key={course.course_id}
                            course={course}
                        />
                    ))
                    :
                    <span>Cargando oferta académica</span>
                }
            </div>
        </>
    )
}
export default AcademicOffer