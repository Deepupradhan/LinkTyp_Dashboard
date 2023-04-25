import axios from 'axios'
import { BiLinkAlt } from 'react-icons/bi'
import { MdPrivacyTip } from 'react-icons/md'
import { MdFeedback } from 'react-icons/md'
import { MdOutlinePolicy } from 'react-icons/md'
import { SketchPicker } from 'react-color';
import { useState } from 'react'
export default function UserSettings(props: any) {
  const [nameColor, setnameColor] = useState('#000000');
  const [bioColor, setBioColor] = useState('#000000');
  const [showNameColorPicker, setShowNameColorPicker] = useState(false);
  const [showBioColorPicker, setShowBioColorPicker] = useState(false);



  const handleNameColorClick = () => {
    setShowNameColorPicker(!showNameColorPicker);
  };

  const handleBioColorClick = () => {
    setShowBioColorPicker(!showBioColorPicker);
  };

  const handleNameColorChange = (newColor: any) => {
    setnameColor(newColor.hex);
  };

  const handleBioColorChange = (newColor: any) => {
    setBioColor(newColor.hex);
  };


  return (
    <>
      <div className="flex flex-col justify-center items-center w-full border-r-2 rounded-2xl pt-10">
        <div className=" h-full md:w-2/3 md:px-10 w-full px-5 pb-10">
          {/* choose font color */}
          <div className='flex flex-col md:px-10'>
            <div>
              <h1>font Color</h1>
            </div>
            <div className='flex'>
              {/* name color */}
              <div className='aspect-square rounded-full h-20 w-20 bg-red-200' onClick={handleNameColorClick}>
                <SketchPicker color={nameColor} onChange={handleNameColorClick} />
              </div>
              {/* bio color */}
              <div className='aspect-square rounded-full h-20 w-20 bg-red-200 ml-2'
                onClick={handleBioColorClick}
              >
                <SketchPicker color={bioColor} onChange={handleBioColorChange} />
              </div>
            </div>
          </div>
          {/* Setting page */}
          <div className="h-full md:px-10 w-full px-5 pt-10">
            <div><p className="font-bold tracking-widest uppercase pb-5">settings</p></div>
            <div>
              {/* Link div */}
              <div className="alert bg-sky-300 shadow-lg mb-5 cursor-pointer">
                <div>
                  <BiLinkAlt className="inline-block text-2xl mr-2" />
                  <span className="tracking-widest font-mono">Change Profile Link</span>
                </div>
              </div>
              {/* Privacy Policy div */}
              <div className="alert bg-sky-300 shadow-lg mb-5 cursor-pointer">
                <div>
                  <MdPrivacyTip className="inline-block text-2xl mr-2" />
                  <span className="tracking-widest font-mono">Privacy Policy</span>
                </div>
              </div>
              {/* Send Feedback */}
              <div className="alert bg-sky-300  shadow-lg mb-5 cursor-pointer">
                <div>
                  <MdFeedback className="inline-block text-2xl mr-2" />
                  <span className="tracking-widest font-mono">Send Feedback</span>
                </div>
              </div>
              {/* Terms And conditions */}
              <div className="alert bg-sky-300 shadow-lg mb-5 cursor-pointer">
                <div>
                  <MdOutlinePolicy className="inline-block text-2xl mr-2" />
                  <span className="tracking-widest font-mono">Terms And Conditions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
