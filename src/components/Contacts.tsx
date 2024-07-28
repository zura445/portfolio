import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "emailjs-com";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const schema = yup.object().shape({
  name: yup
    .string()
    .min(2, "სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს")
    .required("სახელი სავალდებულოა"),
  email: yup
    .string()
    .email("არასწორი ელ-ფოსტის ფორმატი")
    .min(2, "ელ-ფოსტა უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს")
    .required("ელ-ფოსტა სავალდებულოა"),
  message: yup
    .string()
    .min(2, "შეტყობინება უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს")
    .required("შეტყობინება სავალდებულოა"),
});

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      const templateParams = {
        from_name: data.name,
        from_email: data.email,
        to_email: "zuratetra@gmail.com",
        message: data.message,
      };

      await emailjs.send("zjtgz3mXO1oe1P8Yh", "service_g82e5so");

      console.log("Email sent successfully!");
      reset();
    } catch (error) {
      console.error("Failed to send email:", error);
    }
  };

  return (
    <>
      <div className="mt-12">
        <div className="text-center">
          <p className="text-xl">( * )</p>
          <p className="text-4xl mt-4">{`<Contacts_me>`}</p>
          <p className="max-w-[700px] m-auto pt-4 font-mono">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            vel, autem a eum quas sit nobis voluptatum voluptates doloribus
            porro veniam eveniet, rem reprehenderit optio quidem dolorem minima
            odit illum.
          </p>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-6xl mx-auto p-6 mt-6 text-white"
      >
        <div className="mb-6 relative">
          <input
            {...register("name")}
            type="text"
            id="name"
            className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-blue-400 text-white"
          />
          <label
            htmlFor="name"
            className={`absolute left-0 -top-3.5 text-gray-400 text-sm transition-all
                      ${
                        errors.name ? "text-red-400" : "text-blue-400"
                      } -top-3.5 text-xs`}
          >
            _name*
          </label>
          {errors.name && (
            <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
          )}
        </div>

        <div className="mb-6 relative">
          <input
            {...register("email")}
            type="email"
            id="email"
            className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-blue-400 text-white"
          />
          <label
            htmlFor="email"
            className={`absolute left-0 -top-3.5 text-gray-400 text-sm transition-all
                      ${
                        errors.email ? "text-red-400" : "text-blue-400"
                      } -top-3.5 text-xs`}
          >
            _email*
          </label>
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
          )}
        </div>

        <div className="mb-6 relative">
          <textarea
            {...register("message")}
            id="message"
            className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-blue-400 text-white resize-none min-h-[100px]"
          />
          <label
            htmlFor="message"
            className={`absolute left-0 -top-3.5 text-gray-400 text-sm transition-all
                      ${
                        errors.message ? "text-red-400" : "text-blue-400"
                      } -top-3.5 text-xs`}
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
