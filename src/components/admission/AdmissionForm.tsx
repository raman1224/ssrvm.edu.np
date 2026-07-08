import { memo } from "react";

export const AdmissionForm = memo(function AdmissionForm() {
  return (
    <form method="post" action="" className="p-6 shadow-2xl max-w-2xl mx-auto bg-white rounded-lg">
      <h1 className="uppercase text-blue-800 text-center text-xl font-bold mb-6">
        ADMISSION OPEN FOR THE SESSION<br />(2020 - 2021)
      </h1>

      {/* Full Name Section */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">
          Full Name<span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <input
            name="first_name"
            type="text"
            className="border p-2 rounded w-full"
            id="first_name"
            placeholder="First Name"
          />
          <input
            name="middle_name"
            type="text"
            className="border p-2 rounded w-full"
            id="middle_name"
            placeholder="Middle Name"
          />
          <input
            name="last_name"
            type="text"
            className="border p-2 rounded w-full"
            id="last_name"
            placeholder="Last Name"
          />
        </div>
      </div>

      {/* Current Address Section */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">
          Current Address<span className="text-red-500">*</span>
        </label>
        <textarea
          name="current_address"
          className="border p-2 rounded w-full mb-3"
          id="current_address"
          placeholder="Street Address"
          rows={3}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <input
            name="city"
            type="text"
            className="border p-2 rounded w-full"
            id="city"
            placeholder="City"
          />
          <input
            name="state"
            type="text"
            className="border p-2 rounded w-full"
            id="state"
            placeholder="State"
          />
        </div>
      </div>

      {/* Country and Postal Code */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <select 
          name="country" 
          id="country" 
          className="border p-2 rounded w-full"
          defaultValue=""
        >
          <option value="" disabled>Please Select Country</option>
          <option value="India">India</option>
          <option value="Nepal">Nepal</option>
          <option value="Bhutan">Bhutan</option>
        </select>
        <input
          name="pin"
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Postal / zip code"
        />
      </div>

      {/* Contact Information */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <input
          name="mob"
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Contact Number"
        />
        <input
          name="email"
          type="email"
          className="border p-2 rounded w-full"
          placeholder="Email Address"
        />
      </div>

      {/* Query Section */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Any Query</label>
        <textarea
          name="query"
          className="border p-2 rounded w-full"
          id="query"
          placeholder="Query"
          rows={3}
        />
      </div>

      {/* Captcha and Submit */}
      <input type="hidden" name="question" value="2+5" />
      
      <div className="flex items-center gap-4 flex-wrap">
        <strong className="text-lg">2+5 =</strong>
        <input
          name="answer"
          type="text"
          className="border p-2 rounded flex-1 min-w-[150px]"
          placeholder="Answer"
        />
        <input
          name="submit"
          type="submit"
          value="Submit"
          className="bg-blue-800 text-white px-6 py-2 rounded-md hover:bg-blue-700 cursor-pointer transition-colors"
        />
      </div>
    </form>
  );
});