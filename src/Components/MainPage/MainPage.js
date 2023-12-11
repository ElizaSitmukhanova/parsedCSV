import React, { useState, useEffect } from "react";
import languageEncoding from "detect-file-encoding-and-language";
import Papa from 'papaparse';
import ErrorMessage from "../Error/ErrorMessage";
import { useNavigate } from 'react-router-dom';
import './MainPage.css';

function MainPage() {

    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    const navigate = useNavigate()
    
    useEffect(() => {
        if (localStorage.getItem("csvData")) {
            navigate('/parse-excel', { state: { data: JSON.parse(localStorage.getItem("csvData")) } });
        }
    }, [navigate]);

    const handleOnChange = async (e) => {

        let file = e.target.files[0];

        if (file.name.split('.').pop() !== 'csv') {
            setError(true);

        } else {
            const fileCode = await languageEncoding(file).then((fileInfo) => fileInfo.encoding);
            Papa.parse(file, {
                header: true,
                encoding: fileCode,
                complete: (results) => {
                    setData(results.data);
                    localStorage.setItem('csvData', JSON.stringify(results.data));
                    navigate('/parse-excel', { state: { data: results.data } });
                }
            })
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