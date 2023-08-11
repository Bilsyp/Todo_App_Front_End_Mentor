import HomeScreen from "./screen/HomeScreen";

const App = () => {
  return (
    <div className='tex'>
      <HomeScreen />
      {/* <TaskForm addTask={addTask} setData={setData} />

      {dataTask.map((res, idx) => (
        <Task
          key={idx}
          task={res.task}
          done={res.done}
          onToogle={(newdone) => updateDone(idx, newdone)}
          onTrash={() => removeTask(idx)}
        />
      ))} */}
    </div>
  );
};

export default App;
