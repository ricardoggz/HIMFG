import { Card, Section, Title } from "@/components"
import { useFetch } from "@/hooks"
import { coursesContainer } from './oferta.module.css'

const AcademicOffer = ()=>{
    const { data, loading } = useFetch({
        url:'https://courses-rest-api-hospital.vercel.app/api/courses/all-courses'
    })
    return (
        <Section>
            <Title title='Oferta académica del HIMFG'/>
            <div className={`${coursesContainer} flexContainer`}>
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
        </Section>
    )
}
export default AcademicOffer