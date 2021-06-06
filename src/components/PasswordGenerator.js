import React from "react";

function PasswordGenerator() {
  return (
    <div>
      <div className="w-full mt-10 sm:mt-0">
        <div className="w-full grid sm:grid-cols-2 gap-8">
          <div className="w-full ml-2 md:col-span-1">
            {/* <div className="px-4 sm:px-none"> */}
            <h2 className="text-xl font-medium leading-6 text-gray-900">
              Good to know:
            </h2>
            <ul className="list-disc">
              <li>
                <p className="mt-1 text-sm text-gray-600">
                  Password generator uses cryptographically secure pseudorandom
                  number generator with all modern browsers.
                </p>
              </li>
              <li>
                <p className="mt-1 text-sm text-gray-600">
                  The password is generated locally in the browser and is not
                  sent to the server.
                </p>
              </li>
              <li>
                <p className="mt-1 text-sm text-gray-600">
                  The web page is loaded with HTTPS and SSL encryption.
                </p>
              </li>
            </ul>
            {/* </div> */}
          </div>
          <div className="w-auto mt-5 md:mt-0 md:col-span-1">
            <form action="#">
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-gray-200 sm:p-6">
                  <div>
                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Password Length
                      </label>
                      <input
                        type="number"
                        className="mt-1 py-1.5 font-normal focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                      ></input>
                    </div>

                    <div className="my-4 flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        ></input>
                      </div>
                      <div className="ml-3 text-sm">
                        <label className="font-medium text-gray-700">
                          A-Z Uppercase Letters
                        </label>
                      </div>
                    </div>

                    <div className="my-4 flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        ></input>
                      </div>
                      <div className="ml-3 text-sm">
                        <label className="font-medium text-gray-700">
                          a-z Lowercase Letters
                        </label>
                      </div>
                    </div>
                    <div className="my-4 flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        ></input>
                      </div>
                      <div className="ml-3 text-sm">
                        <label className="font-medium text-gray-700">
                          0-9 Digits
                        </label>
                      </div>
                    </div>
                    <div className="my-4 flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        ></input>
                      </div>
                      <div className="ml-3 text-sm">
                        <label className="font-medium text-gray-700">
                          !@#$%^&*= Symbols
                        </label>
                      </div>
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Generated Password
                      </label>
                      <input
                        type="text"
                        className="mt-1 py-1.5 font-normal focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="flex px-4 py-3 bg-gray-200 sm:px-6">
                  <button
                    type="submit"
                    className="inline-flex justify-center mr-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Generate
                  </button>
                  <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600">
                    Clear
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PasswordGenerator;
