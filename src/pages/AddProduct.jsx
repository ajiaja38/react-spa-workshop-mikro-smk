import React, { useState } from "react"
import LayoutWrapper from "../layout/LayoutWrapper"
import CardPreview from "../components/Card/CardPreview"
import Form from "../components/form/Form"

const AddProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    imageUrl: "",
    price: "",
    stock: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Produk berhasil disimpan! (Cek console)")
    console.log("Data Produk:", formData)
  }

  return (
    <LayoutWrapper>
      <div className='main-wrapper'>
        <div className='form-card'>
          <div className='form-header'>
            <h2>Tambah Produk Baru</h2>
          </div>

          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formData={formData}
          />
        </div>

        <div className='preview-section'>
          <span className='preview-label'>Live Preview</span>

          <CardPreview
            title={formData.title}
            category={formData.category}
            imageUrl={formData.imageUrl}
            price={formData.price}
            stock={formData.stock}
          />
        </div>
      </div>
    </LayoutWrapper>
  )
}

export default AddProduct
