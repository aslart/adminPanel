import Chart from '../../components/charts/Chart';
import './product.css';
import { productData } from '../../dummyData';
import { Publish } from '@mui/icons-material';

export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="Title">Edit</h1>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data={productData} dataKey="Sales" />
        </div>
        <div className="productTopRight">
          <div className="productInfo">
            <div className="productInfoTop">
              <img
                src="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className="productInfoImg"
              />
              <spam className="productName">Apple Airpods</spam>
            </div>
            <div className="productInfoBottom">
              <div className="productInfoItem">
                <span className="productInfoKey">id:</span>
                <span className="productInfoValue">123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Sales:</span>
                <span className="productInfoValue">123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">Active:</span>
                <span className="productInfoValue">123</span>
              </div>
              <div className="productInfoItem">
                <span className="productInfoKey">In stock:</span>
                <span className="productInfoValue">123</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form action="" className="productForm">
          <div className="productFormLeft">
            <label>Produt Name</label>
            <input type="text" placeholder="Apple" />
            <label>In stock</label>
            <select name="InStock" id="InStock">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <label>Active</label>
            <select name="active" id="sctive">
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="productFormRight">
            <div className="productUpload">
              <img
                src="https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
              />
              <label for="file">
                <Publish />
              </label>
              <input type="file" id="file" style={{ display: 'none' }} />
            </div>
            <button className="updateBtn">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
}
