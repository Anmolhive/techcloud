"use client";
import Style from "./searchBanner.module.scss";
const SearchBanner = () => {
  return (
    <section className={`${Style.banner}`}>
      <div className={`py-5 h-100 ${Style.gradientColor}`}>
        <div className="container d-grid place-items-center h-100">
          <div className="col-md-6">
            <div className="input-group d-flex bg-dark rounded-pill p-2">
              <input
                type="text"
                className="form-control w-auto bg-transparent"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="button-addon2"
              />
              <button
              style={{width: '8rem', height: '6rem'}}
                className="btn btn-outline-secondary w-auto rounded-circle"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchBanner;
