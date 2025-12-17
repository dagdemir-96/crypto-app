import { useCallback, useEffect, useMemo, useState } from "react";
import CoinCard from "../../components/home/coin-card";
import InfoList from "../../components/home/info-list";
import RefreshButton from "../../components/home/refresh-button";
import RefreshInfo from "../../components/home/refresh-info";
import Searchbar from "../../components/home/searchbar";
import Loader from "../../components/loader";
import coinApi from "../../services/coinApi";
import Error from "../../components/error";

const Home = () => {

  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);//yenilendiğinde gelen loading
  const [error, setError] = useState(null);
  const [coins, setCoins] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  //api dan coin verilerini çeken fonk.
  const fetchCoins = useCallback((isRefreshing=false) => {
    if (isRefreshing){
      setRefreshing(true);
    }else{
      setLoading(true)
    }
    setLoading(true);

    coinApi
      .getTopCoins()
      .then((data) => {
        setCoins(data);
        setLastUpdated(new Date());
        setError(null);//hata varsa hata mesajı ekrandan temizle

      })
      .catch((err) => setError(err.message))
      .finally(() => {setLoading(false),setRefreshing(false)});
  },[]);
  //component ekrana gelince verileri çek 
  useEffect(() => {
    fetchCoins();
  }, []);

  //console.log(lastUpdated.toLocaleTimeString);
//otomatik. yenileme 
useEffect(()=>{
  const id =setInterval(()=>{
    fetchCoins(true); 
  },30000);

  //component ekranda ayrıldığında intervalı temizke
  return()=> clearInterval(id);
},[]);

//coin veya aratılan kelime her değiştiğinde filtrele

const filteredConis=useMemo(()=>{
  //bir şey aratılmadıysa filtreleme yapma
  if(!searchTerm.trim()) return coins;

  //aratılan terimi küçük harfe çevir
  const term= searchTerm.toLowerCase();

  //filtreleme yap

  return coins.filter((coin)=> 
    coin.name.toLowerCase().includes(term) ||
  coin.symbol.toLowerCase().includes(term))
},[coins, searchTerm]);

//hata durumunda

if(error) return <Error message={error} refetch={fetchCoins}/>

  return (
    <div className="space-y-6">
      {/*başlık */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Kripto Para Piyasası</h1>
          <p className="text-gray-600 dark:text-gray-400 mt-1">En popüler kripto para birimi</p>
        </div>
        {/*arama ve yenilemme */}
        <div className="flex items-center gap-5">
          <Searchbar onSearch={setSearchTerm}/>
          <RefreshButton  fetchCoins ={()=>fetchCoins(true)}/>
        </div>
      </div>
      {/*bilgiler */}

      <InfoList total={coins.length} lastUpdate={lastUpdated?.toLocaleTimeString() ?? "Henüz güncellenmedi"} />

      {/* listeleme*/}

      {loading && coins.length > 1 ? (<Loader />) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredConis.map((coin) => (
            <CoinCard key={coin.id} coin={coin} />
          ))}
        </div>
      )}

      <RefreshInfo show={refreshing}/>
    </div>
  );
};

export default Home;
