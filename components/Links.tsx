import { useEffect, useState } from "react";
import { AiOutlinePlus, AiOutlineQuestionCircle } from "react-icons/ai";
import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md";
import { BiEditAlt } from "react-icons/bi"
import React from "react";
import { url } from "inspector";
import axios from "axios";
import Cookies from 'js-cookie';
import { useContext } from "react";
import { UserContext } from '../pages/UserContext';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Image from "next/image";
import Analytics from "./modules/analytics";

export default function Links(props: any) {

  // const { userData } = useContext(UserContext);
  // const data = userData;


  const [open, setOpen] = useState(false);
  const [cards, setCards] = useState<{ name: string; link: string; }[]>([]);
  const [showData, setShowData] = useState([]);
  const [newCard, setNewCard] = useState({ name: '', link: '' });
  const [addcardText , setAddcardText] = useState("");
  const [addcardUrl , setAddcardUrl] = useState("");
  const [userData, setuserData] = useState();
  const [updateText , setupdateText] = useState("");
  const [updateUrl , setupdateUrl] = useState("");
  
  const [toggle , setToggle] = useState(false);

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
        setShowData(res.data.data[0].containerLinks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


console.log(userData)
console.log(showData[0]) 
// console.log(userData.data[0].containerLinks[0].link)







  
  

  // const token=localStorage.getItem("access_token")
 const token = Cookies.get('access_token');
  
  const handleAddCard = () => {
    if (!addcardText || !addcardUrl) {
      // If either field is empty, don't add the card
      return;
    }

    const carddata = {
      name: addcardText,
      link: addcardUrl,
    };
  
    axios
      .post("https://api.linktyp.com/api/container/link", carddata, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);

        // Update the new card state variable with the response data
        setNewCard({ name: res.data.name, link: res.data.link });
        toast.success("Card added successfully");
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(addcardText);
    console.log(addcardUrl);
  };

  // Add the new card to the cards state variable after the new card state variable is updated
  useEffect(() => {
    if (newCard.name && newCard.link) {
      setCards([...cards, newCard]);
    }
  }, [newCard]);
 

const handleUpdateCard = (_id: string, index: number) => {
  if (!_id) {
    console.log('Error: id is undefined or null');
    return;
  }
  setAddcardText(updateText);
  setAddcardUrl(updateUrl);
  const updatedCardData = {

    name: addcardText,
    link: addcardUrl,
  };
console.log(updatedCardData);
  axios
    .put(`https://api.linktyp.com/api/container/link/${_id}`, updatedCardData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      console.log(res);

      // Update the cards state variable with the updated card
      setCards(cards => {
        const newCards = [...cards];
        newCards[index] = {
          name: res.data.name,
          link: res.data.link,
        };
        return newCards;
      });
      toast.success("Card updated successfully");
    })
    .catch((err) => {
      console.log(err);
    });
};




  
  const handleDeletecard = (_id: string, index: number) => {
    if (!_id) {
      console.log('Error: id is undefined or null');
      return;
    }
    
    axios
    .delete(`https://api.linktyp.com/api/container/link/${_id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
        if (res.status === 201) {
          toast.success("Card deleted successfully");
        }
        console.log(res);
        console.log(`Deleted card with id: ${_id}`);
        setCards(cards => {
          const newCards = [...cards];
          newCards.splice(index, 1);
          return newCards;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };


if (userData === undefined) {
  return (
    <>
    <p>Loading...</p>
    </>
  )
}
  
  return (
    <div className="h-full w-full md:border-r-2 border-gray-100 cursor-pointer">
      <div className="p-5 flex justify-center">
        <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box w-full">
          {/* Analytics Start */}
          <div className="collapse-title text-xl font-medium flex items-center">
            Analytics <span className="pl-5"> <AiOutlineQuestionCircle className="text-gray-400" /></span>
          </div>
          <div className="collapse-content">
            <Analytics />
          </div>
          {/* Analytics End */}
        </div>
      </div>
      {/* Add Links Button */}
      <div className="p-5 flex justify-center">
        <button
          className="text-white bg-blue-500 border border-gray-300  font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 w-full md:h-12 md:w-2/3 flex justify-center items-center"
          onClick={handleAddCard}
        >
          <span className="pr-2 text-lg text-white">
            {" "}
            <AiOutlinePlus className="text-white" />
          </span>
          <label htmlFor="my-modal">Add Link</label>
        </button>
        {/* Modal */}
        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative">
            {/* Modal Content start */}
            <label htmlFor="my-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Your Text</span>
              </label>
              <label className="input-group">
                <span>text</span>
                <input type="text" placeholder="Your Text" className="input input-bordered" value={addcardText} onChange={(e) => setAddcardText(e.target.value)}/>
              </label>
              <label className="label">
                <span className="label-text">Your Link</span>
              </label>
              <label className="input-group">
                <span>Link</span>
                <input type="text" placeholder="https://......" className="input input-bordered" value={addcardUrl}  onChange={(e) => setAddcardUrl(e.target.value)}/>
              </label>
            </div>
            <input type="checkbox" className="toggle mt-3" checked />
            {/* modal content end */}
            <div className="modal-action">
              <label htmlFor="my-modal" className="btn" onClick={handleAddCard}>Save</label>
            </div>
          </div>
        </div>
        {/* Modal */}
      </div>
      <div className="pt-5 pb-5 flex justify-center items-center">
        <div className="flex flex-col items-center w-full h-screen mx-3">
          {
            showData.map((item: any, index: any) => {
              console.log(item.link);
              return (
                <div
                  key={index}
                  className="stat flex justify-between md:px-3 w-full py-1 h-32  items-center gap-1 rounded-lg border-2 border-gray-100 my-4 md:w-2/4 cursor-pointer px-3"
                  // style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px;"}}
                  style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px" }}
                >
                  <div className="relative md:w-20 md:h-20 h-16 w-16 mr-5">
                    <img
                      className="w-full h-full object-cover rounded-lg "
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      alt=""
                    />
                    {/* <Image src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" height="100" width="100" alt="profik" />  */}
                  </div>
                  <div>
                    <span className="text-base font-sans">
                      {item.name}
                    </span>
                    <p className="font-mono text-sm">{item.link}</p>
                  </div>
                  <div className="flex">
                    {/* eddit icon */}
                    <label htmlFor="my-modal-3">
                      <BiEditAlt className="text-3xl cursor-pointer" />
                    </label>
                    <input type="checkbox" id="my-modal-3" className="modal-toggle" />
                    <div className="modal">
                      <div className="modal-box relative">
                        <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        {/* Modal Content Start */}
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Enter Text</span>
                          </label>
                          <label className="input-group">
                            <span>Text</span>
                            <input type="text" value={updateText} placeholder="Enter Text Here" className="input input-bordered"
                              onChange={(e) => setupdateText(e.target.value)}
                            />
                          </label>
                        </div>
                        
                        <div className="form-control">
                          <label className="label">
                            <span className="label-text">Enter Link</span>
                          </label>
                          <label className="input-group">
                            <span>Link</span>
                            <input type="url" value={updateUrl} placeholder="https://typof.com" className="input input-bordered"
                              onChange={(e) => setupdateUrl(e.target.value)}
                            />
                          </label>
                        </div>
                        
                        <div className="my-modal-action">
                          <label htmlFor="my-modal-3" className="btn m-2" onClick={() => handleUpdateCard(item._id,index)}>save</label>
                          <label htmlFor="my-modal-3" className="btn">Discard</label>
                        </div>
                        {/* Modal Content End */}
                      </div>
                    </div>
                    {/* Delete Icon */}
                    <label htmlFor="my-modal-6">
                      <MdDeleteOutline className="text-3xl cursor-pointer" />
                    </label>
                    <input type="checkbox" id="my-modal-6" className="modal-toggle" />
                    <div className="modal modal-bottom sm:modal-middle">
                      <div className="modal-box">
                        {/*  */}
                        <div className="">
                          {/* <!--body--> */}
                          <div className="text-center p-5 flex-auto justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 -m-1 flex items-center text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 flex items-center text-red-500 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                            </svg>
                            <h2 className="text-xl font-bold py-4 ">Are you sure?</h2>
                            <p className="text-sm text-gray-500 px-8">Do you really want to delete your account?
                              This process cannot be undone</p>
                          </div>
                          {/* <!--footer--> */}
                          <div className="p-3  mt-2 text-center space-x-4 md:block mt-modal-action">
                            <label htmlFor="my-modal-6" className="mb-2 md:mb-0 bg-white px-5 py-2 text-sm shadow-sm font-medium tracking-wider border text-gray-600 rounded-full hover:shadow-lg hover:bg-gray-100">
                              Cancel
                            </label>
                            <label htmlFor="my-modal-6" className="mb-2 md:mb-0 bg-red-500 border border-red-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600" onClick={() => handleDeletecard(item._id,index)} >Delete</label>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/*  */}
                    <input type="checkbox" className="toggle" 
                    type="checkbox"
                    className="toggle"
                    checked={toggle}
                    onChange={(e) => setToggle(e.target.checked)}
                     />
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}
