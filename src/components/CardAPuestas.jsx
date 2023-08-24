import React from "react";

function CardAPuestas({ title, icon, local, visitante, empate }) {
  return (
    <div className="flex">
      <div className="bg-white shadow-md m-2 rounded-md w-full">
        <div className="bg-stone-800 p-3">
          <h2 className="text-2xl font-bold text-white">{title}</h2>
        </div>
        <div className="p-3">
          <div className="max-w-xs">
            <p className="mt-4 text-gray-600 whitespace-pre-wrap max-w-200"></p>
            <div className="flex justify-between">
              <button className="bg-gray-300 px-2 py-4 rounded-md hover:bg-slate-700">
                <span>{local}</span>
              </button>
              <button className="bg-gray-300 px-2 py-4 rounded-md hover:bg-slate-700">
                <span>{empate}</span>
              </button>
              <button className="bg-gray-300 px-2 py-4 rounded-md hover:bg-slate-700">
                <span>{visitante}</span>
              </button>
            </div>
          </div>
          <div className="mt-4"></div>
        </div>
      </div>
      <div>
        <img src={"/src/asset/gifs/" + icon + ".gif"} width={"150px"} alt="" />
      </div>
    </div>
  );
}

export default CardAPuestas;
