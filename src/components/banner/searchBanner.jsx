"use client";
import { useState, useEffect, useRef } from "react";
import ProductsData from "@/data/Products";
import ProductSearchModal from "../header/elements/ProductSearchModal";
import Style from "./searchBanner.module.scss";
import Image from "next/image";
import ProductThumbnail from "../product/elements/ProductThumbnail";
import ProductRating from "../product/elements/ProductRating";
import ProductTitle from "../product/elements/ProductTitle";
import ProductPrice from "../product/elements/ProductPrice";
import ActionButtons from "../product/elements/ActionButtons";
const SearchBanner = () => {
  const [searchResultVisibility, setSearchResultVisibility] = useState(false);
  const [searchToggle, setSearchToggle] = useState(true);
  const containerRef = useRef(null);
  const inputRef = useRef(null);
  const searchBoxToggleHandler = () => {
    setSearchToggle((toggler) => !toggler);
  };
  const inputClickhandel = () => {
    setSearchResultVisibility(true);
  }


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target) &&
        inputRef.current &&
        !inputRef.current.contains(event.target)
      ) {
        setSearchResultVisibility(false);
      }
    };

    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);
    
    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const getProducts = ProductsData;
  const [productQuery, setProductQuery] = useState([]);
 
  const SearchInputHandler = (inputValue) => {
    if (inputValue.length > 0) {
      let matchingData = getProducts.filter((product) =>
        product.title.toLowerCase().includes(inputValue.toLowerCase())
      );
      setProductQuery(matchingData);
    } else {
      setProductQuery([]);
    }
  };
  return (
    <section className={`${Style.banner}`}>
      <div className={`py-5 h-100 ${Style.gradientColor}`}>
        <div className="container d-grid place-items-center h-100">
          <div className="col-md-8">
          <h1 className={`text-white fw-bolder text-center ${Style.heading}`}>
          Discover, Compare and Buy right <br/>
          software for your business
          </h1>
            <div ref={inputRef} className="input-group d-flex bg-white rounded-pill p-2">
              <input
              onChange={(e) => SearchInputHandler(e.target.value)}
              onClick={inputClickhandel}
                type="text"
                className="form-control w-auto bg-transparent border-0 shadow-none"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
                className={`btn btn-outline-secondary w-auto rounded-circle ${Style.searchButton}`}
                type="button"
                id="button-addon2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g id="search_icon" transform="translate(-12.625 -10)">
                    <rect
                      id="Rectangle_196"
                      data-name="Rectangle 196"
                      width="24"
                      height="24"
                      transform="translate(12.625 10)"
                      fill="none"
                    />
                    <g
                      id="Group_91"
                      data-name="Group 91"
                      transform="translate(17.625 15)"
                    >
                      <g id="search">
                        <path
                          id="Shape"
                          d="M13.3,14a.291.291,0,0,1-.206-.085L9.023,9.848a5.554,5.554,0,1,1,.825-.825l4.067,4.067a.293.293,0,0,1,0,.412l-.413.413A.289.289,0,0,1,13.3,14ZM5.541,1.166A4.375,4.375,0,1,0,9.917,5.541,4.38,4.38,0,0,0,5.541,1.166Z"
                          fill="#000000"
                          stroke="#000000"
                          stroke-miterlimit="10"
                          stroke-width="0.5"
                        />
                      </g>
                    </g>
                  </g>
                </svg>
              </button>
              <div
              ref={containerRef}
                className={`position-absolute bottom-0 left-0 bg-white shadow rounded-3 p-4 ${searchResultVisibility && Style.active} ${Style.searchResultContainer}`}
              >

{productQuery.length > 0 ?
                productQuery.map((data) => (
                  <div className="axil-product-list" key={data.id}>
					<div>
						<ProductThumbnail
						productThumb={data}
						width={120}
						height={120}
						/>
					</div>
                    <div className="product-content">
                      <ProductRating rating={data} />
					  <div >
                      	<ProductTitle productTitle={data} titleTag="h6" />
					  </div>
                      <ProductPrice price={data} />
					  <ActionButtons productAction={data} wishlistBtn cartBtn/>
                    </div>
                  </div>
                )) :
                <div className="">
                  <label className="text-black">Popular Categories</label>
                  <div className="d-flex flex-wrap gap-3 mt-4">
                    <button className="btn rounded-pill border w-auto px-4 fs-5 py-3">
                      Accounting Software
                    </button>
                    <button className="btn rounded-pill border w-auto px-4 fs-5 py-3">
                      Stock Market Software
                    </button>
                    <button className="btn rounded-pill border w-auto px-4 fs-5 py-3">
                      POS Software
                    </button>
                    <button className="btn rounded-pill border w-auto px-4 fs-5 py-3">
                      CRM Software
                    </button>
                    <button className="btn rounded-pill border w-auto px-4 fs-5 py-3">
                      HR Software
                    </button>
                    <button className="btn rounded-pill border w-auto px-4 fs-5 py-3">
                      Digital Signature Software
                    </button>
                    <button className="btn rounded-pill border w-auto px-4 fs-5 py-3">
                      Billing And Invoicing Software
                    </button>
                    <button className="btn rounded-pill border w-auto px-4 fs-5 py-3">
                      Plagiarism Checker
                    </button>
                  </div>
                  <label className="text-black mt-5">Trending Products</label>
                  <div className="d-flex flex-wrap gap-3 mt-4">
                    <button className="btn rounded-pill border w-auto px-4 fs-5 d-flex gap-3 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                      >
                        <path
                          id="trending_icon"
                          d="M259.588,93.818a1.586,1.586,0,0,0,.392.164h.157a.227.227,0,0,0,.157-.041.889.889,0,0,0,.627-.453l2.586-4.239,1.92,1.317a.942.942,0,0,0,1.371-.329l2.742-4.486.549.37a.629.629,0,0,0,.7,0,.759.759,0,0,0,.313-.659l-.235-2.84a.647.647,0,0,0-.313-.535.728.728,0,0,0-.588-.082l-2.546.946a.668.668,0,0,0-.431.576.646.646,0,0,0,.313.659l.549.37-2.233,3.621-1.92-1.317a.958.958,0,0,0-.666-.164,1.032,1.032,0,0,0-.705.453l-3.134,5.1a1.324,1.324,0,0,0,.392,1.564Z"
                          transform="translate(-259.106 -81.983)"
                          fill="#24272c"
                          opacity="0.7"
                        />
                      </svg>
                      Salesforce CRM
                    </button>
                    <button className="btn rounded-pill border w-auto px-4 fs-5 d-flex gap-3 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                      >
                        <path
                          id="trending_icon"
                          d="M259.588,93.818a1.586,1.586,0,0,0,.392.164h.157a.227.227,0,0,0,.157-.041.889.889,0,0,0,.627-.453l2.586-4.239,1.92,1.317a.942.942,0,0,0,1.371-.329l2.742-4.486.549.37a.629.629,0,0,0,.7,0,.759.759,0,0,0,.313-.659l-.235-2.84a.647.647,0,0,0-.313-.535.728.728,0,0,0-.588-.082l-2.546.946a.668.668,0,0,0-.431.576.646.646,0,0,0,.313.659l.549.37-2.233,3.621-1.92-1.317a.958.958,0,0,0-.666-.164,1.032,1.032,0,0,0-.705.453l-3.134,5.1a1.324,1.324,0,0,0,.392,1.564Z"
                          transform="translate(-259.106 -81.983)"
                          fill="#24272c"
                          opacity="0.7"
                        />
                      </svg>
                      Quick Heal AntiVirus Pro
                    </button>
                    <button className="btn rounded-pill border w-auto px-4 fs-5 d-flex gap-3 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                      >
                        <path
                          id="trending_icon"
                          d="M259.588,93.818a1.586,1.586,0,0,0,.392.164h.157a.227.227,0,0,0,.157-.041.889.889,0,0,0,.627-.453l2.586-4.239,1.92,1.317a.942.942,0,0,0,1.371-.329l2.742-4.486.549.37a.629.629,0,0,0,.7,0,.759.759,0,0,0,.313-.659l-.235-2.84a.647.647,0,0,0-.313-.535.728.728,0,0,0-.588-.082l-2.546.946a.668.668,0,0,0-.431.576.646.646,0,0,0,.313.659l.549.37-2.233,3.621-1.92-1.317a.958.958,0,0,0-.666-.164,1.032,1.032,0,0,0-.705.453l-3.134,5.1a1.324,1.324,0,0,0,.392,1.564Z"
                          transform="translate(-259.106 -81.983)"
                          fill="#24272c"
                          opacity="0.7"
                        />
                      </svg>
                      Keka HR
                    </button>
                    <button className="btn rounded-pill border w-auto px-4 fs-5 d-flex gap-3 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                      >
                        <path
                          id="trending_icon"
                          d="M259.588,93.818a1.586,1.586,0,0,0,.392.164h.157a.227.227,0,0,0,.157-.041.889.889,0,0,0,.627-.453l2.586-4.239,1.92,1.317a.942.942,0,0,0,1.371-.329l2.742-4.486.549.37a.629.629,0,0,0,.7,0,.759.759,0,0,0,.313-.659l-.235-2.84a.647.647,0,0,0-.313-.535.728.728,0,0,0-.588-.082l-2.546.946a.668.668,0,0,0-.431.576.646.646,0,0,0,.313.659l.549.37-2.233,3.621-1.92-1.317a.958.958,0,0,0-.666-.164,1.032,1.032,0,0,0-.705.453l-3.134,5.1a1.324,1.324,0,0,0,.392,1.564Z"
                          transform="translate(-259.106 -81.983)"
                          fill="#24272c"
                          opacity="0.7"
                        />
                      </svg>
                      Bitdefender Antivirus Plus
                    </button>
                    <button className="btn rounded-pill border w-auto px-4 fs-5 d-flex gap-3 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                      >
                        <path
                          id="trending_icon"
                          d="M259.588,93.818a1.586,1.586,0,0,0,.392.164h.157a.227.227,0,0,0,.157-.041.889.889,0,0,0,.627-.453l2.586-4.239,1.92,1.317a.942.942,0,0,0,1.371-.329l2.742-4.486.549.37a.629.629,0,0,0,.7,0,.759.759,0,0,0,.313-.659l-.235-2.84a.647.647,0,0,0-.313-.535.728.728,0,0,0-.588-.082l-2.546.946a.668.668,0,0,0-.431.576.646.646,0,0,0,.313.659l.549.37-2.233,3.621-1.92-1.317a.958.958,0,0,0-.666-.164,1.032,1.032,0,0,0-.705.453l-3.134,5.1a1.324,1.324,0,0,0,.392,1.564Z"
                          transform="translate(-259.106 -81.983)"
                          fill="#24272c"
                          opacity="0.7"
                        />
                      </svg>
                      Wondershare Filmora
                    </button>
                    <button className="btn rounded-pill border w-auto px-4 fs-5 d-flex gap-3 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                      >
                        <path
                          id="trending_icon"
                          d="M259.588,93.818a1.586,1.586,0,0,0,.392.164h.157a.227.227,0,0,0,.157-.041.889.889,0,0,0,.627-.453l2.586-4.239,1.92,1.317a.942.942,0,0,0,1.371-.329l2.742-4.486.549.37a.629.629,0,0,0,.7,0,.759.759,0,0,0,.313-.659l-.235-2.84a.647.647,0,0,0-.313-.535.728.728,0,0,0-.588-.082l-2.546.946a.668.668,0,0,0-.431.576.646.646,0,0,0,.313.659l.549.37-2.233,3.621-1.92-1.317a.958.958,0,0,0-.666-.164,1.032,1.032,0,0,0-.705.453l-3.134,5.1a1.324,1.324,0,0,0,.392,1.564Z"
                          transform="translate(-259.106 -81.983)"
                          fill="#24272c"
                          opacity="0.7"
                        />
                      </svg>
                      Kaspersky Antivirus
                    </button>
                    <button className="btn rounded-pill border w-auto px-4 fs-5 d-flex gap-3 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                      >
                        <path
                          id="trending_icon"
                          d="M259.588,93.818a1.586,1.586,0,0,0,.392.164h.157a.227.227,0,0,0,.157-.041.889.889,0,0,0,.627-.453l2.586-4.239,1.92,1.317a.942.942,0,0,0,1.371-.329l2.742-4.486.549.37a.629.629,0,0,0,.7,0,.759.759,0,0,0,.313-.659l-.235-2.84a.647.647,0,0,0-.313-.535.728.728,0,0,0-.588-.082l-2.546.946a.668.668,0,0,0-.431.576.646.646,0,0,0,.313.659l.549.37-2.233,3.621-1.92-1.317a.958.958,0,0,0-.666-.164,1.032,1.032,0,0,0-.705.453l-3.134,5.1a1.324,1.324,0,0,0,.392,1.564Z"
                          transform="translate(-259.106 -81.983)"
                          fill="#24272c"
                          opacity="0.7"
                        />
                      </svg>
                      Vyapar Billing Software
                    </button>
                    <button className="btn rounded-pill border w-auto px-4 fs-5 d-flex gap-3 py-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                      >
                        <path
                          id="trending_icon"
                          d="M259.588,93.818a1.586,1.586,0,0,0,.392.164h.157a.227.227,0,0,0,.157-.041.889.889,0,0,0,.627-.453l2.586-4.239,1.92,1.317a.942.942,0,0,0,1.371-.329l2.742-4.486.549.37a.629.629,0,0,0,.7,0,.759.759,0,0,0,.313-.659l-.235-2.84a.647.647,0,0,0-.313-.535.728.728,0,0,0-.588-.082l-2.546.946a.668.668,0,0,0-.431.576.646.646,0,0,0,.313.659l.549.37-2.233,3.621-1.92-1.317a.958.958,0,0,0-.666-.164,1.032,1.032,0,0,0-.705.453l-3.134,5.1a1.324,1.324,0,0,0,.392,1.564Z"
                          transform="translate(-259.106 -81.983)"
                          fill="#24272c"
                          opacity="0.7"
                        />
                      </svg>
                      Online Munim Jewellery Software
                    </button>
                  </div>
                </div>
              }
              </div>
            </div>
            <div className="d-flex gap-5 justify-content-center mt-5">
              <div className="d-flex gap-3 text-white fw-bold fs-3">
                  <Image src='/images/home/consult.svg' width={30} height={30} alt="" />
                  Free Expert Consultation
              </div>
              <div className="d-flex gap-3 text-white fw-bold fs-3">
                  <Image src='/images/home/license.svg' width={30} height={30} alt="" />
                  Get Instant License
              </div>
              <div className="d-flex gap-3 text-white fw-bold fs-3">
                  <Image src='/images/home/secure.svg' width={30} height={30} alt="" />
                  Easy & Secure Checkout
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBanner;
