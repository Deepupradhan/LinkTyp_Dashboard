import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

export default function Themes() {
  const [selectedThemeIndex, setSelectedThemeIndex] = useState(-1);
  const [userData, setuserData] = useState();
  const token = Cookies.get("access_token");

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


const handleThemeClick = (index: number) => {
    setSelectedThemeIndex(index);
    console.log(index)
    const data = {
      theme: index,
    };
      axios
        .post("https://api.linktyp.com/api/profile/theme", data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          console.log(res);
          toast.success("Theme updated successfully");
        })
        .catch((err) => {
          console.log(err);
        });
  };


  return (
    <div className="w-full px-2">
      <div className="mx-auto max-w-md text-center">
        <h2 className="text-2xl font-bold sm:text-3xl uppercase tracking-widest">
          Select THEME STYLE
        </h2>
        {/* <p className="mt-4 text-base text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus faucibus massa dignissim tempus.</p> */}
      </div>
      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 md:mt-10 md:grid-cols-4 lg:mt-12 lg:grid-cols-4 xl:mt-16 xl:grid-cols-6">
        {[1, 2, 3, 4, 5,6].map((index) => {
          const isSelected = selectedThemeIndex === index;
          return (
            <div
              key={index}
              className={`grid grid-col-2 md:grid-col-4 lg:grid-5 justify-center ${
                isSelected ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => handleThemeClick(index)}
            >
              <img
                src="https://horizon-tailwind-react-git-tailwind-components-horizon-ui.vercel.app/static/media/banner.ef572d78f29b0fee0a09.png"
                alt="img"
                className="rounded-lg w-36 h-48"
              />
            </div>
          );
        })}
      </div>
      <div className="flex justify-end w-full pt-3">
        <button className="btn rounded-full bg-sky-300">Save</button>
      </div>
    </div>
  );
}
