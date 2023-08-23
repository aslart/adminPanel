import {
  Analytics,
  LineStyle,
  Shop,
  TrendingUp,
  VerifiedUser,
} from '@mui/icons-material';
import './sidebar.css';
import { Outlet, Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" /> Home
              </li>
            </Link>

            <li className="sidebarListItem">
              <Analytics className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick menu</h3>
          <ul className="sidebarList">
            <Link to="/users">
              <li className="sidebarListItem">
                <VerifiedUser className="sidebarIcon" /> Users
              </li>{' '}
            </Link>
            <Link to="/products">
              <li className="sidebarListItem">
                <Shop className="sidebarIcon" />
                Products
              </li>
            </Link>

            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Transactions
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <LineStyle className="sidebarIcon" /> Mail
            </li>
            <li className="sidebarListItem">
              <Analytics className="sidebarIcon" /> Feedback
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem ">
              <LineStyle className="sidebarIcon" /> Manage
            </li>
            <li className="sidebarListItem">
              <Analytics className="sidebarIcon" /> Analytics
            </li>
            <li className="sidebarListItem">
              <TrendingUp className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
