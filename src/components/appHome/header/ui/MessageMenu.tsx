import React from "react";
import { taskBookStore } from "../../../../store/taskBookData/TaskBook.store";
import "./MessageMenuStyle.css";

export function MessageModal() {
  const { messageBook } = taskBookStore;
  return (
    <div
      className="h-[12rem] "
      style={{
        position: "absolute",
        top: "100%",
        right: 0,
        marginTop: "8px",
        width: "200px",
        background: "white",
        border: "1px solid #a5a5a5",
        borderRadius: "4px",
        overflowX: "hidden",
        overflowY: "scroll",
        WebkitOverflowScrolling: "touch",
        transform: "translateY(-10px)",
        animation: "slideDown 0.8s forwards",
        zIndex: 2,
      }}
    >
      {messageBook.length === 0 ? (
        <div
          className="border-1 min-h-7 border-black rounded-[5px] text-black m-1 max-w-xs break-words 
                  leading-[1.2] text-[1rem]"
        >
          <div className="flex">
            <img src="/static/checkmark.svg" className="w-10" />
            <div>Сообщения отсутствуют ...</div>
          </div>
        </div>
      ) : (
        messageBook.map((message, index) => (
          <div
            className=" border-1 min-h-7 border-black rounded-[5px]  m-1 max-w-xs break-words 
                  leading-[1.2] text-[1rem]"
            key={index}
          >
            <div className="flex ">
              <img src="/static/checkmark.svg" className="w-10" />
              <div>{message}</div>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
