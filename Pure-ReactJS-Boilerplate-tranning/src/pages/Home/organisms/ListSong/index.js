import React from "react";
import SongItem from "../../molecules/SongItem";
import "./style.scss";

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
      id: 2,
      image:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/6/8/4/5/6845d09bb066daaec232cecd6a037c7a.jpg",
      title: "Nhạc Hot",
      singer: "Erik, Đức Phúc, Hoà Minzy"
    },
    {
      id: 3,
      image:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/0/3/5/0/035021a2c5474fc71a7a079c625023f4.jpg",
      title: "Nhạc trữ tình",
      singer: "Hương Ly, Đình Dũng"
    },
    {
      id: 4,
      image:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/2/f/f/4/2ff49770f4179f8d7f8ecc28cb3fd596.jpg",
      title: "Nhạc RAP",
      singer: "Đen Vâu, Binz, LK"
    },
    {
      id: 5,
      image:
        "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/b/e/f/0/bef0285713b3c8c70cc425b6f7df671d.jpg",
      title: "Nhạc V-POP",
      singer: "Sơn Tùng MTP, Quân A.p"
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
  return <div className="ListSong_wrapper">
  {elmSong}
  </div>;
}

export default ListSong;
