import { memo } from "react";

export const JobApplication = memo(function JobApplication() {
  return (
    <form method="post" action="" className="p-6 shadow-2xl max-w-2xl mx-auto bg-white rounded-lg">
      <h1 className="uppercase text-blue-800 text-center text-xl font-bold mb-2">
        Job Application
      </h1>
      <h4 className="text-center text-gray-600 mb-6">
        Please complete the form below to apply for a position with us.
      </h4>

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

      {/* Birth Date Section */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">
          Birth Date<span className="text-red-500">*</span>
        </label>
        <div className="grid grid-cols-3 gap-3">
          <select
            name="b_year"
            className="border p-2 rounded w-full"
            defaultValue=""
          >
            <option value="" disabled>Year</option>
            <option value="2001">2001</option>
            <option value="2000">2000</option>
            <option value="1999">1999</option>
            <option value="1998">1998</option>
            <option value="1997">1997</option>
            <option value="1996">1996</option>
            <option value="1995">1995</option>
            <option value="1994">1994</option>
            <option value="1993">1993</option>
            <option value="1992">1992</option>
            <option value="1991">1991</option>
            <option value="1990">1990</option>
            <option value="1989">1989</option>
            <option value="1988">1988</option>
            <option value="1987">1987</option>
            <option value="1986">1986</option>
            <option value="1985">1985</option>
            <option value="1984">1984</option>
            <option value="1983">1983</option>
            <option value="1982">1982</option>
            <option value="1981">1981</option>
            <option value="1980">1980</option>
            <option value="1979">1979</option>
            <option value="1978">1978</option>
            <option value="1977">1977</option>
            <option value="1976">1976</option>
            <option value="1975">1975</option>
            <option value="1974">1974</option>
            <option value="1973">1973</option>
            <option value="1972">1972</option>
            <option value="1971">1971</option>
            <option value="1970">1970</option>
          </select>

          <select
            name="b_month"
            className="border p-2 rounded w-full"
            defaultValue=""
          >
            <option value="" disabled>Month</option>
            <option value="Jan">Jan</option>
            <option value="Feb">Feb</option>
            <option value="Mar">Mar</option>
            <option value="Apr">Apr</option>
            <option value="May">May</option>
            <option value="Jun">Jun</option>
            <option value="Jul">Jul</option>
            <option value="Aug">Aug</option>
            <option value="Sep">Sep</option>
            <option value="Oct">Oct</option>
            <option value="Nov">Nov</option>
            <option value="Dec">Dec</option>
          </select>

          <select
            name="b_day"
            className="border p-2 rounded w-full"
            defaultValue=""
          >
            <option value="" disabled>Day</option>
            {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
              <option key={day} value={day}>{day}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Marital Status and Position */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
        <input
          name="marital_st"
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Marital Status"
        />
        <input
          name="applied_for"
          type="text"
          className="border p-2 rounded w-full"
          placeholder="Position Applying for"
        />
      </div>

      {/* Additional Information Section */}
      <div className="mb-4">
        <label className="block mb-2 font-medium">Additional Information</label>
        <textarea
          name="query"
          className="border p-2 rounded w-full"
          id="query"
          placeholder="Additional Information"
          rows={3}
        />
      </div>

      {/* Captcha and Submit */}
      <input type="hidden" name="question" value="6X2" />
      
      <div className="flex items-center gap-4 flex-wrap">
        <strong className="text-lg">6X2 =</strong>
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