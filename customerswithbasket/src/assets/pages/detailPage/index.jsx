import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Space, Spin } from 'antd';
import axios from 'axios'
import './index.scss'

const DetailPage = () => {
  const [loading, setLoading] = useState(false)
  const [data, setdata] = useState([])

  const { id } = useParams()

  const detailData = async () => {
    setLoading(true)
    const response = await axios.get(`https://northwind.vercel.app/api/products/${id}`)
    setdata(response.data)
    setLoading(false)
  }

  useEffect(() => {
    detailData()
  }, [])

  return (
    <div className='detail'>
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
        (
          <>
            <h3>Name: {data.name}</h3>
            <p>PerUnit: {data.quantityPerUnit}</p>
            <p>Price: {data.unitPrice}</p>
            <p>Stock: {data.unitsInStock}</p>
          </>
        )}
    </div>
  )
}

export default DetailPage