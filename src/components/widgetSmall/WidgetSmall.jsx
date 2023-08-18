import { Visibility } from '@mui/icons-material';
import './widgetSm.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function WidgetSmall() {
  const [users, setUsers] = useState([]);
  React.useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      setUsers(response.data);
    });
  }, []);

  console.log(users);
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join members</span>

      <ul className="widgetSmList">
        {users.map((user) => (
          <li
            className="widgetSmListItem"
            key={user.id}
          >
            <img
              src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="widgetSlImage"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.name}</span>
              <span className="widgetSmUserTitle">{user.email}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" /> Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
