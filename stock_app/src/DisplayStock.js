const DisplayStock = (props) => {
    console.log(props.data);
    return ( 
        <div>
            
            {props.data.stocks.map((stock,index) => (
                <div key={index}>
                    <h2>STOCK : {stock.stock}</h2>
                    <h3>PRICE : {stock.pricebought}</h3>
                    <h3>Quantity : </h3>
                </div>
            ))}
            
        </div>
    );
}
 
export default DisplayStock;