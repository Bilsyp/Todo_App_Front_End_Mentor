import { useRef } from "react";
const TaskForm = ({ addTask, setData }) => {
  const inputTask = useRef(null);

  return (
    <>
      <div className=' bg-white dark:bg-Very_Dark_Desaturated_Blue w-[90%] md:w-[84%] lg:w-[40%] px-3 py-2 mt-8 mx-auto rounded-sm '>
        <form onSubmit={(ev) => addTask(ev, inputTask)} className='flex'>
          <button
            type='submit'
            className='w-[20px] h-[20px] rounded-full cursor-pointer mr-4 border-2 border-veryLightGrayishBlue'
          ></button>
          <input
            ref={inputTask}
            onChange={(e) => setData(e.target.value)}
            className='outline-none w-[90%] bg-transparent dark:text-white text-VeryDarkGrayishBlue'
            placeholder='Create a new todo...'
            type='text'
            name=''
            id=''
          />
        </form>
      </div>
      {/* <div className='container p-4 mx-auto my-10 bg-slate-600 flex  justify-center items-center flex-col'>
        <form onSubmit={addTask}>
          <input
            type='text'
            onChange={(e) => setData(e.target.value)}
            placeholder='New task...'
            className='border-2 outline-none text-black px-3 py-2 rounded-lg border-gray-400'
          />
          <button
            type='submit'
            className='bg-blue-500 py-2 px-10 rounded-lg mx-10 font-semibold'
          >
            Send
          </button>
        </form>
      </div> */}
    </>
  );
};

export default TaskForm;
