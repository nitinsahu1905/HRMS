"use client"
import React, { useEffect, useRef, useState } from 'react';
import { MdCloudUpload } from "react-icons/md";
import * as XLSX from 'xlsx';
import Table from '../Components/Table';
import Link from 'next/link';
 
const ImportEmployee = () => {
    const tableHeading = ["Designation", "Age", "Gender", "BloodGroup", "City", "DOJ"];
    const [selectedFile, setSelectedFile] = useState(null);
    const [excelData, setExcelData] = useState(null);
    const [importData, setImportData] = useState("");
    const fileInputRef = useRef(null);
 
    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
    };
 
    const handleUploadButtonClick = () => {
        if (selectedFile) {
            const reader = new FileReader();
            reader.onload = (e) => {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const sheetName = workbook.SheetNames[0]; // Assuming the data is in the first sheet
                const worksheet = workbook.Sheets[sheetName];
                const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
                setExcelData(jsonData);
            };
            reader.readAsArrayBuffer(selectedFile);
        }
    };
 
    useEffect(() => {
        if (excelData) {
            const keys = excelData[0]; // Extract keys from the first array
 
            const result = excelData.slice(1).map(values => {
                const obj = {};
                keys.forEach((key, index) => {
                    obj[key] = values[index];
                });
                return obj;
            });
 
            setImportData(result);
        }
    }, [excelData]);
 
    return (
        <div className='p-3 pl-2 bg-[#f7f7f7]'>
            <div className='p-3'>
        <h1 className="text-dark-blue text-[24px] font-bold">Import Employees</h1>
        <p className="text-primary-blue"> <Link href="./employee-management">Manage Employees</Link> / <Link href="./import-employees">ImportEmployees</Link></p>
      </div>
            <div className='bg-white py-12 px-8 rounded-[20px] shadow-lg shadow-white bg-opacity-50'>
           
                {importData ? (
                    <div><Table employeeData={importData} headings={tableHeading} /></div>
                ) : (
                   
                    <div className=' flex flex-col rounded-[20px] shadow-lg shadow-grey-color bg-opacity-50 bg-[#f7f7f7]'>
                        <div className='flex md:flex-row flex-col p-12 justify-center items-center md:gap-6 gap-4 '>
                            <div><MdCloudUpload className=' text-black rounded-[50%] border-black bg-white text-4xl' /></div>
                            <div className='flex flex-col gap-2'>
                                <div className='text-dark-blue font-medium text-2xl'>Upload files</div>
                                <div className='text-[#A9ACB4] font-normal text-xs'>select and upload the files</div>
                            </div>
                        </div>
                        <div className='h-0 border-[3px] border-[#CBD0DC] w-full'></div>
                        <div className='flex justify-center m-auto w-auto  py-10'>
                            <div className=' flex flex-col justify-center items-center mx-full   gap-2 border-dashed border-grey-color border-4 rounded-[20px] lg:px-40 md:px-24 px-6 md:py-6 py-6 '>
                                <div><MdCloudUpload className='text-black bg-white text-6xl' /></div>
                                <div><span className='text-black font-normal text-xs'>{selectedFile ? selectedFile.name : 'Choose a file here'}</span></div>
                                {selectedFile ? (
                                    <button className='rounded-[20px] text-grey-color bg-white border-[#CBD0DC] border-4 px-10 py-2 font-semibold' onClick={handleUploadButtonClick}>Upload File</button>
                                ) : (
                                    <div>
                                        <button className='rounded-[20px] text-grey-color bg-white border-[#CBD0DC] border-4 px-10 py-2 font-semibold' onClick={() => fileInputRef.current.click()}>Browse File</button>
                                        <input
                                            ref={fileInputRef}
                                            type="file"
                                            accept=".xls, .xlsx"
                                            onChange={handleFileInputChange}
                                            className="hidden"
                                        />
                                    </div>
                                )}
                                <div><span className='text-[#A9ACB4] text-xl font-medium'> In Excel Format</span></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
 
export default ImportEmployee;
 