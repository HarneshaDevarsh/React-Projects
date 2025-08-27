import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Update = () => {
    const { id } = useParams();

    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: "",
        age: "",
        contact: "",
        email: "",
    })

    useEffect(() => {
        axios
            .get("http://localhost:3000/Students/" + id)
            .then((res) => {
                setValues(res.data);
            })
            .catch((err) => { console.log(err) })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();

        axios
            .put(`http://localhost:3000/Students/${id}`, values)
            .then((res) => {
                setValues(res.data);
                alert("Data Updated Successfully !")
                navigate("/");
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 p-6">
                <div className="max-w-lg mx-auto bg-white p-8 shadow-2xl rounded-2xl">
                    <h1 className='mx-auto text-center text-2xl font-semibold text-gray-500'>Update Student Details</h1>

                    <form onSubmit={handleSubmit} className='mt-8'>
                        <label className='block font-semibold'>Name :</label>
                        <input
                            id="name"
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={(e) => {
                                setValues({ ...values, name: e.target.value });
                            }}
                            className="border border-gray-300 px-2 py-2 mt-2 mb-4 w-full rounded-lg"
                        />

                        <label className='block font-semibold'>Age :</label>
                        <input
                            type="number"
                            id="age"
                            name="age"
                            value={values.age}
                            onChange={(e) => {
                                setValues({ ...values, age: e.target.value });
                            }}
                            className="border border-gray-300 px-2 py-2 mt-2 mb-4 w-full rounded-lg"
                        />

                        <label className='block font-semibold'>Contact :</label>
                        <input
                            type="number"
                            id="contact"
                            name="contact"
                            value={values.contact}
                            onChange={(e) => {
                                setValues({ ...values, contact: e.target.value });
                            }}
                            className="border border-gray-300 px-2 py-2 mt-2 mb-4 w-full rounded-lg"
                        />

                        <label className='block font-semibold'>Email :</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={values.email}
                            onChange={(e) => {
                                setValues({ ...values, email: e.target.value });
                            }}
                            className="border border-gray-300 px-2 py-2 mt-2 w-full rounded-lg"
                        />

                        <div className='flex justify-between mt-5'>
                            <button type="submit"
                                className='bg-blue-700 hover:bg-blue-800 px-3 py-2 rounded-lg text-white font-semibold'>
                                Submit
                            </button>

                            <Link
                                to={'/'}
                                className='bg-orange-700 hover:bg-orange-800 text-white p-2 rounded-lg font-semibold'>
                                Back
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Update;
