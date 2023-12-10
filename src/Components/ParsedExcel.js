import React from "react";
import './ParsedExcel.css';
import { useLocation, Link } from "react-router-dom";

function ParsedExcel ()  {
 

    return (  <div>
        <Link to={'/'} href="#" className="redirect">
        <button className="button">
        Загрузить новый файл
        </button>
    </Link>
    <table className="table">
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
        <tr>
          <td>Иванов Максим Викторович</td>
          <td>+7 800 000 00 00 </td>
          <td>test@example.com</td>
          <td>01.01.2001</td>
          <td>г. Москва, ул. Тверская, д. 4</td>
        </tr>
        <tr>
        <td>Иванов Максим Викторович</td>
          <td>+7 800 000 00 00 </td>
          <td>test@example.com</td>
          <td>01.01.2001</td>
          <td>г. Москва, ул. Тверская, д. 4</td>
        </tr>
        {/*  {csvData.map((row, index) => (
            <tr key={index}>
              <td>{row.name}</td>
              <td>{row.phone}</td>
              <td>{row.email}</td>
              <td>{row.bday}</td>
              <td>{row.address}</td>
            </tr>
          ))} */}
      </tbody>
    </table>

    </div>
    )
}

export default ParsedExcel;