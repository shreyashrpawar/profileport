import { useAuthContext } from "../hooks/useAuthContext";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const admin = user.email;
  const [step, setStep] = useState(1);
  const [sitename, setsitename] = useState("");
  const [logo, setlogo] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [selectedTheme, setSelectedTheme] = useState("");

  const handleThemeSelect = (theme) => {
    setSelectedTheme(theme);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const submitForm = async () => {
    try {
      const formData = {
        admin,
        sitename,
        name,
        email,
        address,
        phone,
        selectedTheme,
      };

      // Replace with your backend API endpoint
      const response = await fetch("/api/user/details", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(formData),
      });
      setStep(step + 1);
      if (response.ok) {
        console.log("Form data submitted successfully");
      } else {
        // Handle errors (e.g., show an error message)
        console.error("Form data submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const HostForm = async () => {
    let host = true;
    try {
      const formData = {
        admin,
        sitename,
        host,
      };

      // Replace with your backend API endpoint
      const response = await fetch("/api/user/hostdetails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(formData),
      });
      setStep(step + 1);
      if (response.ok) {
        navigate(sitename);
      } else {
        navigate(sitename);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // useEffect(() => {
  //   // You can add additional logic here if needed before submitting the form.
  //   // For example, you might want to validate the form data.
  //   if (name && address && phone && selectedTheme) {
  //     submitForm();
  //   }
  // }, [name, address, phone, selectedTheme]);

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              Give your website a name
            </h2>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded mb-4"
              placeholder="Enter website name"
              onChange={(e) => setsitename(e.target.value)}
            />
            <button
              onClick={nextStep}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        );

      case 2:
        return (
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Review & edit your info</h2>
            <form className="w-full max-w-md mx-auto">
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="logo"
                >
                  Logo:
                </label>
                <input
                  type="file"
                  className="w-full px-4 py-2 border rounded"
                  id="logo"
                  name="logo"
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="name"
                >
                  Name:
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded"
                  id="name"
                  name="name"
                  onChange={(e) => setname(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border rounded"
                  id="email"
                  name="email"
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="address"
                >
                  Address:
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded"
                  id="address"
                  name="address"
                  onChange={(e) => setaddress(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="phone"
                >
                  Phone:
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border rounded"
                  id="phone"
                  name="phone"
                  onChange={(e) => setphone(e.target.value)}
                />
              </div>
            </form>
            <div className="mt-4">
              <button
                onClick={prevStep}
                className="mr-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
              >
                Back
              </button>
              <button
                onClick={nextStep}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Next
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">
              Pick up a theme you like
            </h2>
            <div className="flex justify-center space-x-4">
              <div
                className={`w-16 h-16 border border-gray-400 rounded cursor-pointer ${
                  selectedTheme === "light" ? "bg-blue-200" : ""
                }`}
                onClick={() => handleThemeSelect("light")}
              >
                Light
              </div>
              <div
                className={`w-16 h-16 border border-gray-400 rounded cursor-pointer ${
                  selectedTheme === "dark" ? "bg-blue-200" : ""
                }`}
                onClick={() => handleThemeSelect("dark")}
              >
                Dark
              </div>
              <div
                className={`w-16 h-16 border border-gray-400 rounded cursor-pointer ${
                  selectedTheme === "basil" ? "bg-blue-200" : ""
                }`}
                onClick={() => handleThemeSelect("basil")}
              >
                Basil
              </div>
              <div
                className={`w-16 h-16 border border-gray-400 rounded cursor-pointer ${
                  selectedTheme === "fresh" ? "bg-blue-200" : ""
                }`}
                onClick={() => handleThemeSelect("fresh")}
              >
                Fresh
              </div>
            </div>
            <button
              onClick={prevStep}
              className="mt-8 mr-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              Back
            </button>
            <button
              onClick={submitForm}
              className="mt-8 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Next
            </button>
          </div>
        );
      case 4:
        return (
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-4">Host your portfolio</h2>
            {/* <button
              onClick={prevStep}
              className="mr-4 bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              Back
            </button> */}
            <button
              onClick={HostForm}
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Host
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      {renderStep()}
    </div>
  );
};

export default Create;
