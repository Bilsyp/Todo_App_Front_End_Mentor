import { FaCheck, FaTimes } from "react-icons/fa";
const Task = ({ task, onToogle, done, onTrash, filter }) => {
  return (
    <div className=' bg-white  dark:bg-Very_Dark_Desaturated_Blue w-full  p-3 mx-auto flex task_item justify-between  border-b border-veryLightGrayishBlue '>
      <div className='flex justify-center items-center gap-3'>
        {done && (
          <button
            className=' rounded-full p-1   text-VeryLightGray bg-gradient-to-r from-purple_gradient to-blue_gradient'
            onClick={() => onToogle(!done)}
          >
            <FaCheck className=' w-[14px] h-[14px]' />
          </button>
        )}

        {!done && (
          <div>
            {" "}
            <button
              onClick={() => onToogle(!done)}
              type='submit'
              className='w-[20px] h-[20px] rounded-full p-1 cursor-pointer mr-1 border-veryLightGrayishBlue border-2'
            ></button>
          </div>
        )}

        <span
          className={`${
            done
              ? "line-through   text-task_completed dark:text-VeryDarkGrayishBlue"
              : "text-task_default_light   dark:text-LightGrayishBlue"
          }`}
        >
          {task}
        </span>
      </div>

      {filter == "completed" ? (
        <button
          onClick={onTrash}
          className={`${
            done ? "hidden" : ""
          } text-veryLightGrayishBlue text-2xl self-start    dark:text-VeryDarkGrayishBlue`}
        >
          <FaTimes />
        </button>
      ) : (
        ""
      )}
      {filter == "all" ? (
        <button
          onClick={onTrash}
          className={`${
            done ? "hidden" : ""
          } text-veryLightGrayishBlue text-2xl self-start  dark:text-VeryDarkGrayishBlue`}
        >
          <FaTimes />
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default Task;
