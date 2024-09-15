import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Demo from "./components/Demo/Demo";
import HomeHeader from "./components/Home/Header/HomeHeader";
import DemoHeader from "./components/Demo/DemoHeader";
import { Blog } from "./Context/Context";
import { ToastContainer } from "react-toastify";
import Profile from "./components/Home/Profile/Profile";
import Write from "./components/Home/Write/Write";
import SinglePost from "./components/Common/Posts/SinglePost";
import EditPost from "./components/Common/Posts/EditPost";
import FilterPost from "./components/Demo/FilterPost";
import { SeeAll } from "./components/Demo/SeeAll";
import { About } from "./components/Demo/About"
import Events from './components/Demo/Events'


function App() {
  const { currentUser } = Blog();
  return (
    <>
      {currentUser ? <HomeHeader /> : <DemoHeader />}
      <ToastContainer />
      <Routes>
        {currentUser && <Route path="/" element={<Home />} />}
        {!currentUser && <Route path="/landing" element={<Demo />} />}
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/write" element={<Write />} />
        <Route path="/post/:postId" element={<SinglePost />} />
        <Route path="/editPost/:postId" element={<EditPost />} />
        <Route path="/filter/:tag" element={<FilterPost />} />
        <Route path="/seeall" element={<SeeAll />} />
        <Route path="/about" element={<About />} />
        <Route
          path="*"
          element={<Navigate to={!currentUser ? "/Landing" : "/"} />}
        />
        <Route path='/events' element={<Events/>}/>
      </Routes>
    </>
  );
}

export default App;
