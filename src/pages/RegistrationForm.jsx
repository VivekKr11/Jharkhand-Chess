import React, { useState } from "react";
import axios from "axios";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    RegistrationDate: "",
    Tournament: "",
    Category: "",
    EntryType: "Un-Rated",
    Name: "",
    FatherName: "",
    Email: "",
    Mobile: "",
    Gender: "Male",
    DOB: "",
    Dist: "",
    Address: "",
    FideId: "",
    FideRating: "",
    AjcaId: "",
    AicfID: "",
    PhotoURL: "",
    BirthCertificateUrl: "",
    EntryFee: "",
    FoodingPerson: 0,
    FoodingAmount: "",
    LodgingPerson: 0,
    LodgingAmount: "",
    LateFine: "",
    TotalAmount: "",
    ReferenceNumber: "",
    PaymentDate: "",
    PaymentStatus: "",
    Status: "",
    AJCAFee: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://jharkhand-chess-backend.vercel.app/registration/Add",
        formData
      )
      .then((response) => {
        console.log("Form submitted successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error submitting the form:", error);
      });
  };

  return (
    <div className="container mx-auto">
    <div className="container mx-auto mt-20 md:mt-28 mb-2 md:mb-5 font-playfair justify-center text-center">
        <p className="text-3xl md:text-6xl font-bold text-[#2C1B16]">
          Registration Form
        </p>
      </div>
      <form
        onSubmit={handleSubmit}
        className="space-y-6 mt-10 md:mt-18 p-8 bg-white  rounded-lg"
      >
        {/* Form Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="Name"
              className="block text-gray-700 font-semibold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              placeholder="John Doe"
              value={formData.Name}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="FatherName"
              className="block text-gray-700 font-semibold mb-2"
            >
              Father's Name
            </label>
            <input
              type="text"
              id="FatherName"
              name="FatherName"
              placeholder="Father's Name"
              value={formData.FatherName}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="Email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="Email"
              name="Email"
              placeholder="example@example.com"
              value={formData.Email}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="Mobile"
              className="block text-gray-700 font-semibold mb-2"
            >
              Mobile Number
            </label>
            <input
              type="text"
              id="Mobile"
              name="Mobile"
              placeholder="123-456-7890"
              value={formData.Mobile}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="Gender"
              className="block text-gray-700 font-semibold mb-2"
            >
              Gender
            </label>
            <select
              id="Gender"
              name="Gender"
              value={formData.Gender}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="DOB"
              className="block text-gray-700 font-semibold mb-2"
            >
              Date of Birth
            </label>
            <input
              type="date"
              id="DOB"
              name="DOB"
              value={formData.DOB}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="Dist"
              className="block text-gray-700 font-semibold mb-2"
            >
              District
            </label>
            <select
              id="Dist"
              name="Dist"
              value={formData.Dist}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option selected="selected" value="0">
                Select
              </option>
              <option value="Bokaro">Bokaro</option>
              <option value="Chatra">Chatra</option>
              <option value="Deoghar">Deoghar</option>
              <option value="Dhanbad">Dhanbad</option>
              <option value="Dumka">Dumka</option>
              <option value="East Singhbhum">East Singhbhum</option>
              <option value="Garhwa">Garhwa</option>
              <option value="Giridih">Giridih</option>
              <option value="Godda">Godda</option>
              <option value="Gumla">Gumla</option>
              <option value="Hazaribag">Hazaribag</option>
              <option value="Jamtara">Jamtara</option>
              <option value="Khunti">Khunti</option>
              <option value="Koderma">Koderma</option>
              <option value="Latehar">Latehar</option>
              <option value="Lohardaga">Lohardaga</option>
              <option value="Pakur">Pakur</option>
              <option value="Palamu">Palamu</option>
              <option value="Ramgarh">Ramgarh</option>
              <option value="Ranchi">Ranchi</option>
              <option value="Sahibganj">Sahibganj</option>
              <option value="Seraikela-Kharsawan">Seraikela-Kharsawan</option>
              <option value="Simdega">Simdega</option>
              <option value="West Singhbhum">West Singhbhum</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="Address"
              className="block text-gray-700 font-semibold mb-2"
            >
              Address
            </label>
            <input
              type="text"
              id="Address"
              name="Address"
              placeholder="123 Main St"
              value={formData.Address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="FideId"
              className="block text-gray-700 font-semibold mb-2"
            >
              FIDE ID
            </label>
            <input
              type="text"
              id="FideId"
              name="FideId"
              placeholder="FIDE123456"
              value={formData.FideId}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="FideRating"
              className="block text-gray-700 font-semibold mb-2"
            >
              FIDE Rating
            </label>
            <input
              type="text"
              id="FideRating"
              name="FideRating"
              placeholder="2000"
              value={formData.FideRating}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="AicfID"
              className="block text-gray-700 font-semibold mb-2"
            >
              AICF ID
            </label>
            <input
              type="text"
              id="AicfID"
              name="AicfID"
              placeholder="AICF123456"
              value={formData.AicfID}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label
              htmlFor="LodgingPerson"
              className="block text-gray-700 font-semibold mb-2"
            >
              Number of Lodging Persons
            </label>
            <select
              id="LodgingPerson"
              name="LodgingPerson"
              value={formData.LodgingPerson}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="FoodingPerson"
              className="block text-gray-700 font-semibold mb-2"
            >
              Number of Fooding Persons
            </label>
            <select
              id="FoodingPerson"
              name="FoodingPerson"
              value={formData.FoodingPerson}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </div>
        <div className="flex items-center justify-center w-full">
        <button
          type="submit"
          className="px-10 p-3 bg-[#2C1B16] text-white rounded-lg hover:bg-[#1d120e] transition duration-300"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
