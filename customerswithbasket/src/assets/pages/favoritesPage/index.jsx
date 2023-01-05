import React, { useContext } from 'react'
import './index.scss'
import { ModeContext } from '../../../context/dataContext';

const FavoritesPage = () => {
    const { productsData, setProductsData, productsbasket, setProductsbasket } = useContext(ModeContext);

    const handleRemove = (e) => {
        setProductsbasket(productsbasket.filter((element) => element.id !== e.id))
    }

    const emptyCard = (data) => {
        setProductsbasket([])
    }

    return (
        <div>
            <button onClick={() => {
                emptyCard()
            }}>Empty Favorites</button>
            <table>
                <thead>
                    <tr>
                        <th>Products ID</th>
                        <th>Product Name</th>
                        <th>Unit Price</th>
                        <th>Quantity Per Unit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody>
                    {productsbasket && productsbasket.map((e, index) => {
                        return (
                            <tr key={index}>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.unitPrice}</td>
                                <td>{e.quantityPerUnit}</td>
                                <td><button onClick={() => {
                                    handleRemove(e)
                                }} id='remove'>Remove</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div >
    )
}

export default FavoritesPage