import { useState } from "react";
import axios from "axios"
import { useNavigate } from "react-router-dom";

const AddStock = (props) => {

    const [stockSymbol, setStockSymbol] = useState("");
    const [quantityBought, setQuantityBought] = useState(0);
    const [price, setPrice] = useState(0)
    const navigate = useNavigate();
    //const [currentPrice, setCurrentPrice ] = useState(0)

    const getQuote = async (symbol) => {
        try {
            fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=cjuc9q9r01qlodk32pngcjuc9q9r01qlodk32po0`).then(response => {
            return response.json();
            }).then(data => setPrice(data.c))
        }catch(error){
            console.log(error)
        }
    }


    const handleSubmit = async (e) => {
        e.preventDefault()
        //console.log(e)
        try{
            let newstocks = props.to.stocks;
            console.log(newstocks)
            newstocks.push({
                "stock": stockSymbol,
                "pricebought": price,
                "quantity": quantityBought}
            )
            console.log(newstocks)

            console.log(props.to.id)
            await fetch(`http://localhost:8000/Users/${props.to.id}/`, {
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    stocks: newstocks
                })
              }).then((res) => {
                console.log(res)
            })

            let res = await axios.get(`http://localhost:8000/Users/${props.to.id}`);
            const datafound = res.data
            
            navigate("/dashboard", {state : {datafound}})

        }
        catch(error){
            console.log(error)
        }
    }   

    return ( 
        <div className="addstock">
            <h2>Add Stocks</h2>
            <form>
                <label>Stock Symbol</label><br/>
                <input type="text" value={stockSymbol} onChange={(e) => {
                    setStockSymbol(e.target.value)
                    getQuote(e.target.value)
                }}/><br/>
                <label>Quantity bought</label><br/>
                <input type="number" value={quantityBought} onChange={(e) => setQuantityBought(e.target.value)}/><br/>
                <label>Price bought at</label><br/>
                <h3>${price}</h3>
                {/* <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/><br/> */}
                <button onClick={(e) => {handleSubmit(e)} } disabled={!quantityBought || !stockSymbol || !price}>Add To Portfolio</button>
            </form>

        </div>

     );
}
 
export default AddStock;