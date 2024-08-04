import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";

interface FormData {
  user_name: string;
  user_email: string;
  message: string;
}

const schema = yup.object().shape({
  user_name: yup
    .string()
    .min(2, "The name must contain at least 2 characters")
    .required("Name is required"),
  user_email: yup
    .string()
    .email("Invalid email format")
    .min(2, "Email must contain at least 2 characters")
    .required("Email is mandatory")
    .test("is-valid", "Invalid email format", (value) => {
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value);
    }),
  message: yup
    .string()
    .min(2, "The message must contain at least 2 characters")
    .required("Notification is mandatory"),
});

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async () => {
    try {
      if (form.current) {
        await emailjs.sendForm(
          "service_raqnjx6",
          "template_4ztwcda",
          form.current,
          "zjtgz3mXO1oe1P8Yh"
        );
        console.log("Email sent successfully");
        console.log("message text");
        reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
    console.log(form.current);
  };

  return (
    <>
      <div className="mt-12">
        <div className="text-center">
          <p className="text-xl">( * )</p>
          <p className="text-4xl mt-4">{`<Contacts_me>`}</p>
          <p className="max-w-[700px] m-auto pt-4 font-mono">
            "Get in touch with me. Whether you have a project in mind or just
            want to say hello, I'd love to hear from you. Fill out the form
            below and I'll get back to you as soon as possible."
          </p>
        </div>
      </div>
      <form
        ref={form}
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-6xl mx-auto p-6 mt-6 text-white font-mono"
      >
        <div className="mb-6 relative">
          <input
            {...register("user_name")}
            type="text"
            id="user_name"
            name="user_name"
            className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-blue-400 text-white"
          />
          <label
            htmlFor="user_name"
            className={`absolute left-0 -top-3.5 text-gray-400 text-sm transition-all`}
          >
            _name*
          </label>
          {errors.user_name && (
            <p className="text-red-400 text-xs mt-1">
              {errors.user_name.message}
            </p>
          )}
        </div>

        <div className="mb-6 relative">
          <input
            {...register("user_email")}
            type="text"
            id="user_email"
            name="user_email"
            className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-blue-400 text-white"
          />
          <label
            htmlFor="user_email"
            className={`absolute left-0 -top-3.5 text-gray-400 text-sm transition-all`}
          >
            _email*
          </label>
          {errors.user_email && (
            <p className="text-red-400 text-xs mt-1">
              {errors.user_email.message}
            </p>
          )}
        </div>

        <div className="mb-6 relative">
          <textarea
            {...register("message")}
            id="message"
            name="message"
            className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-blue-400 text-white resize-none min-h-[100px]"
          />
          <label
            htmlFor="message"
            className={`absolute left-0 -top-3.5 text-gray-400 text-sm transition-all`}
          >
            _message*
          </label>
          {errors.message && (
            <p className="text-red-400 text-xs mt-1">
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-400 text-gray-900 py-2 px-4 hover:bg-blue-500 transition duration-300"
        >
          {"{send}"}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
