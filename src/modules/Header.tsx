import { Button } from "@/components/ui/button"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const navigate = useNavigate()

  return (
    <div className="p-5 bg-slate-800 flex items-center justify-between">
        <h2 className="font-bold text-[25px] text-white">Students</h2>
        <Button onClick={() => navigate("/create")} className="cursor-pointer hover:scale-[1.1] duration-500" variant={"outline"}>
            Create
        </Button>
    </div>
  )
}

export default Header 