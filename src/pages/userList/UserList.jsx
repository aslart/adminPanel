import { DataGrid } from '@mui/x-data-grid';
import './userList.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';

export default function UserList() {
  const [users, setUsers] = useState([]);
  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data);
    });
  }, []);
  //
  users.map(
    (user) => (user.fullAddress = user.address.city + ' ' + user.address.street)
  );

  const handleDelete = (id) => {
    setUsers(users.filter((item) => item.id !== id));
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 60 },
    { field: 'name', headerName: 'Name', width: 130 },
    { field: 'username', headerName: 'Username', width: 130 },
    {
      field: 'email',
      headerName: 'Email',
      width: 90,
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 160,
    },
    {
      field: 'fullAddress',
      headerName: 'Address',
      width: 250,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 250,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/users/' + params.row.id}>
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
    <div className="userList">
      <DataGrid
        rows={users}
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
