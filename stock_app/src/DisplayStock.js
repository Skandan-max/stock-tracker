import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getMaxListeners } from "ws";


const DisplayStock =(props) => {

  let stockname = "";

  const getQuote = async (symbol) => {
      try {
          fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=cjuc9q9r01qlodk32pngcjuc9q9r01qlodk32po0`).then(response => {
          return response.json();
          }).then(data => {setPrice([...price,[symbol,data.c]])})
      }catch(error){
          console.log(error)
      }
  }

  const [price, setPrice] = useState([])

  function renderElement(symbol){
    let getans = 0;
    price.forEach((arr) => {
      if(arr[0] == symbol)
        getans = arr[1];
    })
    console.log(getans)
    return getans
    }

  return ( 
        (<div className="displaystock">
          
            { 
            props.data.stocks.map((stock,index) => {
                stockname = stock.stock
                return (
                <div key={index} className="stock-display">
                    <div>
                      <h2>{stock.stock}</h2>
                        <h3>Buying Price : ${stock.pricebought}</h3>
                        <h3>Shares : {stock.quantity}</h3>
                    </div>
  
                    <div>
                      <button onClick={() => getQuote(stock.stock)}>Refresh</button>
                      <p>Current Price: ${renderElement(stock.stock)}</p>
                      <p>Profit/Loss($) : {Math.round(stock.quantity*(renderElement(stock.stock) - stock.pricebought))}</p>
                    </div>
                      
                </div>
                )
            })
            }
            
        </div>)
        )
}
export default DisplayStock;
