import "./style.scss";

function ListMusic() {
  return (
    <div className="ListMusic_wrapper">
      <ul>
        <li className="item-music">
          <img
            src="https://photo-resize-zmp3.zadn.vn/w94_r1x1_jpeg/cover/4/9/d/a/49da6a1d6cf13a42e77bc3a945d9dd6b.jpg"
            alt=""
            className="music-img"
          />
          <div className="footer-title">
            <p className="song-name">Hoa Hải Đường</p>
            <span className="singer">Jack</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default ListMusic;
