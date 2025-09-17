import type { StudentType } from "@/@types/StudentType"
import { Button } from "@/components/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"



export function CustomTable({data}:{data:StudentType[]}){
    const navigate = useNavigate()
    const queryClient = useQueryClient()

    function handleClickMore(id:string | undefined){
        queryClient.invalidateQueries({queryKey:['student-more']})
        navigate(`/student/${id}`)
    }

    return(
    <Table>
    <TableHeader>
        <TableRow>
        <TableHead className="w-[100px] font-bold text-[16px]">ID</TableHead>
        <TableHead className="text-start font-bold text-[16px] ">First Name</TableHead>
        <TableHead className="text-start font-bold text-[16px] ">Last Name</TableHead>
        <TableHead className="text-center font-bold text-[16px]">Age</TableHead>
        <TableHead className="text-center font-bold text-[16px]">Study</TableHead>
        <TableHead className="text-center font-bold text-[16px]">Action</TableHead>
        </TableRow>
    </TableHeader>
    <TableBody>
        {data.map((item, index) => (
        <TableRow>
        <TableCell className="font-bold cursor-pointer text-[14px]">#{index + 1}</TableCell>
        <TableCell className="font-medium">{item.firstname}</TableCell>
        <TableCell className="font-medium">{item.lastname}</TableCell>
        <TableCell className="font-medium text-center">{item.age}</TableCell>
        <TableCell className="font-medium text-center">{item.study}</TableCell>
        <TableCell className="font-medium text-center">
            <Button onClick={() => handleClickMore(item.id)} className="bg-slate-900 cursor-pointer hover:scale-[1.1] duration-500">More</Button>
        </TableCell>
        </TableRow>
        ))}
    </TableBody>
    </Table>
    )
}