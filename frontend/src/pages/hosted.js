import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Hosted() {
  const { siteid } = useParams();

  const [text, setText] = useState("Your Name");
  const [isEditing, setIsEditing] = useState(false);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [address, setaddress] = useState("");
  const [phone, setphone] = useState("");
  const [proftitle, setproftitle] = useState("Enter you title");
  const [bio, setbio] = useState("Enter your bio");
  const [skill1, setskill1] = useState("Enter your skill");
  const [skill2, setskill2] = useState("Enter your skill");
  const [skill1info, setskill1info] = useState("Enter your skill info");
  const [skill2info, setskill2info] = useState("Enter your skill info");
  const [project1title, setproject1title] = useState("Enter your skill");
  const [project2title, setproject2title] = useState("Enter your skill");
  const [project1description, setproject1description] = useState(
    "Enter your skill info"
  );
  const [project2description, setproject2description] = useState(
    "Enter your skill info"
  );
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handlenameChange = (e) => {
    setname(e.target.value);
  };
  const handleemailChange = (e) => {
    setemail(e.target.value);
  };
  const handleaddressChange = (e) => {
    setaddress(e.target.value);
  };
  const handlephoneChange = (e) => {
    setphone(e.target.value);
  };
  const handleproftitleChange = (e) => {
    setproftitle(e.target.value);
  };
  const handlebioChange = (e) => {
    setbio(e.target.value);
  };
  const handleskill1Change = (e) => {
    setskill1(e.target.value);
  };
  const handleskill2Change = (e) => {
    setskill2(e.target.value);
  };
  const handleskill1infoChange = (e) => {
    setskill1info(e.target.value);
  };
  const handleskill2infoChange = (e) => {
    setskill2info(e.target.value);
  };
  const handleproject1titleChange = (e) => {
    setproject1title(e.target.value);
  };
  const handleproject2titleChange = (e) => {
    setproject2title(e.target.value);
  };
  const handleproject1descriptionChange = (e) => {
    setproject1description(e.target.value);
  };
  const handleproject2descriptionChange = (e) => {
    setproject2description(e.target.value);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const user = JSON.parse(localStorage.getItem("user"));
  const [data, setdata] = useState("");
  const [sitename, setsitename] = useState("");

  const updateInfo = async () => {
    const url = "/api/user/updateData";
    const formData = {
      siteid,
      name,
      email,
      address,
      phone,
      proftitle,
      bio,
      skill1,
      skill2,
      skill1info,
      skill2info,
      project1title,
      project2title,
      project1description,
      project2description,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
      });
  };

  const fetchInfo = async () => {
    const url = "/api/user/gethostingdata";
    const formData = {
      siteid,
    };
    // function setit(d) {
    //   return (
    //     <>
    //       if(d.message.proftitle)
    //       {setproftitle(d.message.proftitle)}
    //       if(d.message.bio){setbio(d.message.bio)}
    //       if(d.message.skill1){setskill1(d.message.skill1)}
    //       if(d.message.skill2){setskill2(d.message.skill2)}
    //       if(d.message.skill1info){setskill1info(d.message.skill1info)}
    //       if(d.message.skill2info){setskill2info(d.message.skill2info)}
    //       if(d.message.project1title){setproject1title(d.message.project1title)}
    //       if(d.message.project2title){setproject2title(d.message.project2title)}
    //       if(d.message.project1description)
    //       {setproject1description(d.message.project1description)}
    //       if(d.message.project2description)
    //       {setproject2description(d.message.project2description)}
    //       if(d.message.sitename){setsitename(d.message.sitename)}
    //       if(d.message.name){setname(d.message.name)}
    //       if(d.message.email){setemail(d.message.email)}
    //       if(d.message.address){setaddress(d.message.address)}
    //       if(d.message.phone){setphone(d.message.phone)}
    //       {/* setsitename(d.message.sitename), setname(d.message.name),
    //       setemail(d.message.email), setaddress(d.message.address),
    //       setphone(d.message.phone) */}
    //     </>
    //   );
    // }
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((d) => {
        if (d.message.proftitle) {
          console.log(
            d.message.proftitle
          ); /* {setproftitle(d.message.proftitle)} */
        }
        if (d.message.bio) {
          setbio(d.message.bio);
        }
        if (d.message.skill1) {
          setskill1(d.message.skill1);
        }
        if (d.message.skill2) {
          setskill2(d.message.skill2);
        }
        if (d.message.skill1info) {
          setskill1info(d.message.skill1info);
        }
        if (d.message.skill2info) {
          setskill2info(d.message.skill2info);
        }
        if (d.message.project1title) {
          setproject1title(d.message.project1title);
        }
        if (d.message.project2title) {
          setproject2title(d.message.project2title);
        }
        if (d.message.project1description) {
          setproject1description(d.message.project1description);
        }
        if (d.message.project2description) {
          setproject2description(d.message.project2description);
        }
        if (d.message.sitename) {
          setsitename(d.message.sitename);
        }
        if (d.message.name) {
          setname(d.message.name);
        }
        if (d.message.email) {
          setemail(d.message.email);
        }
        if (d.message.address) {
          setaddress(d.message.address);
        }
        if (d.message.phone) {
          setphone(d.message.phone);
        }
        {
          /* setsitename(d.message.sitename), setname(d.message.name),
            setemail(d.message.email), setaddress(d.message.address),
            setphone(d.message.phone) */
        }
      });
  };

  //   const response = await fetch("/api/user/gethostingdata", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: `Bearer ${user.token}`,
  //     },
  //     body: JSON.stringify(formData),
  //   });
  //   if (response.ok) {
  //     console.log(response.message);
  //   } else {
  //     // Handle errors (e.g., show an error message)
  //     console.error("Form data submission failed");
  //   }
  // } catch (error) {
  //   console.error("Error:", error);
  // }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <>
      <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          {user && (
            <div className="flex justify-end">
              <button
                className="bg-indigo-600 text-white text-sm font-semibold focus:outline-none hover:bg-indigo-700 px-4 py-2 rounded-md"
                onClick={() => {
                  updateInfo();
                  alert("Portfolio saved!");
                }}
              >
                Save
              </button>
            </div>
          )}
          <div className="sm:flex sm:items-center px-6 py-4">
            <div className="text-center sm:text-left sm:flex-grow">
              <h2 className="text-3xl font-bold text-gray-900">
                {user &&
                  (isEditing ? (
                    <input
                      type="text"
                      value={name}
                      onChange={handlenameChange}
                      onBlur={handleBlur}
                    />
                  ) : (
                    <span onClick={handleEditClick}>{name}</span>
                  ))}
                {!user && <span>{name}</span>}
              </h2>
              <p className="text-xl font-semibold text-indigo-600 mt-2">
                {user &&
                  (isEditing ? (
                    <input
                      type="text"
                      value={proftitle}
                      onChange={handleproftitleChange}
                      onBlur={handleBlur}
                    />
                  ) : (
                    <span onClick={handleEditClick}>{proftitle}</span>
                  ))}
                {!user && <span>{proftitle}</span>}
              </p>
              <p className="text-gray-600 mt-2">
                Address:
                {user &&
                  (isEditing ? (
                    <input
                      type="text"
                      value={address}
                      onChange={handleaddressChange}
                      onBlur={handleBlur}
                    />
                  ) : (
                    <span onClick={handleEditClick}>{address}</span>
                  ))}
                {!user && <span>{address}</span>}
              </p>
              <p className="text-gray-600">
                Email:
                {user &&
                  (isEditing ? (
                    <input
                      type="text"
                      value={email}
                      onChange={handleemailChange}
                      onBlur={handleBlur}
                    />
                  ) : (
                    <span onClick={handleEditClick}>{email}</span>
                  ))}
                {!user && <span>{email}</span>}
              </p>
              <p className="text-gray-600">
                Phone:
                {user &&
                  (isEditing ? (
                    <input
                      type="text"
                      value={phone}
                      onChange={handlephoneChange}
                      onBlur={handleBlur}
                    />
                  ) : (
                    <span onClick={handleEditClick}>{phone}</span>
                  ))}
                {!user && <span>{phone}</span>}
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-4">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">About Me</h2>
              <p className="mt-2 text-gray-600">
                {user &&
                  (isEditing ? (
                    <input
                      type="text"
                      value={bio}
                      onChange={handlebioChange}
                      onBlur={handleBlur}
                    />
                  ) : (
                    <span onClick={handleEditClick}>{bio}</span>
                  ))}
                {!user && <span>{bio}</span>}
              </p>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {/* Add your skills here */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {user &&
                      (isEditing ? (
                        <input
                          type="text"
                          value={skill1}
                          onChange={handleskill1Change}
                          onBlur={handleBlur}
                        />
                      ) : (
                        <span onClick={handleEditClick}>{skill1}</span>
                      ))}
                    {!user && <span>{skill1}</span>}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {user &&
                      (isEditing ? (
                        <input
                          type="text"
                          value={skill1info}
                          onChange={handleskill1infoChange}
                          onBlur={handleBlur}
                        />
                      ) : (
                        <span onClick={handleEditClick}>{skill1info}</span>
                      ))}
                    {!user && <span>{skill1info}</span>}
                  </p>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {user &&
                      (isEditing ? (
                        <input
                          type="text"
                          value={skill2}
                          onChange={handleskill2Change}
                          onBlur={handleBlur}
                        />
                      ) : (
                        <span onClick={handleEditClick}>{skill2}</span>
                      ))}
                    {!user && <span>{skill2}</span>}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {user &&
                      (isEditing ? (
                        <input
                          type="text"
                          value={skill2info}
                          onChange={handleskill2infoChange}
                          onBlur={handleBlur}
                        />
                      ) : (
                        <span onClick={handleEditClick}>{skill2info}</span>
                      ))}
                    {!user && <span>{skill2info}</span>}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-200 pt-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {/* Replace with your project cards */}
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {user &&
                      (isEditing ? (
                        <input
                          type="text"
                          value={project1title}
                          onChange={handleproject1titleChange}
                          onBlur={handleBlur}
                        />
                      ) : (
                        <span onClick={handleEditClick}>{project1title}</span>
                      ))}
                    {!user && <span>{project1title}</span>}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {user &&
                      (isEditing ? (
                        <input
                          type="text"
                          value={project1description}
                          onChange={handleproject1descriptionChange}
                          onBlur={handleBlur}
                        />
                      ) : (
                        <span onClick={handleEditClick}>
                          {project1description}
                        </span>
                      ))}
                    {!user && <span>{project1description}</span>}
                  </p>
                </div>
              </div>
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {user &&
                      (isEditing ? (
                        <input
                          type="text"
                          value={project2title}
                          onChange={handleproject2titleChange}
                          onBlur={handleBlur}
                        />
                      ) : (
                        <span onClick={handleEditClick}>{project2title}</span>
                      ))}
                    {!user && <span>{project2title}</span>}
                  </h3>
                  <p className="mt-2 text-gray-600">
                    {user &&
                      (isEditing ? (
                        <input
                          type="text"
                          value={skill2info}
                          onChange={handleproject2descriptionChange}
                          onBlur={handleBlur}
                        />
                      ) : (
                        <span onClick={handleEditClick}>{skill2info}</span>
                      ))}
                    {!user && <span>{skill2info}</span>}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Add more sections here, such as Education, Experience, Certifications, etc. */}
        </div>
      </div>
    </>
  );
}

export default Hosted;
