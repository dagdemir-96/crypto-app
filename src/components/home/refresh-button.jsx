import { RefreshCw } from "lucide-react";


const RefreshButton = ({fetchCoins}) => {

  //console.log("buton render oldu")
  return (
    <button onClick={fetchCoins} className="p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition">
      <RefreshCw className="size-5"/>
    </button>
  )
}

export default RefreshButton;
