import type { StudentType } from "@/@types/StudentType"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { instance } from "@/hooks/instance"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useState, type FormEvent } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

const Create = () => {
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    const [firstname, setFirstname] = useState<string>("")
    const [lastname, setLastname] = useState<string>("")
    const [age, setAge] = useState<string>("")
    const [study, setStudy] = useState<string>("")
    const [region, setRegion] = useState<string>("")

    const createStudents = useMutation({
        mutationFn:(body:StudentType) => instance().post("students", body),
        onSuccess:() => {
            toast("Created", {
                description:"Qo'shildi!!!",
                position:"top-center"
            })
            queryClient.invalidateQueries({queryKey: ['students']})
            setTimeout(() => {
                navigate(- 1)
            }, 800)
        }
    })

    function handleCreateStudent(e: FormEvent<HTMLFormElement>){
        e.preventDefault()
        const data = {firstname, lastname, age, study, region}
        createStudents.mutate(data)
    }

  return (
    <form onSubmit={handleCreateStudent} autoComplete="off" className="w-[700px] p-5 rounded-lg bg-slate-800 mx-auto mt-8 ">
        <div className="flex justify-between items-center mb-5">
              <button type="button" onClick={() => navigate(-1)} className="cursor-pointer bg-slate-500 py-1 px-3 rounded-md text-white hover:scale-[1.1] duration-500">Back</button>
              <h2 className="font-bold text-[22px] text-white text-center">Student Create</h2>
            <Button className="cursor-pointer hover:scale-[1.1] duration-500" variant={"outline"}>Save</Button>
        </div>
        <div className="flex justify-between items-center">
            <div className="w-[45%] space-y-4">
                <Input value={firstname} onChange={(e) => setFirstname(e.target.value)} className="text-white" placeholder="Firstname"/>
                <Input value={lastname} onChange={(e) => setLastname(e.target.value)} className="text-white" placeholder="Lastname"/>
                <Input value={age} onChange={(e) => setAge(e.target.value)} className="text-white" placeholder="Age"/>
            </div>
            <div className="w-[45%] space-y-3">
                <Input value={study} onChange={(e) => setStudy(e.target.value)} className="text-white" placeholder="Study"/>
                <Input value={region} onChange={(e) => setRegion(e.target.value)} className="text-white" placeholder="Region"/>
            </div>
        </div>
    </form>
  )
}

export default Create