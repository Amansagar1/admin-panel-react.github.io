import React, { useState } from "react";

function AddNewProductsPages() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setImageUrl(imageUrl);
  };

  return (
    <div className="bg-[#4E657A] h-[90%] py-8 px-20 flex justify-center gap-10">
      <div className="bg-[#435D71] h-[90%] py-8 px-20 flex justify-center gap-1">
        <div className="bg-[#435D71]  p-5 w-[300px]">
          <h1 className="font-bold text-white p-5">Add Product</h1>
          <div className="">
            <h4 className="text-white p-5">Product Name</h4>
            <input
              type="text"
              className="p-4 pl-[40%]   h-12 bg-[#54657D]"
            />

            <h4 className="text-white p-5">Description</h4>
            <textarea
              className="p-4 pl-[46%] h-20  resize-y bg-[#54657D]"
              rows="4"
            ></textarea>

            <h4 className="text-white p-5">Category</h4>
            <select
              id="account"
              className="bg-[#50657B]  w-[115%]   p-4 text-[#acc6de;] grid"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Select Category</option>
              <option value="Arrival">New Arrival</option>
              <option value="Most-Populer">Most Popular</option>
              <option value="Trending">Trending</option>
            </select>

            <div className="flex">
              <div>
                <h4 className="text-white p-4">Expire Date</h4>
                <input type="text" className="bg-[#54657D] p-4 w-[100%]" />
              </div>
              <div className="">
                <h4 className="text-white p-4">Units In Stock</h4>
                <input
                  type="text"
                  className=" ml-10 p-4 w-[100%] bg-[#54657D]"
                />
              </div>
            </div>
          </div>
          <div className="flex">
            <button className="w-full h-14 p-4 m-5 bg-yellow-500 text-white hover:text-yellow-500 border hover:bg-[#435D71]">
              ADD PRODUCT NOW
            </button>
          </div>
        </div>
        <div className="bg-[#435D71] p-5 ml-5 w-[400px] ">
          <img
            id="image"
            src={imageUrl}
            className="p-20 h-[50%] pl-20 w-full ml-10 mt-10  bg-slate-400"
            alt=""
          />

          <input
            id="inimg"
            type="file"
            onChange={handleFileChange}
            className="hidden"
          />

          <button 
            className="w-full h-14 p-4 m-10 bg-yellow-500 text-white hover:bg-[#435D71] border hover:text-yellow-500"
            onClick={() => {
              document.getElementById("inimg").click();
            }}
          >
            UPDATE PROFILE PICTURE
           </button>
        </div>
      </div>
    </div>
  );
}

export default AddNewProductsPages;
