import React from "react";

function Card({ text, title, deportes }) {
  console.log(deportes);
  return (
    <div className="bg-white shadow-md m-2 rounded-md w-60">
      <div className="bg-stone-800 p-3">
        <h2 className="text-2xl font-bold text-white">{title}</h2>
      </div>
      <div className="p-3">
        <div className="max-w-xs">

          <p className="mt-4 text-gray-600 whitespace-pre-wrap max-w-200">
            {deportes ? (
              <>
                {deportes.map((deporte, index) => (
                  <>
                  <p className="flex mb-3 font-bold">
                    <img
                      src={"/src/asset/iconos Deportes/" + index + ".png"}
                      width={"25px"}
                      alt=""
                      className="mr-2"
                    />{deporte}
                   
                  </p>
                  <hr className="border-t-2 border-gray-400 my-4" />
                  </>
                ))}
              </>
            ) : (
              text
            )}
          </p>
        </div>
        <div className="mt-4"></div>
      </div>
    </div>
  );
}

export default Card;
