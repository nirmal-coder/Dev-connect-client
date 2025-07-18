import React from "react";

const ProfileCards = ({ data, type }) => {
  const { photo, firstName } = data;
  return (
    <li className="text-white mb-3 rounded-md flex justify-between items-center bg-gradient-to-l from-slate-700 to-gray-900  w-full p-2 hover:border hover:border-gray-400 transition-all duration-100 cursor-pointer">
      <div className="flex items-center">
        <img
          src={photo}
          alt="profile picture"
          className="w-10 h-10 rounded-[50%] mr-3"
        />

        <h3 className="text-white">{firstName}</h3>
      </div>
      <div className="flex items-center gap-x-2">
        {type === "Request" && (
          <button className="bg-gray-900 py-1 px-4 text-red-600 hover:border-2 border-red-700 rounded-xl text-sm">
            Reject
          </button>
        )}
        <button
          className={`bg-gray-900 py-1 px-4 ${
            type === "connections"
              ? "text-white border-1 border-gray-200"
              : "text-green-600 border-1 border-green-700"
          }  rounded-xl text-sm hover:border-2`}
        >
          {type === "connections" ? "View" : "Accept"}
        </button>
      </div>
    </li>
  );
};

export default ProfileCards;
