import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login_api from "../../Api/Login/login.service";
import { setLocalStorageItem } from "../../Services/localStorage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();

  const notifyS = (e: any) => toast(e);

  const notifyE = (e: any) => toast.error(e);

  const onPost = async (value: any) => {
    await Login_api.handleLogin(value)
      .then((res: any) => {
        setLocalStorageItem("AUTH_TOKEN", res.token);
        notifyS(res.message);
        navigate("/home/support_page");
      })
      .catch((err: any) => {
        notifyE(err.response.data.message);
      });
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    // validationSchema: Yup.object({
    //   username: Yup.string()
    //     .email("Invalid email address")
    //     .required("Email Required"),
    //   password: Yup.string().required("Password Required"),
    // }),
    onSubmit: (values) => {
      onPost(values);
    },
  });

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <div className="flex min-h-full flex-1 flex-col  justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://e7.pngegg.com/pngimages/119/921/png-clipart-flower-dahlia-flower-flower-garden-annual-plant-thumbnail.png"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={formik.handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="text"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="off"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.username && formik.errors.username ? (
                  <div>{formik.errors.username}</div>
                ) : null}
              </div>
            </div>

            <div className="mt-4">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="off"
                  className="block w-full  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div>{formik.errors.password}</div>
                ) : null}
              </div>
            </div>

            <div className="mt-10">
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-sky-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Login
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <Link
              to="/register"
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>

      <div></div>
    </>
  );
}
