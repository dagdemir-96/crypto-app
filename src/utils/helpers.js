//% değerli formatlama 

import { Terminal } from "lucide-react";

export const formatPercentage = (percentage) => {
    //vermelmezse bu değerleri döndür
    if (!percentage) return "N/A";

    //SAYININ MUTLAK DEĞERİNİ AL VE . DAN SONRA İKİ BASAMAK OLSUN
    const formatted = Math.abs(percentage).toFixed(2);

    //işaretini belirle + ve - şeklinde
    const sign = percentage >= 0 ? "+" : "-";

    //işaretini ekle ve return et

    return `${sign}${formatted}%`;

};

//büyük sayıyı formatlama
export const formatBigNumber = (number) => {

    if (!number) return "N/A";

    if (number > 1e12) {
        return "$" + (number / 1e12).toFixed(2) + "T";
    } else if (number > 1e9) {
        return "$" + (number / 1e9).toFixed(2) + "Mr";
    }else if(number > 1e6){
        return "$" + (number / 1e6).toFixed(2) + "Mn";

    }else{
        return "$" +  number.toLocaleString();
    }
};

//fiyatı formatlayan fonk.

export const formatPrice= (price)=>{
    if(!price)
        return"N/A";

     if(price < 0.01){
        return "$" + price.toFixed(6);

     }else if(price < 1){
        return "$" + price.toFixed(4);

     }else if(price < 100){
        return "$" + price.toFixed(2);
     }else{
        return "$" + price.toLocaleString();
     }
}

//tarihi formatlama

export const formatDate = (days,timetamp)=>{
    const date =new Date(timetamp);

    if(days===1){
        //bir gün seçili ise saat ve dakika 
        return date.toLocaleTimeString("tr",{
            hour:"2-digit",
            minute:"2-digit",
        })
    }else if(days===7){
        //7 gün seçili ise gün ay ve gün ismi
        return date.toLocaleDateString("tr",{
            day:"2-digit",
            month:"2-digit",
            weekday:"short",
        });
    }else {
        //7 günden büyük ise gün ay
        return date.toLocaleDateString("tr",{
            day:"2-digit",
            month:"2-digit",
        })
    }
}