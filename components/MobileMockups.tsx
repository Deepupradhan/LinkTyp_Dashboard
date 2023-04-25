import { useContext, useEffect, useState } from "react";
import { UserContext } from '../pages/UserContext';
import axios from "axios";
import Cookies from "js-cookie";
export default function MobileMockups() {

const token = Cookies.get('access_token');

const [userData, setuserData] = useState();

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

const username = userData?.data[0]?.username;
console.log(username)


    return (
      <div className="w-full md:w-1/2 h-screen fixed">
        <div className="flex justify-center items-center h-full overflow-hidden">
          <figure className="mx-auto max-w-full h-auto">
            <div className=" rounded-3xl">
              <iframe
                src={`https://linktyp.com/${username}`}
                className="rounded-[1.25rem] border-8 border-gray-800"
                style={{ width: "280px", height: "560px" }}
              ></iframe>
            </div>
          </figure>
        </div>
      </div>
    );
  }
