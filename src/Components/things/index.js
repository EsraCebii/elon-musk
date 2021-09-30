import React,{ useEffect} from "react";
import "./styles.css";
import { useSelector, useDispatch } from 'react-redux';
import { handleChange, decrement, increment, moneyRestart  } from "../../redux/productsSlice";
import Finish from "../Finish";



function Things() {
    const things = useSelector((state) => state.products.items);
    const money = useSelector((state) => state.products.money);
    const dispatch = useDispatch();
    const handleDecrement = (id) => {
        dispatch(decrement(id));

    };
    const handleIncrement = (id) => {
        dispatch(increment(id));
    };
    const [open, setOpen] = React.useState(false)
    const handleOpen = ()=> {
        setOpen(true);
    }
    useEffect(() => {
       if(money === 0 || money < 0){
           handleOpen();
       }
    }, [money]);
    const handleClose = ()=> {
        setOpen(false);
        dispatch(moneyRestart());
        
    }

    return (
        <>
        <Finish handleOpen={handleOpen} handleClose={handleClose} open={open}/>
            <div className="card-group">
                {things.map((item) => (
                    <div className="item text-center" key={item.id}>
                        <img src={item.img} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p> $ {item.price}</p>
                            <div className="row">

                                <div className="col-md-4">
                                    {/* //btn btn-light disabled */}
                                    <button className={item.amount > 0 ? "btn btn-light " : "btn btn-light disabled"}  style={{ marginLeft: 26 }}
                                        onClick={() => handleDecrement(item.id)}
                                    >Sell</button>
                                </div>
                                <div className="col-md-4">
                                    <input
                                        className="number"  onChange={() => handleChange()} value={item.amount} >
                                    </input>
                                </div>
                                <div className="col-md-4">
                                    <button className={money < item.price ? "btn btn-success disabled" : "btn btn-success"}
                                        onClick={() => handleIncrement({ id: item.id, name: item.name, price: item.price, amount: item.amount })}
                                    >Buy</button>

                                </div>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
                  
            { money < 151e6 && (
            <div>

                <div className="receipt" >
                    <h1>Your Receipt</h1>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Product</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                things.map((item, i) => (

                                    item.amount > 0 && (
                                        <tr key={i}>
                                            <td>{item.name}</td>
                                            <td>{item.amount}</td>
                                            <td>{item.price*item.amount}</td>
                                        </tr>)
                                ))
                                    }
                                    
                                </tbody>
                    </table>
                </div>
                

            </div>
            )}
            
        </>


    )

}

export default Things;
