import React, { useState } from 'react'
import { tabs } from '../utils/constants'
import { IoMdAdd } from 'react-icons/io'
import { FiEdit } from 'react-icons/fi'
import BookingHistory from '../components/profile/BookingHistory'
const Profile = () => {
    const [activeTab, setActiveTab] = useState("Profile");
    const [formData, setFormData] = useState({
        name: "Amrit Raj",
        birthday: "",
        gender: "",
        married: ""
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <>
            <div className="bg-[#e5e5e5]">
                <div className="max-w-7xl mx-auto flex flex-wrap gap-6 py-2 text-sm font-medium">
                    {
                        tabs.map((tab) => (
                            <button 
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`pb-1 cursor-pointer ${
                                    activeTab === tab ? "text-[#f74565]" : "text-gray-600 hover:text-black"
                                }`}
                            >
                                {tab}
                            </button>
                        ))
                    }
                </div>
            </div>

            <div className="min-h-screen py-10 px-4 bg-gray-100">
                <div className="max-w-3xl mx-auto">
                    {activeTab === "Profile" && (
                        <>
                            {/* Header with Profile Picture */}
                            <div className="bg-gradient-to-r from-gray-800 to-[#f74565] rounded-t-lg px-6 py-8 flex items-center gap-6 text-white">
                                <div className="relative w-20 h-20 border-4 border-white rounded-full flex items-center justify-center bg-white text-gray-600">
                                    <IoMdAdd size={24} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-semibold">Hi, {formData.name}</h2>
                                    <p className="text-sm text-gray-200">Logged</p>
                                </div>
                            </div>

                            {/* Account Details Section */}
                            <div className="bg-white px-6 py-6">
                                <h3 className="text-lg font-semibold mb-6">Account Details</h3>
                                
                                {/* Email */}
                                <div className="mb-6 flex items-center justify-between pb-6 border-b">
                                    <div>
                                        <p className="text-sm font-normal text-gray-500 mb-1">Email Address</p>
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium">testemail@gmail.com</span>
                                            <span className="text-green-600 text-xs bg-green-100 px-2 py-1 rounded">
                                                Verified
                                            </span>
                                        </div>
                                    </div>
                                    <FiEdit className="text-[#f74565] cursor-pointer text-lg" />
                                </div>

                                {/* Mobile Number */}
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-sm font-normal text-gray-500 mb-1">Mobile Number</p>
                                        <div className="flex items-center gap-2">
                                            <span className="font-medium">+91-9122222222</span>
                                            <span className="text-green-600 text-xs bg-green-100 px-2 py-1 rounded">
                                                Verified
                                            </span>
                                        </div>
                                    </div>
                                    <FiEdit className="text-[#f74565] cursor-pointer text-lg" />
                                </div>
                            </div>

                            {/* Personal Details Section */}
                            <div className="bg-white px-6 py-6 mt-0 border-t">
                                <h3 className="text-lg font-semibold mb-6">Personal Details</h3>
                                
                                <form onSubmit={handleSubmit}>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        {/* Name */}
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 block mb-2">Name</label>
                                            <input 
                                                type="text" 
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#f74565]" 
                                            />
                                        </div>

                                        {/* Birthday */}
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 block mb-2">Birthday (Optional)</label>
                                            <input 
                                                type="text" 
                                                name="birthday"
                                                placeholder="dd-mm-yyyy"
                                                value={formData.birthday}
                                                onChange={handleInputChange}
                                                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-[#f74565]" 
                                            />
                                        </div>

                                        {/* Identity (Gender) */}
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 block mb-3">Identity (Optional)</label>
                                            <div className="flex gap-6">
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input 
                                                        type="radio" 
                                                        name="gender"
                                                        value="woman"
                                                        checked={formData.gender === "woman"}
                                                        onChange={handleInputChange}
                                                        className="cursor-pointer"
                                                    />
                                                    <span className="text-sm">Woman</span>
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input 
                                                        type="radio" 
                                                        name="gender"
                                                        value="man"
                                                        checked={formData.gender === "man"}
                                                        onChange={handleInputChange}
                                                        className="cursor-pointer"
                                                    />
                                                    <span className="text-sm">Man</span>
                                                </label>
                                            </div>
                                        </div>

                                        {/* Married */}
                                        <div>
                                            <label className="text-sm font-medium text-gray-700 block mb-3">Married? (Optional)</label>
                                            <div className="flex gap-6">
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input 
                                                        type="radio" 
                                                        name="married"
                                                        value="yes"
                                                        checked={formData.married === "yes"}
                                                        onChange={handleInputChange}
                                                        className="cursor-pointer"
                                                    />
                                                    <span className="text-sm">Yes</span>
                                                </label>
                                                <label className="flex items-center gap-2 cursor-pointer">
                                                    <input 
                                                        type="radio" 
                                                        name="married"
                                                        value="no"
                                                        checked={formData.married === "no"}
                                                        onChange={handleInputChange}
                                                        className="cursor-pointer"
                                                    />
                                                    <span className="text-sm">No</span>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </>
                    )}
                    {/*Booking Section*/}
                    {activeTab ==="Your Orders" && <BookingHistory />}
                </div>
            </div>
        </>
    );
};

export default Profile