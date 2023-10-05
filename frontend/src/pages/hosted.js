import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Hosted() {
  const { siteid } = useParams();

  const [text, setText] = useState("Your Name");
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const user = JSON.parse(localStorage.getItem("user"));

  const [sitename, setsitename] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const submitForm = async () => {
    try {
      const formData = {
        siteid,
      };

      const response = await fetch("/api/user/gethostingdata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        console.log(response.json());
      } else {
        // Handle errors (e.g., show an error message)
        console.error("Form data submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  useEffect(() => {
    submitForm();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Hello, I'm Your Name</h1>
          <p className="text-lg">A Creative Web Developer</p>
          <p className="text-gray-200 mt-4">
            Turning ideas into beautiful, interactive websites.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold">Project 1</h3>
              <p className="text-gray-700 mt-2">Description of Project 1.</p>
              <a
                href="#"
                className="text-blue-500 mt-4 hover:underline inline-block"
              >
                View Project
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold">Project 2</h3>
              <p className="text-gray-700 mt-2">Description of Project 2.</p>
              <a
                href="#"
                className="text-blue-500 mt-4 hover:underline inline-block"
              >
                View Project
              </a>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold">Project 3</h3>
              <p className="text-gray-700 mt-2">Description of Project 3.</p>
              <a
                href="#"
                className="text-blue-500 mt-4 hover:underline inline-block"
              >
                View Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <ul className="text-xl">
            <li className="mb-4">Web Development</li>
            <li className="mb-4">React.js</li>
            <li className="mb-4">UI/UX Design</li>
            <li className="mb-4">JavaScript</li>
          </ul>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-gray-700 mb-4">
            I'm open to collaborations and new projects. Let's connect!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800 transition duration-300 inline-block"
          >
            Email Me
          </a>
        </div>
      </section>
    </div>
  );
}

export default Hosted;
