import { useState } from "react";

const SendMessage = () => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
    setValue("");
  };
  return (
    <div className="bg-slate-800 fixed bottom-0 w-full shadow-lg py-4 flex flex-col">
      <form onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full mx-4 max-w-xs sm:max-w-lg md:max-w-xl focus:outline-none"
        />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SendMessage;
