import React from "react";
import AlbumCard from "./AlbumCard";
import { albums } from "../data/albums";

function AlbumList() {
  return (
    <section className="albums">
      {albums.map(({ id, name, image, genre }) => (
        <AlbumCard key={id} name={name} image={image} genre={genre} />
      ))}
    </section>
  );
}

export default AlbumList;
