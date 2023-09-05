import { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import GridItem from "./GridItem";
import PropTypes, { string } from "prop-types";

export const GifGrid = ({ category }) => {
  const { images, loading } = useFetchGifs(category);

  return (
    <div className="mt-3 ">
      {loading && (
        <>
          <div className="animate-spin bg-gradient-to-r from-indigo-500  flex items-center rounded-full border-2 w-40 h-40 mx-auto">
            <div className="bg-white rounded-full border-2 w-32 h-32 mx-auto" />
          </div>
          <h2 className="mt-2 font-mono font-bold text-2xl text-center">
            Cargando...
          </h2>
        </>
      )}

      <h2 className="text-4xl font-bold">{category}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {images.map((e) => (
          <GridItem key={e.id} id={e.id} title={e.title} url={e.url} />
        ))}
      </div>
    </div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
