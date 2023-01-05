import React, { useContext, useEffect, useState } from 'react'
import './index.scss'
import { ModeContext } from '../../../context/dataContext';
import { useNavigate } from 'react-router-dom';
import { Space, Spin } from 'antd';
import axios from 'axios'

const HomePage = () => {
  const [loading, setLoading] = useState(false)
  const { productsData, setProductsData, productsbasket, setProductsbasket } = useContext(ModeContext);

  const navigate = useNavigate();

  const axiosData = async () => {
    setLoading(true)
    const response = await axios.get('https://northwind.vercel.app/api/products')
    setProductsData(response.data)
    setLoading(false)
  }

  useEffect(() => {
    axiosData()
  }, [])

  const handleDetail = (e) => {
    navigate(`/detail/${e}`)
  }

  const handleAddToFav = (e) => {
    setProductsbasket([...productsbasket, e])
  }

  return (
    <div>
      {loading ?
        (
          <div className="spin">
            <Space>
              <Spin size="large">
                <div className="content" />
              </Spin>
            </Space>
          </div>
        )
        :
        (<table>
          <thead>
            <tr>
              <th>Products ID</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th>Detail</th>
              <th>ADD to Favorites</th>
            </tr>
          </thead>
          <tbody>
            {productsData.map((e, index) => {
              return (
                <tr key={index}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.unitPrice}</td>
                  <td>{e.quantityPerUnit}</td>
                  <td><button id='detail' onClick={() => {
                    handleDetail(e.id)
                  }}>Detail</button></td>
                  <td><button id='fav' onClick={() => {
                    handleAddToFav(e)
                  }}>Add to fav</button></td>
                </tr>
              )
            })}
          </tbody>
        </table>)}

    </div>
  )
}

export default HomePage