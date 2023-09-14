import { useState } from "react";
import './FilterSection.css'
const FilterSection = ({ handleChange, clearFilter }) => {
  const [toggle, setToggle] = useState(false);
  const [customPrice, setCustomPrice] = useState({ min: "", max: "" });

  const handleCustomPrice = ()=>{
    var priceRadioInput = [...document.querySelectorAll('input[type="radio"][name="price"]')];
    priceRadioInput.forEach((input)=>{
      input.checked = false;
    })
    if(customPrice.min !== "" && customPrice.max !== ""){
      if(parseInt(customPrice.min)>= parseInt(customPrice.max)){
        alert("Enter Valid Min-Max range");
        return;
      }
       handleChange({
        target: {
          name: "price",
          value: `${customPrice.min} - ${customPrice.max}`
        }
       })
    }
   
  }

  return (
    <div>
      <div className="filter_wrapper">
        <div></div>
        <div>
          {toggle ? (
            <div className="">
              <div
                className="filter_button"
                onClick={() => setToggle(false)}
              >
                <span>Close</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 m-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </div>
              <div className="filter_menu">
                <button
                  type="button"
                  class="filter_menu_button"
                  onClick={() => {
                    clearFilter();
                    setToggle(false);
                  }}
                >
                  Clear Filters
                </button>
                <div>
                  <span className="span_heading">Category :</span>
                  <div className="input_heading">
                    <div className="input_container">
                      <input
                        type="radio"
                        name="category"
                        value="mensShirt"
                        className="radio_input"
                        id="MensShirt"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="MensShirt">
                        Wood
                      </label>
                    </div>
                    <div className="input_container">
                      <input
                        type="radio"
                        name="category"
                        value="mensBlazer"
                        id="MensBlazer"
                        className="radio_input"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="mensBlazer">
                        Steel 
                      </label>
                    </div>
                    <div className="input_container">
                      <input
                        type="radio"
                        name="category"
                        value="womensShirt"
                        id="WomensShirt"
                        className="radio_input"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="WomensShirt">
                        Aluminium
                      </label>
                    </div>
                    <div className="input_container">
                      <input
                        type="radio"
                        name="category"
                        value="womensBlazer"
                        id="WomensBlazer"
                        className="radio_input"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="WomensBlazer">
                        Glass 
                      </label>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="span_heading">Price Range :</span>
                  <div className="input_heading">
                    <div className="hover:bg-gray-700 rounded px-2 my-1">
                      <input
                        type="radio"
                        name="price"
                        value="max - 1000"
                        id="under1000"

                        className="mr-1"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="under1000">
                        under 1000
                      </label>
                    </div>
                    <div className="input_container">
                      <input
                        type="radio"
                        name="price"
                        value="1000 - 5000"
                        id="1000-5000"
                        className="radio_input"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="1000-5000">
                        1000 - 5000
                      </label>
                    </div>
                    <div className="input_container">
                      <input
                        type="radio"
                        name="price"
                        value="5000 - 15000"
                        id="5000-15000"
                        className="radio_input"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="5000-15000">
                        5000 - 15000
                      </label>
                    </div>
                    <div className="input_container">
                      <input
                        type="radio"
                        name="price"
                        value="min - 15000"
                        id="Abovecheckbox"
                        className="radio_input"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="Abovecheckbox">
                        Above 15000
                      </label>
                    </div>
                    <div className="rounded_flex">
                      <input
                        type="text"
                        name="price"
                        placeholder="₹ Min"
                        value={customPrice.min} 
                        id="custom min"
                        className="rounded_flex_input"
                        onChange={(e) =>
                          setCustomPrice((prev) => {
                            return { ...prev, min:e.target.value };
                          })
                        }
                      />

                      <input
                        type="text"
                        name="price"
                        placeholder="₹ Max"
                        value={customPrice.max}
                        id="custom min"
                        className="rounded_flex_input"
                        onChange={(e) =>
                          setCustomPrice((prev) => {
                            return { ...prev, max: e.target.value };
                          })
                        }
                      />
                      <button className="filter_btn" onClick={handleCustomPrice}>Go</button>
                    </div>
                  </div>
                </div>
                <div>
                  <span className="span_heading">Company Rating :</span>
                  <div className="input_heading">
                    <div className="input_container">
                      <input
                        type="radio"
                        name="rating"
                        value={5}
                        id="5star"
                        className="radio_input"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="5star">
                        5 star
                      </label>
                    </div>
                    <div className="input_container">
                      <input
                        type="radio"
                        name="rating"
                        value={4}
                        id="4star"
                        className="mr-1"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="4star">
                        4 star
                      </label>
                    </div>
                    <div className="input_container">
                      <input
                        type="radio"
                        name="rating"
                        value={3}
                        id="3star"
                        className="radio_input"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="3star">
                        3 star
                      </label>
                    </div>
                    <div className="input_container">
                      <input
                        type="radio"
                        name="rating"
                        value={2}
                        id="2star"
                        className="radio_input"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="2star">
                        2 star
                      </label>
                    </div>
                    <div className="input_container">
                      <input
                        type="radio"
                        name="rating"
                        value={1}
                        id="1star"
                        className="radio_input"
                        onChange={handleChange}
                      />
                      <label className="cursor-pointer" for="1star">
                        1 star
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              className="custom-flex"
              onClick={() => setToggle(!toggle)}
            >
              <span>Filter</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="custom-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterSection;