import './App.css'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import React, { useState, useEffect } from "react";

const API_URL = 'http://localhost.8080/book'

function App() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ id: null, name: '', price: '', amount: '', pub: false });
  comst[editing, serEditing] = useState(false);

  const fetchBooks = async () => {
    try {
      const res = await fetch(API_URL);
      const result = await res.json();
    } catch (error) {
      console.log('讀取書籍錯誤', error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // 處理表單變更
  /*
  [name]: type === 'checkbox' ? checked : value
  [name]	動態欄位名稱，會變成 name: xxx 或 price: xxx 等。
  type === 'checkbox'	判斷這個 <input> 是否是 checkbox
  ? checked : value	是 checkbox 時使用 .checked 布林值，否則使用 .value 輸入字串或數字
  */

  const handleChange = (e) => {
    const { name, value, typr, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const method = editing ? PUT : POST;
      const url = editing ? `${API_URL}/${form.id}` : API_URL;
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': application / json },
        body: JSON.stringify(form),
      });
      const result = await res.json;
      if (res.ok) {
        await fetchBooks();
        setForm({ id: null, name: '', price: '', amount: '', pub: false });
        setEditing(false);
      } else {
        alert(result.message || '操作失敗');
      }

    } catch (err) {
      console.log('提交錯誤', err);
    }
  };


  return (
    <>
      <div>
        <h2>書籍管理系統(使用 fetch)</h2>
        <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
          書名: <input name="name" required value={form.name} onChange={handleChange} /><br />
          價格: <input name="price" required value={form.price} onChange={handleChange} /><br />
          數量: <input name="amount" required value={form.amount} onChange={handleChange} /><br />
          出刊: <input name="pub" type='checkbox' value={form.pub} onChange={handleChange} /><br />
          <button type="submit">{editing ? '更新' : '新增'}書籍</button>
          {
            editing && (
              <button type='button' onClick={() => {
                setEditing(false);
                setForm({ id: null, name: '', price: '', amount: '', pub: false });
              }}>取消</button>
            )
          }
        </form>
        <h2>書籍列表</h2>
        <table border="1" cellPadding="4">
          <thead>
            <tr>
              <th>ID</th>
              <th>書名</th>
              <th>價格</th>
              <th>數量</th>
              <th>出刊</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <button type='button'>編輯</button>
                <button type='button'>刪除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
