import { doc, deleteDoc, getDoc } from "firebase/firestore";
import { firestoreDB } from "../utils/firebase";
import { toast } from "react-toastify";

const Table = ({ employeeData, headings }) => {
  // function to handle the delete records
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(firestoreDB, "employees", id));
      console.log("Deleted successfully");
      toast.success("Deleted successfully");
    } catch (error) {
      console.error("Error deleting document:", error);
      toast.error("Failed to delete document");
    }
  };

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
            <th></th>
          </tr>

          {/* fields section */}
          {employeeData.map((data) => (
            <tr key={data.id} className="text-center p-10">
              <td>{data.id}</td>
              <td>{data.fullname}</td>
              {headings.map((heading) => (
                <td key={heading}>{data[heading.toLowerCase()]}</td>
              ))}
              <td>
                <button
                  onClick={() => handleDelete(data.docId)}
                  className="bg-button-blue-color px-2 py-1 text-sm text-white rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
