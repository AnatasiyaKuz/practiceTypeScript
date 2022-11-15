import { useState } from "react"
import { IProduct } from "../modules"

interface ProductProps {
    product: IProduct
}

export function Product({ product }: ProductProps) {

    const [details, setDetails] = useState(false);

    const btnBgClass = details ? 'bg-blue-300' : 'bg-yellow-300';
    const btnClasses = ['py-2 px-4 border', btnBgClass];

    return (
        <div className="border py-2 px-4 flex flex-col items-center mb-2">
            <img src={product.image} className="w-1/6" alt={product.title} />
            <p>{product.title}</p>
            <p className="font-bold">{product.price}</p>
            <button className={btnClasses.join(' ')} onClick={() => setDetails(!details)}>
                {details ? 'Hide Details' : 'Show Details'}
            </button>
            {details && <div>
                <p>{product.description}</p>
                <p>Rate: <span style={{fontWeight:'bold'}}>{product.rating.rate}</span></p>
            </div>}
        </div>
    )
}