// others
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import CaNhan from "./pages/CaNhan";
import Following from "./pages/Following";
import Home from "./pages/Home";
import Radio from "./pages/Radio";
import ZingChart from "./pages/ZingChart";

// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4SxI045O9N2bwW-cC-zjMzHebpXjpxAI",
  authDomain: "tranning-reactjs.firebaseapp.com",
  projectId: "tranning-reactjs"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getCities(db) {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map(doc => doc.data());
  return cityList;
}

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
