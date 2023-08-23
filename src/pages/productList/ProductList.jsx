import './productList.css';
import { DataGrid } from '@mui/x-data-grid';
import React, { useEffect, useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import { productRows } from '../../dummyData';

export default function ProductList() {
  const [data, setData] = useState(productRows);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 60 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productItem">
            <img
              className="productListImg"
              src={params.row.img}
              alt=""
            />
            {params.row.name}
          </div>
        );
      },
    },
    { field: 'stock', headerName: 'Stock', width: 130 },
    {
      field: 'status',
      headerName: 'Status',
      width: 90,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160,
    },

    {
      field: 'action',
      headerName: 'Action',
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className="ListEdit">Edit</button>
            </Link>

            <DeleteOutlineIcon
              className="ListRemove"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
      <div className="TitleContainer">
        <h1 className="Title">Products</h1>
        <Link to="/newproduct">
          <button className="addBtn">Add New Product</button>
        </Link>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </div>
  );
}
