import { Publish } from '@mui/icons-material';
import './newProduct.css';

export default function NewProduct() {
  return (
    <div className="newProduct">
      <h1 className="Title">New Product</h1>
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
          <label>Image</label>
          <input type="file" id="file" />
          <button className="saveBtn">Save New Product</button>
        </div>
        <div className="productFormRight"></div>
      </form>
    </div>
  );
}
