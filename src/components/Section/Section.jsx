import {sectionWrapper} from './section.module.css'

export const Section = ({children})=>{
    return (
        <section className={sectionWrapper}>
            {children}
        </section>
    )
}