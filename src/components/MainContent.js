import React from "react";
import AlbumList from "./AlbumList";
import GenrePicker from "./GenrePicker";
import TopMenu from "./TopMenu";
function MainContent() {
  return (
    <main>
      <TopMenu />
      <GenrePicker />
      <AlbumList />
    </main>
  );
}

export default MainContent;
