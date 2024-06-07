import React, { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Contact = () => {
  const notify = () => toast("Thank you for your message.");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
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

    if (formData.name && formData.email && formData.message) {
      const templateParams = {
        from_name: formData.name,
        email_id: formData.email,
        message: formData.message,
      };

      emailjs
        .send(
          "service_ncxy8d9",
          "template_1ck592o",
          templateParams,
          "tGE9eSDI6yGVhEfXc"
        )
        .then(() => {
          setFormData({
            name: "",
            email: "",
            message: "",
          });
          toast.success("Email sent successfully!");
        });
    } else {
      toast.error("Please fill out all fields.");
    }
  };

  return (
    <div>
      <header>
        <nav className="flex justify-around p-4 text-white">
        <Link to="/">Home</Link>
        <Link className="active" to="/contact">Contact</Link>
        </nav>
      </header>

      <div className="flex justify-center min-h-screen bg-white pt-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center">
            <h1 className="font-montserrat font-bold text-3xl sm:text-5xl text-gray-800">
              GET IN TOUCH
            </h1>
            <h3 className="font-poppins text-black text-center mt-5 max-w-2xl">
              I’m available for freelance work. Connect with me via sending an
              email to my account.
            </h3>
          </div>
          <form
            className="mt-10 space-y-4"
            onSubmit={handleSubmit}
          >
            <input
              className="w-full border font-poppins text-base font-semibold placeholder:font-ranga placeholder:font-normal placeholder:text-black text-black px-4 py-3"
              placeholder="Your Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            <input
              className="w-full border text-black font-poppins text-base font-semibold placeholder:font-ranga placeholder:font-normal placeholder:text-black px-4 py-3"
              placeholder="Your Mail"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              className="w-full h-64 border placeholder:text-black text-black font-poppins text-base font-semibold placeholder:font-ranga placeholder:font-normal placeholder:text-base pl-4 pt-3"
              placeholder="Your Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button className="w-full bg-gray-800 text-white font-poppins font-bold text-2xl py-3 tracking-wider rounded-sm">
              SUBMIT
            </button>
          </form>
          <ToastContainer
            position="bottom-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition:Bounce
          />
        </div>
      </div>
      <footer className="bg-white text-center py-3 font-semibold text-black text-sm">
        ©Shihab 2024. All rights reserved.
      </footer>
    </div>
  );
};

export default Contact;