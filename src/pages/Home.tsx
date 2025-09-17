import { instance } from "@/hooks/instance"
import { CustomTable, Header } from "@/modules"
import { useQuery } from "@tanstack/react-query"
import { Loader } from 'lucide-react';

const Home = () => {
    const {data:students = [], isLoading} = useQuery ({
        queryKey:['students'],
        queryFn:() => instance().get("/students").then(res => res.data)
    })

  return (
    <div>
        <Header/>
        <div className="w-[1000px] mx-auto mt-5">
            {isLoading ? <Loader/> : <CustomTable data={students}/>}
        </div>
    </div>
  )
}

export default Home