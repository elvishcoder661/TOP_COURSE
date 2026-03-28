const Filter = (props) => {
  let filterData=props.filterData;
  let category=props.category;
  let setCategory=props.setCategory;
  const filterHandler = (title) => {
    console.log(category);
  setCategory(title);
};
  return (
    <div className="flex justify-center mt-4">
      {filterData.map((data, index) => (
        <button onClick={()=>filterHandler(data.title)}  key={index} className={`m-3 text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300 ${category===data.title ? "bg-opacity-60 border-white " : "bg-opacity-40 border-transparent"}`}>
          {data.title}
        </button>
      ))}
    </div>
  );
};
export default Filter