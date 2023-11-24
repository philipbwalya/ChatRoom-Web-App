import { UserAuth } from "../context/AuthContext";
import { format } from "date-fns";

const Message = ({ message }) => {
  const currentUser = UserAuth();
  return (
    <div>
      <div
        className={`chat ${
          message.uid === currentUser.uid ? "chat-end" : "chat-start"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src={message.avatar}
            />
          </div>
        </div>
        <div className="chat-header pb-[3px] pl-1 text-slate-500">
          {message.name}
        </div>
        <div className="chat-bubble whitespace-pre-line break-all">
          {message.text}
        </div>
        <div className="chat-footer opacity-50">
          {message.createdAt && (
            <span className="">
              {format(message.createdAt.toDate(), "HH:mm")}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default Message;
