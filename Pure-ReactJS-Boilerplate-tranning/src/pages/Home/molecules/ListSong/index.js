import React from "react";
import ListTitle from "../../atoms/ListTitle";
import SongItem from "../SongItem";
import "./style.scss"

function ListSong() {
  const listSong = [
    {
      id: 1,
      image:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/b/b/d/cbbdfde4559acd3951a894648f543cd0.jpg",
      title: "Nhạc trẻ",
      singer: "Jack, Amee, Quân A.p"
    },
    {
      id: 1,
      image:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/b/b/d/cbbdfde4559acd3951a894648f543cd0.jpg",
      title: "Nhạc trẻ",
      singer: "Jack, Amee, Quân A.p"
    },
    {
      id: 1,
      image:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/b/b/d/cbbdfde4559acd3951a894648f543cd0.jpg",
      title: "Nhạc trẻ",
      singer: "Jack, Amee, Quân A.p"
    },
    {
      id: 1,
      image:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/c/b/b/d/cbbdfde4559acd3951a894648f543cd0.jpg",
      title: "Nhạc trẻ",
      singer: "Jack, Amee, Quân A.p"
    }
  ];

  const elmSong = listSong.map(song => (
    <SongItem
      key={song.id}
      image={song.image}
      title={song.title}
      singer={song.singer}
    />
  ));
  return (
    <div className="ListSong_wrapper">
      <ListTitle />
      {elmSong}
    </div>
  );
}

export default ListSong;
