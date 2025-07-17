import React from "react";

const ProfileCards = ({ data, type }) => {
  const { photo, firstName } = data;
  return (
    <li className="text-white mb-3 flex justify-between items-center  rounded-lg w-full p-2">
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
          <button className="bg-gray-900 py-1 px-4 text-red-600 border-2 border-red-700 rounded-xl text-sm">
            Reject
          </button>
        )}
        <button
          className={`bg-gray-900 py-1 px-4 ${
            type === "connections"
              ? "text-white border-2 border-gray-200"
              : "text-green-600 border-2 border-green-700"
          }  rounded-xl text-sm`}
        >
          {type === "connections" ? "View" : "Accept"}
        </button>
      </div>
    </li>
  );
};

export default ProfileCards;
