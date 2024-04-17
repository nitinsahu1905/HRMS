// import { EmployeeManagementData } from '../Constants/EmployeeManagementData';

const Table = ({ employeeData, headings }) => {
  // const tableHeadings=["Id","Name","hours","Status"];
  // console.log(headings)

  return (
    <div>
      <table className="w-full border-collapse mt-4">
        <tbody>
          <tr className="text-center p-10 bg-[#f4f7fc] text-[#464F60]">
            <th>Id</th>
            <th>Name</th>
            {headings.map((th) => (
              <th key={th}>{th}</th>
            ))}
          </tr>
          {employeeData.map((data, index) => (
            <tr className="text-center p-10" key={data.id}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              {headings.map((heading, index) => (
                <td key={index}>{data[heading.toLowerCase()]}</td>
              ))}
              {/* <td>{data.designatin}</td>
                                <td>{data.age}</td>
                                <td>{data.gender}</td>
                                <td>{data.bloodGroup}</td>
                                <td>{data.City}</td>
                                <td>{data.DOJ}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
