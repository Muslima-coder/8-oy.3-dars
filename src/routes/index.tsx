import { Create, Home, More } from "@/pages"
import { Route, Routes } from "react-router-dom"

const PageRoute = () => {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/create' element={<Create/>}/>
            <Route path='/student/:id' element={<More/>}/>
        </Routes>
    )
}

export default PageRoute