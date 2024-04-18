const Table = ({ employeeData, headings }) => {
  if (employeeData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <table className="w-full border-collapse mt-4">
        <tbody>
          {/* heading section */}
          <tr className="text-center p-10 bg-[#f4f7fc] text-[#464F60]">
            <th>Id</th>
            <th>Name</th>
            {headings.map((th, index) => (
              <th key={index + 1}>{th}</th>
            ))}
          </tr>

          {/* fields section */}
          {employeeData.map((data, index) => (
            <tr key={data.id} className="text-center p-10">
              <td>{index + 1}</td>
              <td>{data.fullname}</td>
              {headings.map((heading, index) => (
                <td key={index + 1}>{data[heading.toLowerCase()]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
