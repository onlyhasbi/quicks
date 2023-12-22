import searchIcon from '../../assets/icon/search.svg';

function Navbar() {
  return (
    <div className="h-[3.625rem] bg-[#4F4F4F] px-6 flex items-center">
          <div className="relative w-1/5">
            <label htmlFor="search">
              <img
                src={searchIcon}
                alt="search-icon"
                className="absolute top-0 bottom-0 left-0 m-auto block fill-[#fff] w-4 h-4"
              />
            </label>
            <input
              id="search"
              type="text"
              className="pl-7 py-1 rounded-sm border-0 ring-0 focus:ring-0 outline-none bg-transparent text-white"
            />
          </div>
        </div>
  )
}

export default Navbar