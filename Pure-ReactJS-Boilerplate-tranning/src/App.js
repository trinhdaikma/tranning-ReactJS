import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import * as firestore from "firebase/firestore/lite";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import CaNhan from "./pages/CaNhan";
import Following from "./pages/Following";
import Home from "./pages/Home";
import Radio from "./pages/Radio";
import ZingChart from "./pages/ZingChart";

const { getFirestore, collection, addDoc, doc, setDoc, getDocs } = firestore;
const firebaseConfig = {
  apiKey: "AIzaSyB4SxI045O9N2bwW-cC-zjMzHebpXjpxAI",
  authDomain: "tranning-reactjs.firebaseapp.com",
  databaseURL: "https://tranning-reactjs-default-rtdb.firebaseio.com",
  projectId: "tranning-reactjs",
  storageBucket: "tranning-reactjs.appspot.com",
  messagingSenderId: "713942844357",
  appId: "1:713942844357:web:8880de63e832593c0101ac",
  measurementId: "G-X6R261JGGC"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const db = getFirestore(firebase);
async function getData() {
  const citiescol = collection(db, "songImformation");
  const citynapshot = await setDoc(doc(db, ""), citiescol);
  const citiList = citynapshot.docs.map(doc => doc.data());
  return citiList;
}

async function setData() {
  setDoc(doc(db, "songImformation", "list-song"), {
    id: 1,
    image: "",
    songName: "yêu là cưới",
    singer: "Phát Hồ"
  });
}
async function setData2() {
  setDoc(doc(db, "songImformation-2", "list-2"), {
    id: 2,
    image: "",
    songName: "yêu là cưới",
    singer: "Phát Hồ"
  });
}
setData();
setData2();
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/canhan" component={CaNhan} />
          <Route path="/" exact component={Home} />
          <Route path="/chart" component={ZingChart} />
          <Route path="/radio" component={Radio} />
          <Route path="/following" component={Following} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
