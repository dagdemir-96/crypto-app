import { LoaderCircle } from "lucide-react"


const Loader = ({desings}) => {
  return (
    <div className={`flex justify-center my-[200px] ${desings}`}>
      <LoaderCircle className="animate-spin text-blue-500 size-8"/>
    </div>
  )
}

export default Loader
