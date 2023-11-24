import { useState } from "react";
import { UserAuth } from "../context/AuthContext";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const SendMessage = () => {
  const [value, setValue] = useState("");
  const { currentUser } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      alert("Please Enter a Valid Message");
      return;
    } else if (value === "Subetah Mukewe") {
      alert("Subetah Mukewe is a beautiful girl!!!");
    }
    try {
      const { uid, displayName, photoURL } = currentUser;
      addDoc(collection(db, "messages"), {
        text: value,
        name: displayName,
        avatar: photoURL,
        createdAt: serverTimestamp(),
        uid,
      });
    } catch (error) {
      console.log(error);
    }
    console.log(value);
    setValue("");
  };
  return (
    <div className="bg-slate-800 fixed bottom-0 w-full shadow-lg py-4 flex flex-col">
      <form onSubmit={handleSubmit} className="flex">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full ml-4  focus:outline-none {rounded-r-none border-r-0}"
        />

        <button
          className="bg-base-200 hover:bg-base-300 rounded-full p-2 mx-4 text-sm {rounded-l-none}"
          type="submit"
        >
          <PaperAirplaneIcon className="h-6 w-8" />
        </button>
      </form>
    </div>
  );
};

export default SendMessage;
