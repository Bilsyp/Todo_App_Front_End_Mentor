const Features_Mobile = ({
  activeTask,
  completedTask,
  clearCompletedTask,
  AllTask,
  filter,
}) => {
  console.log(filter);
  return (
    <div className=' absolute top-[265%] task_container bg-white  dark:bg-Very_Dark_Desaturated_Blue p-3 mx-auto flex task_item justify-evenly left-[50%] translate-x-[-50%] border-b border-veryLightGrayishBlue '>
      <button
        className={`${filter == "all" ? "text-blue-500" : "mobile"} btn `}
        onClick={AllTask}
      >
        All
      </button>
      <button
        className={`${filter == "active" ? "text-blue-500" : "mobile"} btn `}
        onClick={activeTask}
      >
        Active
      </button>
      <button
        className={`${filter == "completed" ? "text-blue-500" : "mobile"} btn `}
        onClick={completedTask}
      >
        Completed
      </button>
    </div>
  );
};

export default Features_Mobile;
