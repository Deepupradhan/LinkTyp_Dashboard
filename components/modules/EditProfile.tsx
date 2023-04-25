import { BiLinkAlt } from "react-icons/bi";
import { MdFeedback, MdOutlinePolicy, MdPrivacyTip } from "react-icons/md";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { toast } from "react-toastify";
import { useContext } from "react";
import { UserContext } from '../../pages/UserContext';


export default function EditProfile() {
  const token = Cookies.get('access_token');

  const [userData, setuserData] = useState();

  // api call for Links

  useEffect(() => {
    axios
      .get("https://api.linktyp.com/api/getdata", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setuserData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(userData)



  // const avatar = userData.data[0].profile.avatar;
  const [profileName, setProfileName] = useState('')
  const [profileBio, setProfileBio] = useState('')

  //
  // const [profileName , setProfileName] = useState(userData.data[0].profile.name)


  const [profileImage, setProfileImage] = useState()
  const handleProfileImage = (e: any) => {
    const formData = new FormData();
    formData.append('avatar', profileImage);
    axios
      .post('https://api.linktyp.com/api/profile/avatar', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success('Profile image updated successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleProfileUpdate = () => {
    if (!profileName || !profileBio) {
      // If either field is empty, don't add the card
      return (
        toast.error('Please fill all the fields')
      )
    }
    const profileData = {
      name: profileName,
      bio: profileBio,
      nameColor: '#000000',
      bioColor: '#000000',
    };
    axios
      .post('https://api.linktyp.com/api/profile', profileData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success('Profile updated successfully');
      })
      .catch((err) => {
        console.log(err);
      });
  };


  if (!userData) {
    return <div>Loading...</div>;
  }



  return (
    <div className="flex flex-col justify-center items-center w-full  rounded-2xl pt-10">
      <div className=" h-full md:w-full md:px-10 w-full px-5 pb-10">
        <div className="flex justify-around ">
          <div className="avatar online">
            <div className="w-28 rounded-full border-2 border-sky-300">
              <img
                src={userData.data[0].profile.avatar}
                className=" rouded-full"
                alt="avatar"
              />
            </div>
          </div>
          <div className="flex flex-col w-3/5 justify-center">
            <button className='btn bg-sky-300 border-sky-400 mb-3 rounded-full'>
              Upload file
              <input
                type="file"
                className="upload_button"
                onChange={(e) => setProfileImage(e.target.files[0])}
              />
            </button>
            <button className="btn btn-outline border-sky-300 rounded-full" onClick={handleProfileImage}>
              Save
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center md:px-10">
          <input
            value={profileName}
            onChange={(e) => setProfileName(e.target.value)}
            type="text"
            placeholder={userData.data[0].profile.name}
            className="input input-bordered border-sky-300 w-full mb-5 mt-5"
          />
          <textarea
            value={profileBio}
            onChange={(e) => setProfileBio(e.target.value)}
            className="textarea textarea-info w-full textarea-lg"
            placeholder={userData.data[0].profile.bio}
          ></textarea>
          <div className="flex justify-end w-full pt-3">
            <button className="btn bg-sky-300 rounded-full" onClick={handleProfileUpdate}>save</button>
          </div>
        </div>
      </div>
    </div>
  )
}