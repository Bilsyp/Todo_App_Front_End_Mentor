import { useEffect, useState, useRef } from "react";

import { useWindowSize } from "@uidotdev/usehooks";
import { v4 as uudi4 } from "uuid";
import useLocalStorage from "use-local-storage";
import { motion, transform } from "framer-motion";
import {
  Features_Desktop,
  Features_Mobile,
  Task,
  TaskForm,
  Nav,
} from "../components";
const Hero = () => {
  const sizes = useWindowSize();
  const [data, setData] = useState("");
  const list_container = useRef(null);

  const [dataTask, setDataTask] = useLocalStorage("task", []);
  const [task, setTask] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setTask(dataTask);
  }, [dataTask]);
  function activeTask() {
    setFilter("active");
    setTask((prev) => {
      return [...dataTask].filter((res) => !res.done);
    });
  }
  function completedTask() {
    setFilter("completed");
    setTask((prev) => {
      return [...dataTask].filter((res) => res.done);
    });
  }

  function AllTask() {
    setFilter("all");
    setTask((prev) => {
      return [...dataTask];
    });
  }
  function clearCompletedTask() {
    setDataTask((prev) => {
      return prev.filter((res) => res.done == false);
    });
  }

  function addTask(ev, inputTask) {
    ev.preventDefault();

    if (inputTask.current.value == "") {
      //   console.log("emply");
      inputTask.current.placeholder = "Please fill the input field";
    } else {
      setDataTask((prev) => {
        return [
          ...prev,
          {
            id: uudi4(),
            task: data,
            done: false,
          },
        ];
        setFilter("all");
      });

      setData("");
      inputTask.current.value = "";
      inputTask.current.placeholder = "Create new todo...";
    }
  }

  function updateDone(idx, newDone) {
    setDataTask((prev) => {
      const bowl = [...prev];
      bowl[idx].done = newDone;

      return bowl;
    });
  }

  function removeTask(idx) {
    setDataTask((prev) => {
      return prev.filter((arr, index) => index !== idx);
    });
  }

  return (
    <div className='relative'>
      <div
        className={`${
          sizes.width < 678
            ? "bg-[url('/images/bg-mobile-light.jpg')] dark:bg-[url('/images/bg-mobile-dark.jpg')]"
            : "bg-[url('/images/bg-desktop-light.jpg')] dark:bg-[url('/images/bg-desktop-dark.jpg')]"
        } text-white  bg-cover hero py-[2.8rem] px-4 `}
      >
        <Nav />
        <TaskForm addTask={addTask} setData={setData} />
      </div>
      <div
        ref={list_container}
        className='h-[55vh] md:h-[60vh] absolute top-[85%] task_container  px-4 scroll-smooth mx-auto task   rounded-tl-md rounded-tr-md  lg:px-2 overflow-y-auto left-[50%] translate-x-[-50%]'
      >
        {}
        {task.map((res, idx) => (
          <motion.div
            initial={{
              translateX: "-1000%",
            }}
            transition={{
              times: 50,
            }}
            animate={{
              translateX: "0",
            }}
            key={res.id}
          >
            <Task
              task={res.task}
              done={res.done}
              filter={filter}
              onToogle={(newdone) => updateDone(idx, newdone)}
              onTrash={() => removeTask(idx)}
            />
          </motion.div>
        ))}

        {/* {task.length > 0 && filter !== undefined && ( */}
        <Features_Desktop
          sizes={sizes}
          dataTask={dataTask}
          activeTask={activeTask}
          completedTask={completedTask}
          clearCompletedTask={clearCompletedTask}
          AllTask={AllTask}
          filter={filter}
        />
        {/* )} */}
      </div>
      {sizes.width < 678 && dataTask.length > 0 && (
        <Features_Mobile
          activeTask={activeTask}
          dataTask={dataTask}
          completedTask={completedTask}
          clearCompletedTask={clearCompletedTask}
          AllTask={AllTask}
          filter={filter}
        />
      )}
    </div>
  );
};

export default Hero;
