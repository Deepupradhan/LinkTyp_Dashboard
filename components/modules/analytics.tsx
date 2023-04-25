import Navbar from "@/components/Navbar";
import Head from "next/head";
import { PieChart } from "react-minimal-pie-chart";
import { useContext, useEffect, useState } from "react";
import { UserContext } from '../../pages/UserContext';
import axios from "axios";
import Cookies from "js-cookie";
export default function Analytics() {

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


  return (
    <>
      
    </>
  )
}
