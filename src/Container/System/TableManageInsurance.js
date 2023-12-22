import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "./TableManageInsurance.css";
import axios from "axios";
const TableManageInsurance = ({ arr, HandleEdit }) => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [period, setPeriod] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const handleDelete = async (id) => {
    await axios.delete(`https://localhost:44313/api/Insurance/${id}`);
    //toast.success("Xóa thông tin gói bảo hiểm thành công");
    window.location.reload();
  };
  const handleEditChild = (item) => {
    HandleEdit(item);
  };
  return (
    <div className="users-table">
      <table id="customers">
        <tbody>
          <tr>
            <th>Tên gói bảo hiểm</th>
            <th>Mô tả ngắn</th>
            <th>Giá</th>
            <th>Thời hạn</th>
            <th>Mô tả chính sách</th>
            <th>Actions</th>
          </tr>
          {arr &&
            arr.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.title}</td>
                  <td>{item.price}</td>
                  <td>{item.period}</td>
                  <td>{item.description}</td>
                  <td>
                    <button className="btn-update">
                      <i
                        className="fas fa-pen"
                        onClick={() => handleEditChild(item)}
                      ></i>
                    </button>
                    <button className="btn-delete">
                      <i
                        className="fas fa-trash"
                        onClick={() => handleDelete(item.id)}
                      ></i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default TableManageInsurance;
