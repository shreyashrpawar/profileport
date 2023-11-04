import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
import {useGoogleLogin} from '@react-oauth/google';

const Login = () => {
  

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login,Googlelogin, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }
  const handleGoogleLoginSuccess = async(response) => {
    if (response.access_token) {
      // You can access the access token from the 'response' object.
      console.log(response);
      const accessToken = response.access_token;
      
      await Googlelogin(accessToken);
      // Now you can use this accessToken to make API requests on behalf of the user.
      // For example, you can send it to your backend for server-side operations.
    } else {
      // Handle the case where the login was not successful.
      console.error('Google login failed', response.error);
    }
  };
  const loginwithgoogle = useGoogleLogin({onSuccess: handleGoogleLoginSuccess});
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center">

  <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
    <div className="md:w-1/2 px-8 md:px-16">
      <h2 className="font-bold text-2xl text-[#002D74]">Login</h2>
      <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in</p>

      <form className="flex flex-col gap-4 form" onSubmit={handleSubmit}>
        <input className="p-2 mt-8 rounded-xl border" type="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <div className="relative">
          <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2" viewBox="0 0 16 16">
            <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z" />
            <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z" />
          </svg>
        </div>
        <button className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300" disabled={isLoading}>Login</button>
      </form>
      {error && <div className="error">{error}</div>}
      <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
        <hr className="border-gray-400"/>
        <p className="text-center text-sm">OR</p>
        <hr className="border-gray-400"/>
      </div>

      <button onClick={() => loginwithgoogle()} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
      <svg class="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
        </svg>
        Login with Google
      </button>

      <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
        <a href="#">Forgot your password?</a>
      </div>

      <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
        <p>Don't have an account?</p>
        <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300">Register</button>
      </div>
    </div>


    <div className="md:block hidden w-1/2">
      <img className="rounded-2xl" src="/loginimage.png"/>
    </div>
  </div>
</section>
    // <section className="gradient-form h-full bg-neutral-200 dark:bg-neutral-700">
    //   <div className="container h-full p-10">
    //     <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
    //       <div className="w-full">
    //         <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
    //           <div className="g-0 lg:flex lg:flex-wrap">
    //             <div className="px-4 md:px-0 lg:w-6/12">
    //               <div className="md:mx-6 md:p-12">
    //                 <div className="text-center">
    //                   <img
    //                     className="mx-auto w-48"
    //                     src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
    //                     alt="logo"
    //                   />
    //                   <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
    //                     We are The Lotus Team
    //                   </h4>
    //                 </div>

    // <form className="login" onSubmit={handleSubmit}>
    // <p className="mb-4">Please login to your account</p>
      
    // <div className="relative mb-4" data-te-input-wrapper-init>
    //                     <input
    //                       type="email"
    //                       className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
    //                       id="email"
    //                       placeholder="Username"
    //                       name="email"
    //                       autoComplete="email"
    //                       required
    //                       value={email}
    //                       onChange={(e) => setEmail(e.target.value)}
    //                     />

    //                     <label
    //                       for="email"
    //                       className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    //                     >
    //                       Username
    //                     </label>
    //                   </div>

    //                   <div className="relative mb-4" data-te-input-wrapper-init>
    //                     <input
    //                       type="password"
    //                       className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
    //                       id="password"
    //                       placeholder="Password"
    //                       name="password"
    //                       autoComplete="current-password"
    //                       required
    //                       value={password}
    //                       onChange={(e) => setPassword(e.target.value)}
    //                     />
    //                     <label
    //                       for="password"
    //                       className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
    //                     >
    //                       Password
    //                     </label>
    //                   </div>
    //                   <div className="mb-12 pb-1 pt-1 text-center">
    //                     <button
    //                     disabled={isLoading}
    //                       className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
    //                       type="button"
    //                       data-te-ripple-init
    //                       data-te-ripple-color="light"
    //                       style={{
    //                         background:
    //                           "linear-gradient(to right,#C5F3E1, #92F9D1, #2CEA80, #11C328)",
    //                       }}
    //                     >
    //                       Log in
    //                     </button>
                        
    //   {error && <div className="error">{error}</div>}
    //                     <a href="#!">Forgot password?</a>
    //                   </div>

    //                   <div className="flex items-center justify-between pb-6">
    //                     <p className="mb-0 mr-2"><a href="/signup">Don't have an account?</a></p>
    //                     <button
    //                       type="button"
    //                       className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
    //                       data-te-ripple-init
    //                       data-te-ripple-color="light"
    //                     >
    //                     <a href="/signup">Register</a>
    //                     </button>
    //                   </div>
    //                 </form>
    //               </div>
    //             </div>

    //             <div
    //               className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
    //               style={{
    //                 background:
    //                   "linear-gradient(to right, #C5F3E1, #92F9D1, #2CEA80, #11C328)",
    //               }}
    //             >
    //               <div className="px-4 py-6 text-white md:mx-6 md:p-12">
    //                 <h4 className="mb-6 text-xl font-semibold">
    //                   We are more than just a company
    //                 </h4>
    //                 <p className="text-sm">
    //                   Lorem ipsum dolor sit amet, consectetur adipisicing elit,
    //                   sed do eiusmod tempor incididunt ut labore et dolore magna
    //                   aliqua. Ut enim ad minim veniam, quis nostrud exercitation
    //                   ullamco laboris nisi ut aliquip ex ea commodo consequat.
    //                 </p>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>
  )
}

export default Login