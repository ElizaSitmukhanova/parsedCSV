import React from "react";
import './ParsedExcel.css';
import { useLocation, Link } from "react-router-dom";

function ParsedExcel() {
  const location = useLocation();
  const data = location.state.data;

  const setData = (newData) => {
    localStorage.setItem('csvData', JSON.stringify(newData));
  }

  if (!data || data.length === 0) {
    const storedData = localStorage.getItem('csvData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }
  

  const handleNewFileClick = () => {
    localStorage.removeItem('csvData'); 
  }

  return (<div>
    <Link to={'/'} href="#" className="redirect">
      <button onClick={handleNewFileClick} className="button">
        Загрузить новый файл
      </button>
    </Link>
    {Array.isArray(data) && data.length ? (<table className="table">
      <thead>
        <tr>
          <th>Имя</th>
          <th>Номер телефона</th>
          <th>email</th>
          <th>Дата рождения</th>
          <th>Адрес</th>
        </tr>
      </thead>
      <tbody>

        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.phone}</td>
            <td>{row.email}</td>
            <td>{row.bday}</td>
            <td>{row.address}</td>
          </tr>
        ))}
      </tbody>
    </table>) : null}

  </div>
  )
}

export default ParsedExcel;