

const CoinDescription = ({coin}) => {
  return (
    <div className="details-containers whitespace-pre-wrap test-gray-600 dark:text-gray-400">
      {coin.description?.en ? coin.description.en : "Açıklama bulunamadı"}
    </div>
  )
}

export default CoinDescription
