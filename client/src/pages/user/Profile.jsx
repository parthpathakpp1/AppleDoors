import React,{useState,useEffect} from 'react'
import Header from '../../components/Header/Header'
import LandingFooter from '../../components/Footer/Footer'
import { useAuth } from '../../context/auth'
import UserMenu from '../../components/UserMenu/UserMenu'
import axios from 'axios'
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Profile.css';

const Profile = () => {

    const [auth,setAuth]= useAuth();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");


    useEffect(() => {
        if (auth?.user) {
            const { email, name, phone, address } = auth.user;
            setName(name);
            setPhone(phone);
            setEmail(email);
            setAddress(address);
        }
    }, [auth?.user]);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.put("http://localhost:8080/api/v1/auth/profile", {
                name,
                email,
                password,
                phone,
                address,
            });
            if (data?.errro) {
                toast.error(data?.error);
            } else {
                setAuth({ ...auth, user: data?.updatedUser });
                let ls = localStorage.getItem("auth");
                ls = JSON.parse(ls);
                ls.user = data.updatedUser;
                localStorage.setItem("auth", JSON.stringify(ls));
                toast.success("Profile Updated Successfully");
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };
    
  return (
    <>
    <Header />
    <ToastContainer />
    <div className="profile-container">
        
        <form onSubmit={handleSubmit} className="profile-form">
       <h1 className="profile-heading">Update Profile</h1>
       <div className="profile-avatar">
  <img src="https://img.freepik.com/premium-vector/brunette-man-avatar-portrait-young-guy-vector-illustration-face_217290-1035.jpg?w=2000" alt="User Avatar" />
</div>
          <div className="profile-field">
            <input
              type="text"
              className="profile-input"
              name="fullname"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Full Name"
            />
          </div>

          <div className="profile-field">
            <input
              type="email"
              className="profile-input"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email Address"
            />
          </div>

          <div className="profile-field">
            <textarea
              className="profile-textarea"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              placeholder="Address"
            />
          </div>

          <div className="profile-field">
            <input
              type="tel"
              maxLength="10"
              className="profile-input"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              placeholder="Phone Number"
            />
          </div>

          <button type="submit" className="profile-submit-btn">
            Update
          </button>
        </form>
      </div>
<LandingFooter />
    </>
    
  )
}

export default Profile;