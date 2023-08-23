import { PermIdentity, Publish } from '@mui/icons-material';
import './userpage.css';
import { Link } from 'react-router-dom';

export default function UserPage() {
  return (
    <div className="userPage">
      <div className="userTitleContainer">
        <h1 className="Title">Edit user</h1>
        <Link to="/newuser">
          <button className="userAddBtn">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              <div className="userShowName">Anna</div>
              <div className="userShowEmail">anna@mail.com</div>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity />
              <span className="userShowInfoTitle">annabeck</span>
            </div>
            <div className="userShowInfo">
              <PermIdentity />
              <span className="userShowInfoTitle">annabeck</span>
            </div>
            <div className="userShowInfo">
              <PermIdentity />
              <span className="userShowInfoTitle">annabeck</span>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form
            action=""
            className="userUpdateForm"
          >
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="annabeck"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Fullname</label>
                <input
                  type="text"
                  placeholder="annabeck"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="annabeck"
                  className="userUpdateInput"
                />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  src="https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                  className="userUpdateImg"
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: 'none' }}
                />
              </div>
              <button className="userUpdateBtn">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
