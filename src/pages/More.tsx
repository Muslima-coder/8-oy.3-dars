import type { StudentType } from "@/@types/StudentType"
import { instance } from "@/hooks/instance"
import { useMutation, useQuery } from "@tanstack/react-query"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

const More = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const [studentsMore, setStudentsMore] = useState<StudentType[]>([])

    const {data:studentMore = {}} = useQuery({
        queryKey:["student-more"],
        queryFn:() => instance().get(`/students/${id}`).then(res => res.data)
    })
    console.log(studentMore);

    //Delete
    //   const handleDelete = useMutation({
    //   mutationFn: () => instance().delete(`/students/${id}`),
    //   onSuccess: () => {
    //     navigate("/");
    //   },
    // });

   function handleDelete(id: string) {
    setStudentsMore(data => data.filter(item => item.id !== id))
    setTimeout(() => {
      navigate("/")
    }, 100)
  }

    

  return (
    <div className=" bg-slate-800 w-full flex items-center h-[100vh]">
      <div className="flex flex-col gap-3 !w-[50%]  text-center">
        <p className="font-semibold text-[18px] text-white "><i className="font-normal text-slate-200 text-[16px] ">Id:</i> {studentMore.id}</p>
        <p className="font-semibold text-[18px] text-white "><i className="font-normal text-slate-200 text-[16px] ">Ism:</i> {studentMore.firstname}</p>
        <p className="font-semibold text-[18px] text-white "><i className="font-normal text-slate-200 text-[16px] ">Familiya:</i> {studentMore.lastname}</p>
        <p className="font-semibold text-[18px] text-white "><i className="font-normal text-slate-200 text-[16px] ">Yosh:</i> {studentMore.age}</p>
        <p className="font-semibold text-[18px] text-white "><i className="font-normal text-slate-200 text-[16px] ">O'qiyotgan/o'qigan joy nomi:</i> {studentMore.study}</p>
        <p className="font-semibold text-[18px] text-white "><i className="font-normal text-slate-200 text-[16px] ">Viloyat:</i> {studentMore.region}</p>
      </div>
      <div className="flex items-center gap-15">
        <button onClick={() => navigate('/create')} className="p-2 w-[130px] border-none shadow-lg shadow-slate-300 font-semibold text-[18px] hover:scale-[1.1] duration-500 cursor-pointer bg-green-500 text-white rounded-2xl">Edit</button>
        {/* <button onClick={() => handleDelete.mutate()} className="p-2 w-[130px] border-none shadow-lg shadow-slate-300 font-semibold text-[18px] hover:scale-[1.1] duration-500 cursor-pointer bg-red-500 text-white rounded-2xl">Delete</button> */}
        <button onClick={() => handleDelete(studentMore.id)} className="p-2 w-[130px] border-none shadow-lg shadow-slate-300 font-semibold text-[18px] hover:scale-[1.1] duration-500 cursor-pointer bg-red-500 text-white rounded-2xl">Delete</button>
      </div>
    </div>
  )
}

export default More