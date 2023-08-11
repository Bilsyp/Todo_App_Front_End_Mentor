const Features_Desktop = ({
  dataTask,
  sizes,
  activeTask,
  completedTask,
  clearCompletedTask,
  AllTask,
  filter,
}) => {
  return (
    <div className=' bg-white  dark:bg-Very_Dark_Desaturated_Blue p-3 mx-auto flex task_item text-VeryDarkGrayishBlue justify-between items-center border-b border-veryLightGrayishBlue '>
      <button className='btn text-[14px]    text-feature font-light'>
        {dataTask.length} item left
      </button>

      {sizes.width > 678 && (
        <div className='flex gap-4 ml-8 justify-center items-center   dark:text-DarkGrayishBlue '>
          <button
            onClick={AllTask}
            className={`${filter == "all" ? "text-blue-500" : ""} btn  `}
          >
            All
          </button>
          <button
            onClick={activeTask}
            className={`${filter == "active" ? "text-blue-500" : ""} btn`}
          >
            Active
          </button>
          <button
            onClick={completedTask}
            className={`${filter == "completed" ? "text-blue-500" : ""} btn`}
          >
            Completed
          </button>
        </div>
      )}

      <button
        onClick={clearCompletedTask}
        className={` text-[14px]    text-feature font-light`}
      >
        Clear completed
      </button>
    </div>
  );
};

export default Features_Desktop;
