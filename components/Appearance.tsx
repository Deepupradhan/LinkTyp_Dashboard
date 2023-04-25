import { Color, ColorPicker } from "react-color-palette";
import Themes from "./modules/ThemeSelect";
import Backgrounds from "./Backgrounds";
import CardStyle from "./modules/CardSelect";
import Gradientslider from "./modules/BgSelect";
import Test from "./modules/CardStyle";
import Select from "./modules/ChooseColor";
import Fonts from "./modules/FontSelect";
import { log } from "console";
import EditProfile from "./modules/EditProfile";

export default function Appearance(props: any) {
  console.log(props)
  return (
    <>
      <div className="w-full h-full border-r-2 pt-10 md:px-20 px-3">
        <div>
          <EditProfile />
        </div>
        <div>
          <Themes />
        </div>
        <div >
          <Gradientslider />
        </div>
        <div >
          <CardStyle />
        </div>
        <div>
          <Select />
        </div>
        <div>
          <Test />
        </div>
        <div>
          <Fonts />
        </div>
      </div>
    </>
  )
}

