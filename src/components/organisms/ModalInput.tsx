import React from "react";

const ModalInput = () => {
  return (
    <div className="absolute w-screen h-screen bg-black box-border bg-opacity-50 flex justify-center items-center">
      <section className="bg-white rounded border h-4/5 w-1/2 px-4 py-2">
        <h1 className="text-lg text-slate-500 font-bold">
          Tambah Data Makanan
        </h1>
        <link
          rel="stylesheet"
          href="https://unpkg.com/flowbite@1.4.4/dist/flowbite.min.css"
        />
        <div className="max-w-2xl mx-auto">
          <form className="flex-col items-center">
            <label htmlFor="" className="sr-only">
              Nama Barang
            </label>
            <div className="relative w-full">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder=""
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ModalInput;
