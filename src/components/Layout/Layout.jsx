import { Navigation } from "@/components"
export const Layout = ({children})=>{
    return (
        <>
            <Navigation/>
            {children}
        </>
    )
}