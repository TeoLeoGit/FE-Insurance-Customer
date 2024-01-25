import React, { useEffect, useState } from "react";
import "./ManageCustomerInsurance.css";
import axios from "axios";
import HeaderManage from "./HeaderManage";
import { toast } from "react-toastify";

//const user = JSON.parse(localStorage.getItem("user"));
const token = localStorage.getItem('token');

const ManageCustomerInsurance = () => {
  let [arr, setArr] = useState([]);
  useEffect(() => {
    try {
      const loading = async () => {
        let res = await axios.get(
          `http://truongcuongtest-001-site1.etempurl.com/api/Purchase/purchase-details`
          ,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setArr(res.data);
      };
      loading();
    } catch (e) {
      console.log(e);
    }
  }, [arr]);
  const handleApprove = async (item) => {
    try {
      console.log("item : ", item);
      let res = await axios.put(
        `http://truongcuongtest-001-site1.etempurl.com/api/Purchase/update-purchase?insuranceId=${item.id}&userId=${item.userId}`
        ,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      toast.success("Duyệt gói bảo hiểm thành công !!");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="users-table">
      <HeaderManage />
      <h2 className="text-center mt-3 mb-3" style={{ marginTop: "25px" }}>
        Quản lý đơn đăng ký mua gói bảo hiểm
      </h2>
      <table id="customers" style={{ width: "100%" }}>
        <tbody>
          <tr>
            <th style={{ width: "3%" }}>STT</th>
            <th>email</th>
            <th>Tên người mua</th>
            <th>Số điện thoại</th>
            <th>Tên gói bảo hiểm</th>
            <th style={{ width: "8%" }}>giá</th>
            <th>Tình trạng</th>
            <th>Actions</th>
          </tr>
          {arr &&
            arr.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.email}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.insuranceName}</td>
                  <td>{item.insurancePrice} VND</td>
                  <td
                    style={{
                      color:
                        item.status === "Đang chờ xét duyệt" ? "red" : "green",
                    }}
                  >
                    {item.status}
                  </td>
                  <td>
                    <button
                      className="btn-primary mr-2 btn-complete"
                      onClick={() => handleApprove(item)}
                    >
                      Duyệt
                    </button>
                    <button className="btn-danger btn-deleted">Xóa</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageCustomerInsurance;
