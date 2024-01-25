import React, { useState } from "react";
//import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "./ManageRequestPayment.css";
import axios from "axios";
import ModalShowBill from "./ModalShowBill";
import HeaderManage from "./HeaderManage";
const ManageRequestPayment = ({ arr, HandleEdit }) => {
  const [isShowModal, setIsShowModal] = useState(false);
  const showModal = () => {
    setIsShowModal(true);
  };
  const handleHideModal = () => {
    setIsShowModal(false);
  };
  // const [name, setName] = useState("");
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [period, setPeriod] = useState("");
  // const [image, setImage] = useState("");
  // const [description, setDescription] = useState("");

  // const token = localStorage.getItem("token");
  // const handleDelete = async (id) => {
  //   await axios.delete(
  //     `http://nguyen1-001-site1.ftempurl.com/api/Insurance/${id}`,
  //     {
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //       },
  //     }
  //   );
  //   toast.success("Xóa thông tin gói bảo hiểm thành công");
  // };
  // const handleEditChild = (item) => {
  //   HandleEdit(item);
  // };

  const HandlePayment = () => {};
  return (
    <div className="users-table">
      <HeaderManage />
      <h2>Quản lý yêu cầu thanh toán của khách hàng</h2>
      <table id="customers">
        <tbody>
          <tr>
            <th>Email</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Tài khoản ngân hàng</th>
            <th>Tên ngân hàng</th>
            <th>Ghi chu</th>
            <th>Trạng thái</th>
            <th>Actions</th>
          </tr>
          {/* {arr &&
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
            })} */}
          <td>a@gmail.com</td>
          <td>Dao duy anh</td>
          <td>0384496705</td>
          <td>45612316548654</td>
          <td>Agribank</td>
          <td>phí thanh toán</td>
          <td>chưa thanh toán</td>
          <td>
            <button className="btn-request btn-checked" onClick={HandlePayment}>
              <i class="fa-solid fa-check"></i>
            </button>
            <button className="btn-request btn-eyes" onClick={showModal}>
              <i class="fa-solid fa-eye"></i>
            </button>
          </td>
        </tbody>
      </table>
      <ModalShowBill
        isShowModal={isShowModal}
        handleHideModal={handleHideModal}
      />
    </div>
  );
};

export default ManageRequestPayment;
