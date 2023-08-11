import { FaSun, FaMoon } from "react-icons/fa";

const Buttons = ({ setDark, dark }) => {
  function toogle() {
    const html = document.querySelector("html");

    console.log(dark);
    if (!dark) {
      html.className = "dark";
      setDark(true);
    } else {
      html.className = "light";
      setDark(false);
    }
  }
  return (
    <>
      {dark ? (
        <button className='text-2xl' onClick={toogle}>
          <FaSun />
        </button>
      ) : (
        <button className='text-2xl' onClick={toogle}>
          <FaMoon />
        </button>
      )}
    </>
  );
};

export default Buttons;
