import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { Link } from "react-router-dom";

function ProductsPages() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [showCategoryPopup, setShowCategoryPopup] = useState(false);
  const [newCategoryName, setNewCategoryName] = useState("");
 

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://reactmusicplayer-ab9e4.firebaseio.com/project-data.json"
      );
      setProducts(response.data.productsPage.products);
      setCategories(response.data.productsPage.categories);
    };
    fetchData();
  }, []);

  const handleAddCategory = () => {
    setShowCategoryPopup(!showCategoryPopup);
 
  };

  const handleCategoryNameChange = (e) => {
    setNewCategoryName(e.target.value);
  };

  const handleAddNewCategory = () => {
    if (newCategoryName.trim() !== "") {
      setCategories([...categories, newCategoryName]);
      setNewCategoryName("");
      setShowCategoryPopup(false);
    }
  };

  const handleDeleteProduct = (product) => {
    const updatedProducts = products.filter(
      (item) => item.name !== product.name
    );
    setProducts(updatedProducts);
  };

  const handleSelectProduct = (product) => {
    const isSelected = selectedProducts.includes(product);
    if (isSelected) {
      const updatedSelectedProducts = selectedProducts.filter(
        (item) => item.name !== product.name
      );
      setSelectedProducts(updatedSelectedProducts);
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const handleDeleteSelectedProducts = () => {
    const updatedProducts = products.filter(
      (item) => !selectedProducts.includes(item)
    );
    setProducts(updatedProducts);
    setSelectedProducts([]);
  };


  const handleDeleteCategory = (category) => {
    console.log(category)
    const updatedCategories = categories.filter((item) => item !== category);
    
    setCategories(updatedCategories);
  };



  return (
    <div className="bg-[#4E657A] h-screen py-8 px-20 flex justify-center gap-10">
      <div className="bg-[#435D71] p-5 w-[750px]">
        <div className="h-[75%] overflow-auto">
          <div className="bg-[#496176] grid grid-cols-6 text-white pl-20 p-4 font-bold items-center justify-center bord">
            <div className="col-span-2">PRODUCT NAME</div>
            <div className="col-span-1">UNIT SOLD</div>
            <div className="col-span-1">IN STOCK</div>
            <div className="col-span-1">EXPIRE DATE</div>
          </div>

          {products.map((item, i) => (
            <div
              key={i}
              className="bg-[#51697E] grid grid-cols-7 text-white p-2 font-bold items-center justify-center hover:bg-[#496176] border-t-[1px] border-[#000]"
            >
              <input
                type="checkbox"
                className="w-5 h-5 rounded-full ml-4"
                checked={selectedProducts.includes(item)}
                onChange={() => handleSelectProduct(item)}
              />
              <div className="col-span-2">{item.name}</div>
              <div className="col-span-1">{item.unitSold}</div>
              <div className="col-span-1">{item.stock}</div>
              <div className="col-span-1">{item.expireDate}</div>
              <button
                className="bg-[#384E65] ml-10 w-10 h-10 rounded-full items-center justify-center "
                onClick={() => handleDeleteProduct(item)}
              >
                <FontAwesomeIcon
                  icon={faTrashAlt}
                  className="text-white  hover:bg-[#496176] hover:opacity-50 "
                />
              </button>
              <div className="col-span-1"></div>
            </div>
          ))}
        </div>

        <Link
          to="/add-new-product"
          className="bg-yellow-500 w-full flex justify-center items-center text-white text-lg font-bold p-3 mt-4 hover:bg-[#496176] hover:text-yellow-500 hover:border"
        >
          ADD NEW PRODUCT
        </Link>

        <button
          className="bg-yellow-500 w-full text-white text-lg font-bold p-3  mt-4 hover:bg-[#496176] hover:text-yellow-500 hover:border"
          onClick={handleDeleteSelectedProducts}
          disabled={selectedProducts.length === 0}
        >
          DELETE SELECTED PRODUCTS
        </button>
      </div>

      <div className="bg-[#435D71] w-[400px] h-[600px] font-bold text-white text-1xl p-8 ">
        Product Categories
        <div className="h-[75%] p-4 mt-5  overflow-auto ">
          {categories.map((item, i) => (
            <div
              key={i}
              className="bg-[#51697E] grid grid-cols-2 text-white p-6 font-bold items-center justify-center hover:bg-[#496176] border-t-[1px] border-[#000] "
            >
              {item}

               <button
        className="bg-[#384E65] ml-20 w-8 h-8 rounded-full flex items-center justify-center"
        onClick={() => handleDeleteCategory(item)}
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          className="text-white hover:bg-[#496176] hover:opacity-50"
        />
      </button>
            </div>
          ))}
        </div>
        <button
          className=" bg-yellow-500 w-full text-white text-lg font-bold p-4 m-2 hover:bg-[#496176] hover:text-yellow-500 hover:border "
          onClick={handleAddCategory}
        >
          ADD NEW CATEGORIES
        </button>
      </div>

      {showCategoryPopup && (
        <div className="popup-container">
          <input
            type="text"
            placeholder="Enter category name"
            value={newCategoryName}
            onChange={handleCategoryNameChange}
          />
          <button   className="flex justify-center   m-1  p-1 items-center bg-yellow-500 hover:border-yellow-500 hover:bg-[#496176] hover:text-yellow-500 hover:border " onClick={handleAddNewCategory} >Add Category</button>
        </div>
      )}
    </div>
  );
}

export default ProductsPages;
