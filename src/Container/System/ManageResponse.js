import React, { useEffect, useState } from "react";
import "./ManageResponse.css";
import axios from "axios";
import HeaderManage from "./HeaderManage";
import { toast } from "react-toastify";

const token = localStorage.getItem('token');
const ManageResponse = () => {
  let [arr, setArr] = useState([]);
  useEffect(() => {
    try {
      const loading = async () => {
        let res = await axios.get(
          `http://nguyen1-001-site1.ftempurl.com/api/Feedback`,
          {
            headers: {
              "Content-Type": "multipart/form-data"
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
  const handleResponse = async (item) => {
    console.log("id : ", item.id);
    try {
      let res = await axios.put(
        `https://localhost:44341/api/Feedback/${item.id}`,
        {
          headers: {
            "Content-Type": "multipart/form-data"
          },
        }
      );
      console.log("res response : ", res);
      toast.success("Đã phản hồi khách hàng thành công !!");
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div className="users-table">
      <HeaderManage />
      <h2 className="text-center mt-3 mb-3" style={{ marginTop: "25px" }}>
        Quản lý phản hồi khách hàng
      </h2>
      <table id="customers" style={{ width: "100%" }}>
        <tbody>
          <tr>
            <th style={{ width: "3%" }}>STT</th>
            <th>email</th>
            <th>Họ tên</th>
            <th>Số điện thoại</th>
            <th>Nội dung phản hồi</th>
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
                  <td>{item.message}</td>
                  <td
                    style={{
                      color:
                        item.status === "Đang chờ phản hồi" ? "red" : "green",
                    }}
                  >
                    {item.status}
                  </td>
                  <td>
                    <button
                      className="btn-primary mr-2"
                      onClick={() => handleResponse(item)}
                    >
                      hoàn thành
                    </button>
                    <button className="btn-danger">Xóa</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ManageResponse;
