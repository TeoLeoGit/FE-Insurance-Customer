import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./ManageInsurance.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableManageInsurance from "./TableManageInsurance.js";
import axios from "axios";
const ManageInsurance = () => {
  const [idEdit, setIdEdit] = useState("");
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [period, setPeriod] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const [arrInsurance, setArrInsurance] = useState([]);

  const handleAddInsurance = async () => {
    try {
      if (isEdit === false) {
        await axios.post("https://localhost:44313/api/Insurance", {
          name: name,
          title: title,
          price: +price,
          period: period,
          image: image,
          description: description,
        });
        toast.success("Tạo gói bảo hiểm thành công !");
      } else {
        await axios.put(`https://localhost:44313/api/Insurance/${idEdit}`, {
          name: name,
          title: title,
          price: +price,
          period: period,
          image: image,
          description: description,
        });
        setIsEdit(false);
        setIdEdit("");
        setName("");
        setPrice("");
        setTitle("");
        setDescription("");
        setPeriod("");
        toast.success("Cập nhật gói bảo hiểm thành công !");
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    try {
      const loading = async () => {
        let res = await axios.get("https://localhost:44313/api/Insurance");
        setArrInsurance(res.data);
      };
      loading();
    } catch (e) {
      console.log(e);
    }
  }, []);
  const handleSetImage = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };
  const HandleEdit = (data) => {
    setIdEdit(data.id);
    setName(data.name);
    setPrice(data.price);
    //setImage(data.image);
    setTitle(data.title);
    setDescription(data.description);
    setPeriod(data.period);
    setIsEdit(true);
  };
  return (
    <div className="container-manage">
      <h2>Quản Lý Gói Bảo Hiểm</h2>
      <div className="container row">
        <div className="col-4 form-group input-container">
          <label>Tên Gói Bảo hiểm</label>
          <input
            className=" form-control name-insurance"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="col-4 form-group input-container">
          <label>Mô tả ngắn</label>
          <input
            className=" form-control title-insurance"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div className="col-4 form-group input-container">
          <label>Giá</label>
          <input
            className=" form-control price-insurance"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div className="col-4 form-group input-container">
          <label>Thời hạn</label>
          <input
            className=" form-control period-insurance"
            onChange={(e) => setPeriod(e.target.value)}
            value={period}
          />
        </div>
        <div className="col-4 form-group input-container">
          <label>Hình ảnh</label>
          <input
            type="file"
            className=" form-control price-insurance"
            onChange={(e) => handleSetImage(e)}
            //value={image}
          />
        </div>

        <div className="col-12 form-group input-container">
          <label>Mô tả chính sách bảo hiểm</label>
          <textarea
            className="form-control description-insurance"
            rows="6"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          ></textarea>
        </div>
      </div>
      <button
        className={
          isEdit === false
            ? "btn btn-primary btn-add"
            : "btn btn-warning btn-add"
        }
        onClick={handleAddInsurance}
      >
        {isEdit === true ? "Cập nhật thông tin" : "Thêm gói bảo hiểm"}
      </button>
      <TableManageInsurance arr={arrInsurance} HandleEdit={HandleEdit} />
    </div>
  );
};

export default ManageInsurance;
