import searchIcon from '../../assets/icon/search-black.svg';

function Search() {
  return (
    <div className="w-full h-[32px] border border-primary-midgray rounded-md px-9 flex justify-around items-center">
      <input
        id="searchInbox"
        type="text"
        placeholder="Search"
        className="bg-transparent border-none outline-none w-full placeholder-primary-black placeholder:text-primary-black text-primary-black"
      />
      <img src={searchIcon} alt="search-icon" className="w-[12px] h-[12px]" />
    </div>
  );
}

export default Search;
