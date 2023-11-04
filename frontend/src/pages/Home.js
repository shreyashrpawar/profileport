import { useEffect, useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { Link } from "react-router-dom";

const Home = () => {
  const [sites, setSites] = useState(); // [
  const { user } = useAuthContext();
  const email = user.email;
  const token = user.token;

  const fetchInfo = async () => {
    const url = "/api/user/gethosting";
    const formData = {
      email,
    };
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        if(!d.message){
          setSites("No Sites");
        }
        else{
          setSites(d.message.sitename);
        }
      });
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    // <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
    //   <h1 className="text-4xl font-bold text-gray-800 mb-6">My Sites</h1>
    //   <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
    //     <Link to={"/create"}>Create</Link>
    //   </button>
    // </div>
    <div className="p-4">
      <h1 className="text-3xl font-semibold">My Site</h1>
      <button className="bg-blue-500 text-white rounded px-4 py-2 mt-4">
        <Link to="/create">Create Site</Link>
      </button>
      {sites && (
        <Link to={"/" + sites}>
          <div className="mt-8 w-64 h-64 border border-gray-300 p-4 rounded-lg bg-slate-200 text-center">
            {/* {sites.map((site) => (
              <div key={site.id} className="border-b border-gray-300 py-2">
                {site.name}
              </div>
            ))} */}
            {sites}
          </div>
        </Link>
      )}
    </div>
  );
};

export default Home;
