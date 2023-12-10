import './MainPage.css';
import React, { useState } from "react";
import ErrorMessage from './errorMessage';
import { useNavigate } from 'react-router-dom';
 


function MainPage() {
  const [file, setFile] = useState();
  const [csvData, setCsvData] = useState([]);
  const [error, setError] = useState(false);

  const navigate = useNavigate()

  
  const handleOnChange = (e) => {
    setFile(e.target.files[0]);
    let file = e.target.files[0];

    if (file.name.split('.').pop() !== 'csv') {
      setError(true);

    } else {
     
      navigate('/parse-excel');
    }

  };


  const errorMessages = error ? <ErrorMessage /> : null;
  return (
    <div>
      {errorMessages}
      <div className='input__wrapper'>

        <div>
          <h1 className='input__title'>Выберите файл в формате CSV</h1>
          <form>
            <input
              name="file"
              type="file"
              id="csvFileInput"
              onChange={handleOnChange}
              className='input input__file'
            />

            <label htmlFor="csvFileInput" className='input__label' >
              Выберите файл
            </label>
          </form>
        </div>
      </div>

    </div>
  );
}

export default MainPage;