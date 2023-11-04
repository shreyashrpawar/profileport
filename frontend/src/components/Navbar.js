import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
    <nav
       class="
         flex flex-wrap
         items-center
         justify-between
         w-full
         py-4
         md:py-0
         px-4
         text-lg text-gray-700
         bg-white
       "
     >
      <div>
         <a href="#">
          <span>ProfilePort</span>
         </a>
       </div>
      
        <svg
           xmlns="http://www.w3.org/2000/svg"
           id="menu-button"
           class="h-6 w-6 cursor-pointer md:hidden block"
           fill="none"
           viewBox="0 0 24 24"
           stroke="currentColor"
         >
           <path
             stroke-linecap="round"
             stroke-linejoin="round"
             stroke-width="2"
             d="M4 6h16M4 12h16M4 18h16"
           />
         </svg>
      
      <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu">
        
           {/* <li>
             <a class="md:p-4 py-2 block hover:text-purple-400" href="#"
               >Features</a
             >
           </li>
           <li>
             <a class="md:p-4 py-2 block hover:text-purple-400" href="#"
               >Pricing</a
             >
           </li>
           <li>
             <a class="md:p-4 py-2 block hover:text-purple-400" href="#"
               >Customers</a
             >
           </li> */}
           {user && (
            <div>
              <span>{user.email}</span>
              <ul
           class="
             pt-4
             text-base text-gray-700
             md:flex
             md:justify-between 
             md:pt-0"
         >
              <li>
                <button onClick={handleClick}>Log out</button>
             
           </li></ul>
            </div>
          )}
          {!user && (
          <ul
          class="
            pt-4
            text-base text-gray-700
            md:flex
            md:justify-between 
            md:pt-0"
        >
           <li>
             <a class="md:p-4 py-2 block hover:text-purple-400" href="/login"
               >Login</a
             >
           </li>
           <li>
             <a
               class="md:p-4 py-2 block hover:text-purple-400 text-purple-500"
               href="/signup"
               >Sign Up</a
             >
           </li>
           </ul>
          )}
         
       </div>
   </nav>
 </header>
 
    /* // <header>
    //   <div className="container">
    //     <Link to="/">
    //       <h1>ProfilePort</h1>
    //     </Link>
    //     <nav>
    //       {user && (
    //         <div>
    //           <span>{user.email}</span>
    //           <button onClick={handleClick}>Log out</button>
    //         </div>
    //       )}
    //       {!user && (
    //         <div>
    //           <Link to="/login">Login</Link>
    //           <Link to="/signup">Signup</Link>
    //         </div>
    //       )}
    //     </nav>
    //   </div>
    // </header> */
  );
};

export default Navbar;
