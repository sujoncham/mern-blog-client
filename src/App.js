import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AccountDelete from "./components/AccountDelete";
import AddBlog from "./components/AddBlog";
import Blog from "./components/Blog";
import BlogDetails from "./components/BlogDetails";
import CreateCategory from "./components/CreateCategory";
import Header from "./components/Header";
import Home from './components/Home';
import Login from "./components/Login";
import ProfileEdit from "./components/ProfileEdit";
import ProfileImg from "./components/ProfileImg";
import Register from "./components/Register";
import RequireAuth from "./components/RequireAuth";
import UpdateBlog from "./components/UpdateBlog";
import UserBlog from "./components/UserBlog";
import UserProfile from "./components/UserProfile";

function App() {
  const isLoggedIn = useSelector(state => state.isLoggedIn);
  console.log(isLoggedIn)
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<RequireAuth><Home /></RequireAuth>}></Route>
        <Route path='/addBlog' element={<AddBlog />}></Route>
        <Route path='/createCategory/:id' element={<CreateCategory />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/blog/:id' element={<BlogDetails />}></Route>
        <Route path='/userBlog/:updateId' element={<UpdateBlog />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/myBlog/:id' element={<UserBlog />}></Route>
        <Route path='/myBlog' element={<UserBlog />}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/profile/:id' element={<ProfileEdit />}></Route>
        <Route path='/profile/account/:id' element={<AccountDelete />}></Route>
        <Route path='/userProfile/:id' element={<UserProfile />}></Route>
        <Route path='/profileImg/:id' element={<ProfileImg />}></Route>
        <Route path='*' element={<Register />}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
