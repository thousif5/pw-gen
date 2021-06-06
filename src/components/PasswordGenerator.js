import React from "react";

function PasswordGenerator() {
  function generatePassword(e) {
    e.preventDefault();
    var length =
      parseInt(document.getElementById("password-length").value) ?? 0;
    var uppercase = document.getElementById("uppercase").checked;
    var lowercase = document.getElementById("lowercase").checked;
    var numbers = document.getElementById("numbers").checked;
    var symbols = document.getElementById("symbols").checked;

    if (length >= 4 && (uppercase || lowercase || numbers || symbols)) {
      var data = [];
      var x = 0;
      if (uppercase) {
        for (var i = 0; i < 26; i++)
          data[x++] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[i];
      }
      if (lowercase) {
        for (var j = 0; j < 26; j++)
          data[x++] = "abcdefghijklmnopqrstuvwxyz"[j];
      }
      if (numbers) {
        for (var a = 0; a < 10; a++) data[x++] = "0123456789"[a];
      }
      if (symbols) {
        for (var b = 0; b < 9; b++) data[x++] = "!@#$%^&*="[b];
      }

      var txt = "";
      var c, k;
      if (
        typeof window.crypto.getRandomValues === "function" ||
        typeof window.msCrypto.getRandomValues === "function"
      ) {
        var crypto = window.crypto || window.msCrypto; // for IE 11
        var array = new Uint16Array(length);
        crypto.getRandomValues(array);
        for (var g = 0; g < length; g++) {
          k = Math.floor((array[g] / Math.pow(2, 16)) * data.length);
          c = data[k];
          txt += c;
        }
        document.getElementById("generated-password").value = txt;
      } else if (typeof Math.random === "function") {
        for (var h = 0; h < length; h++) {
          k = Math.floor(Math.random() * data.length);
          c = data[k];
          txt += c;
        }
        document.getElementById("generated-password").value = txt;
      }
    } else {
      document.getElementById("generated-password").value =
        "Missing required data";
    }
  }

  function clear(e) {
    e.preventDefault();
    document.getElementById("generated-password").value = "";
  }

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
                        id="password-length"
                        type="number"
                        min="4"
                        defaultValue={8}
                        className="mt-1 px-2 py-1.5 font-normal focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                      ></input>
                    </div>

                    <div className="my-4 flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="uppercase"
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
                          id="lowercase"
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
                          id="numbers"
                          type="checkbox"
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        ></input>
                      </div>
                      <div className="ml-3 text-sm">
                        <label className="font-medium text-gray-700">
                          0-9 Numbers
                        </label>
                      </div>
                    </div>
                    <div className="my-4 flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="symbols"
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
                        id="generated-password"
                        type="text"
                        className="mt-1 px-2 py-1.5 font-normal md:text-xs focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md"
                        readOnly
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="flex px-4 py-3 bg-gray-200 sm:px-6">
                  <button
                    className="inline-flex justify-center mr-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={generatePassword}
                  >
                    Generate
                  </button>
                  <button
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-600"
                    onClick={clear}
                  >
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
