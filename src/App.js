import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import AdminList from "./AdminList";
import AdminDetail from "./AdminDetail";
import UserDetail from "./UserDetail";
import CsvDetail from "./CsvDetail";
import ListCreator from "./ListCreator";
import CreatorList from "./CreatorList";
import PendingList from "./PendingList";
import AcceptRequest from "./AcceptRequest";
import Error from "./Error";
import DeclineRequest from "./DeclineRequest";
import VideoList from "./VideoList";
import VideoView from "./VideoView";
import Gift from "./Gift";
import GiftList from "./GiftList";
import AddPacks from "./AddPacks";
import PackList from "./PackList";
import Report from "./Report";
import Inquiry from "./Inquiry";
import UserList from "./UserList";
import ViewProfile from "./ViewProfile";
function App() {
  return (
    <Router id="container">
      <Routes>
        <Route path="/" element={<Error />} />
        <Route path="/adminDetail" element={<AdminDetail />} />
        <Route path="/videoList" element={<VideoList />} />
        <Route path="/creatorList" element={<CreatorList />} />
        <Route path="/declineRequest" element={<DeclineRequest />} />
        <Route path="/acceptRequest" element={<AcceptRequest />} />
        <Route path="/csvDetail" element={<CsvDetail />} />
        <Route path="/adminList" element={<AdminList />} />
        <Route path="/userList" element={<UserList />} />
        <Route exact path="/userdetail" element={<UserDetail />} />
        <Route exact path="/pendingList" element={<PendingList />} />
        <Route exact path="/creatorRequest" element={<ListCreator />} />
        <Route
          exact
          path="/creatorList/viewProfile"
          element={<ViewProfile />}
        />
        <Route exact path="/videoList/videoView" element={<VideoView />} />
        <Route exact path="/inquiry" element={<Inquiry />} />
        <Route exact path="/reports" element={<Report />} />
        <Route exact path="/packList" element={<PackList />} />
        <Route exact path="/addPack" element={<AddPacks />} />
        <Route exact path="/giftDetails" element={<AdminDetail />} />
        <Route exact path="/giftList" element={<GiftList />} />
        <Route exact path="/gift" element={<Gift />} />
      </Routes>
    </Router>
  );
}

export default App;
