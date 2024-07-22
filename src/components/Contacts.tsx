import React, { useState } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    // აქ შეგიძლიათ დაამატოთ ფორმის გაგზავნის ლოგიკა
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
        onSubmit={handleSubmit}
        className="max-w-6xl mx-auto p-6 mt-6 text-white"
      >
        <div className="mb-6 relative">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-blue-400 text-white"
          />
          <label
            htmlFor="name"
            className={`absolute left-0 -top-3.5 text-gray-400 text-sm transition-all
                      ${formData.name ? "text-blue-400 -top-3.5 text-xs" : ""}`}
          >
            _name*
          </label>
        </div>

        <div className="mb-6 relative">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-blue-400 text-white"
          />
          <label
            htmlFor="email"
            className={`absolute left-0 -top-3.5 text-gray-400 text-sm transition-all
                      ${
                        formData.email ? "text-blue-400 -top-3.5 text-xs" : ""
                      }`}
          >
            _email*
          </label>
        </div>

        <div className="mb-6 relative">
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-transparent border-b border-gray-600 py-2 focus:outline-none focus:border-blue-400 text-white resize-none min-h-[100px]"
          />
          <label
            htmlFor="message"
            className={`absolute left-0 -top-3.5 text-gray-400 text-sm transition-all
                      ${
                        formData.message ? "text-blue-400 -top-3.5 text-xs" : ""
                      }`}
          >
            _message*
          </label>
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
