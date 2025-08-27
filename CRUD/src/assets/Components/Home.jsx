import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { IoMdPersonAdd } from "react-icons/io";

const Home = () => {
    const [data, setData] = useState([]);
    const [selectedData, setSelectedData] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    useEffect(() => {
        axios
            .get("http://localhost:3000/Students")
            .then((res) => setData(res.data))
            .catch((err) => console.log(err));
    }, []);

    const handleRemove = (id) => {
        axios
            .delete("http://localhost:3000/Students/" + id)
            .then(() => {
                alert("Data Removed!");
                setData(data.filter(d => d.id !== id));
            })
            .catch((err) => console.log(err));
    };

    const filteredData = data.filter((student) => {
        if (!selectedData) return true;

        const query = selectedData.toLowerCase();
        return (
            student.name.toLowerCase().includes(query) ||
            String(student.age).includes(query) ||
            String(student.contact).includes(query) ||
            student.email.toLowerCase().includes(query)
        );
    });

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-4">
            <div className="max-w-6xl mx-auto bg-white py-5 px-6 shadow-2xl rounded-2xl">

                <div className='flex items-center justify-between'>
                    <h1 className='text-2xl font-semibold text-blCK'>Student Details</h1>

                    <div className='flex gap-5'>
                        <input
                            type="text"
                            className='border border-gray-500 px-2 py-1 min-w-2xs rounded-lg'
                            placeholder='Enter Name, Age, Contact or Phone'
                            onChange={(e) => {
                                setSelectedData(e.target.value);
                                setCurrentPage(1); // Reset to page 1 on new search
                            }}
                        />

                        <Link
                            to={'/insert'}
                            className='flex bg-green-700 hover:bg-green-800 font-semibold text-white px-4 py-2 rounded-lg'>
                            Add New Student <IoMdPersonAdd className='ms-2 mt-1.5' />
                        </Link>
                    </div>
                </div>

                <div className='overflow-x-auto border mt-1 border-gray-200 rounded-lg'>
                    <table className='min-w-full table-auto text-left'>
                        <thead className='bg-blue-700 text-white'>
                            <tr>
                                <th className='px-3 py-2 ps-7 font-semibold'>Id</th>
                                <th className='px-3 py-2 font-semibold'>Name</th>
                                <th className='px-3 py-2 font-semibold'>Age</th>
                                <th className='px-3 py-2 font-semibold'>Contact</th>
                                <th className='px-3 py-2 font-semibold'>Email</th>
                                <th className='px-3 py-2 font-semibold'>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {paginatedData.map((d, i) => (
                                <tr key={d.id}>
                                    <td className='px-3 py-2 ps-7'>{startIndex + i + 1}</td>
                                    <td className='px-3 py-2'>{d.name}</td>
                                    <td className='px-3 py-2'>{d.age}</td>
                                    <td className='px-3 py-2'>{d.contact}</td>
                                    <td className='px-3 py-2'>{d.email}</td>
                                    <td>
                                        <Link
                                            to={`/update/${d.id}`}
                                            className='text-green-700 hover:text-green-700 hover:bg-green-100 p-2 rounded-lg me-2 bg-white font-semibold'>
                                            Update
                                        </Link>
                                        <button
                                            onClick={() => handleRemove(d.id)}
                                            className='text-orange-700 hover:text-orange-800 hover:bg-orange-100 p-2 rounded-lg font-semibold'>
                                            Remove
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Pagination controls outside table */}
                <div className='flex justify-center mt-4 space-x-2'>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className='px-4 py-2 rounded-lg bg-blue-500 text-white disabled:opacity-50'
                    >
                        Previous
                    </button>

                    <span className='px-4 py-2 text-gray-700'>
                        Page {currentPage} of {totalPages}
                    </span>

                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        className='px-4 py-2 rounded-lg bg-blue-500 text-white disabled:opacity-50'
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Home;
