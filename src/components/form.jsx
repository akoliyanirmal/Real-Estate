import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    show: false,
    message: "",
    type: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, message } = formData;

    if (!name || !phone || !message) {
      setAlert({
        show: true,
        message: "Please fill in all fields.",
        type: "error",
      });
      return;
    }

    const whatsappMessage = `New submission from ${name} (${phone}): ${message}`;
    const whatsappURL = `https://wa.me/919099073826?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      phone: "",
      message: "",
    });

    setAlert({
      show: true,
      message: "Form submitted successfully!",
      type: "success",
    });

    setTimeout(() => {
      setAlert({
        show: false,
        message: "",
        type: "",
      });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div id="contactUs" className="p-4 sm:p-6 lg:p-8">
      <div className="flex justify-center items-center p-3">
        <button className="mt-24 mb-4 bg-[#EFE1D1] dark:bg-[#334756] text-black dark:text-white px-4 py-1 rounded-2xl h-8 w-28 font-black text-xs uppercase cursor-pointer">
          contacts
        </button>
      </div>

      {alert.show && (
        <div className="flex justify-center items-center">
          <div
            className={`mt-2 text-sm ${
              alert.type === "error" ? "text-red-500" : "text-green-500"
            }`}
          >
            {alert.message}
          </div>
        </div>
      )}

      <div className="flex justify-center items-center">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="rounded-xl py-3 px-4 shadow-md w-full h-14 dark:bg-gray-600 dark:text-white"
              />
            </div>
            <div className="flex flex-col">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="rounded-xl py-3 px-4 shadow-md w-full h-14 dark:bg-gray-600 dark:text-white"
              />
            </div>
            <div className="flex flex-col">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                className="rounded-xl py-3 px-4 shadow-md w-full h-28 dark:bg-gray-600 dark:text-white"
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-6 bg-[#3361FF] hover:bg-[#11266e] rounded-2xl text-white font-semibold"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
