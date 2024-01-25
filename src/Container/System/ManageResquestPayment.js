import React, { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import "./ManageRequestPayment.css";
import axios from "axios";
import ModalShowBill from "./ModalShowBill";
import HeaderManage from "./HeaderManage";
import RejectRequestModal from "./RejectRequestModal";
const ManageRequestPayment = () => {
  // const users = JSON.parse(localStorage.getItem("user"));
  // let id = users.userID;
  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowModalReject, setIsShowModalReject] = useState(false);
  const [items, setItems] = useState("");
  const showModal = () => {
    setIsShowModal(true);
  };
  const handleHideModal = () => {
    setIsShowModal(false);
  };
  const handleHideModalReject = () => {
    setIsShowModalReject(false);
  };
  const handleTuChoi = (item) => {
    setIsShowModalReject(true);
    setItems(item);
  };
  // const [name, setName] = useState("");
  // const [title, setTitle] = useState("");
  // const [price, setPrice] = useState("");
  // const [period, setPeriod] = useState("");
  // const [image, setImage] = useState("");
  // const [description, setDescription] = useState("");

  const [arr, setArr] = useState([]);

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
  const token = localStorage.getItem('token');

  useEffect(() => {
    try {
      const loading = async () => {
        let res = await axios.get(
          `http://truongcuongtest-001-site1.etempurl.com/api/Payment`,
          {
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          }
        );
        setArr(res.data);
        // console.log("res : ", res);
      };
      loading();
    } catch (e) {
      console.log(e);
    }
  }, [arr]);

  const HandlePayment = async (item) => {
    console.log("item: ", item);
    try {
      let res = await axios.put(
        `http://truongcuongtest-001-site1.etempurl.com/api/Payment/${item.id}`,
        {
          status: "Đã thanh toán",
          reason: "",
        },
        {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        }
      );
      console.log("res : ", res);
      toast.success("Đã cập nhật đã thanh toán !!!");
    } catch (e) {
      console.log(e);
    }
  };
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
            <th>Lí do hủy</th>
            <th>Actions</th>
          </tr>
          {arr &&
            arr.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.email}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.bankAccount}</td>
                  <td>{item.bankName}</td>
                  <td>{item.note}</td>
                  <td
                    style={{
                      color: `${
                        item.status === "Thanh toán bị hủy"
                          ? "red"
                          : item.status === "Đang chờ phản hồi"
                          ? "black"
                          : "green"
                      }`,
                    }}
                  >
                    {item.status}
                  </td>
                  <td style={{ color: "red" }}>{item.reason}</td>
                  <td>
                    <button
                      className="btn-request btn-checked"
                      onClick={() => HandlePayment(item)}
                    >
                      <i class="fa-solid fa-check"></i>
                    </button>
                    <button
                      className="btn-request btn-deleted"
                      onClick={() => handleTuChoi(item)}
                    >
                      <i class="fa-solid fa-x"></i>
                    </button>
                    <button
                      className="btn-request btn-eyes"
                      onClick={showModal}
                    >
                      <i class="fa-solid fa-eye"></i>
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      <ModalShowBill
        isShowModal={isShowModal}
        handleHideModal={handleHideModal}
      />
      <RejectRequestModal
        isShowModalReject={isShowModalReject}
        handleHideModalReject={handleHideModalReject}
        items={items}
      />
    </div>
  );
};

export default ManageRequestPayment;
