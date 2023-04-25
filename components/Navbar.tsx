import { BiShareAlt } from 'react-icons/bi'
import { IoLogoTumblr } from 'react-icons/io'
import { MdOutlineNotificationsActive } from 'react-icons/md'



export default function Navbar({ onAppearanceClick, onLinkClick, onAnalyticsClick, onSettingsClick, props }) {
  return (
    <div className="w-full h-full bg-white">
      {/*z-50 apply here (z-index) */}
      <div
        className="flex flex-col-reverse w-full md:w-auto md:flex-row fixed md:right-2 md:left-2 md:top-2 bg-slate-200 z-50 md:rounded-full md:items-center items-stretch border-b border-sand">
        <a aria-label="Admin" href="" className=" w-6 h-6 hidden md:flex md:mx-6" data-testid="Route">
          {/* Logo Goes Here */}
          < IoLogoTumblr className="text-3xl text-black" />
        </a>
        <div className="flex w-full overflow-x-auto  h-16 md:gap-4">
          <button
            onClick={onLinkClick}

            className="inline-block md:flex focus:outline-none  group items-center justify-center relative text-center py-3 flex-1 md:flex-none"
            data-testid="Route">
            <span
              className="flex-col md:flex-row text-xs md:text-sm duration-75 ease-out font-semibold md:group-hover:bg-marble md:px-xs rounded-sm transition-background-color group-focus-visible:ring-2 group-focus-visible:ring-black -tracking-[0.35px] xl:tracking-[0px] flex items-center h-auto md:h-full text-concrete">
              <span aria-hidden="true" className="p-1 md:pr-2 md:pl-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" "
                  role="img"
                  aria-hidden="false"
                  aria-labelledby="ltclid0_title ">
                  <title id="ltclid0_title">Links</title>
                  <path
                    fillRule="evenodd"
                    // clip-rule="evenodd"
                    d="M16 2H0V1h16v1ZM0 5.5.5 5h15l.5.5v5l-.5.5H.5l-.5-.5v-5ZM1 6v4h14V6H1Zm-1 9h16v-1H0v1Z"
                    fill="currentColor"></path>
                </svg>
              </span>
              <span className='block font-semibold text-sm'>Links</span>
            </span>
          </button>
          <button
            onClick={onAppearanceClick}
            className="inline-block md:flex focus:outline-none  group items-center justify-center relative text-center py-3 flex-1 md:flex-none"
            data-testid="Route">
            <span
              className="flex-col md:flex-row text-xs md:text-sm duration-75 ease-out font-semibold md:group-hover:bg-marble md:px-xs rounded-sm transition-background-color group-focus-visible:ring-2 group-focus-visible:ring-black -tracking-[0.35px] xl:tracking-[0px] flex items-center h-auto md:h-full text-concrete">
              <span aria-hidden="true" className="p-1 md:pr-2 md:pl-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" "
                  role="img"
                  aria-hidden="false"
                  aria-labelledby="ltclid1_title ">
                  <title id="ltclid1_title">Appearance</title>
                  <path
                    fillRule="evenodd"
                    // clip-rule="evenodd"
                    d="M6.008 1a5.009 5.009 0 1 0 0 10.018v1A6.009 6.009 0 1 1 6.008 0v1Zm5.01 5.009A5.009 5.009 0 0 0 6.008 1V0a6.009 6.009 0 0 1 6.01 6.009h-1Zm-4.01.5-.5.5V15.5l.5.5H15.5l.5-.5V7.008l-.5-.5H7.007Zm.5 8.492V7.508H15v7.493H7.507Z"
                    fill="currentColor"></path>
                </svg>
              </span>
              <span className='block font-semibold text-sm'>Appearance</span>
            </span>
          </button>

          <button
            onClick={onAnalyticsClick}
            className="inline-block focus:outline-none  group items-center justify-center relative text-center py-3 flex-1 md:flex-none"
            data-testid="Route">
            <span
              className="flex-col md:flex-row text-xs md:text-sm duration-75 ease-out font-semibold md:group-hover:bg-marble md:px-xs rounded-sm transition-background-color group-focus-visible:ring-2 group-focus-visible:ring-black -tracking-[0.35px] xl:tracking-[0px] flex items-center h-auto md:h-full text-concrete">
              <span aria-hidden="true" className="p-1 md:pr-2 md:pl-0">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className=" "
                  role="img"
                  aria-hidden="false"
                  aria-labelledby="ltclid2_title ">
                  <title id="ltclid2_title">Analytics</title>
                  <path
                    // clip-rule="evenodd"
                    d="m11 1-1 1v2h-4l-1 1v2h-4l-1 1v6l1 1h4l.5-.5.5.5h4l.5-.5.5.5h4l1-1v-12l-1-1zm0 13h1 2 1v-1-10-1h-1-2-1v1 2 8zm-1-9h-1-2-1v1 2 5 1h1 2 1v-1-7zm-6 3h1v1 4 1h-1-2-1v-1-4-1h1z"
                    fill="currentColor"
                    fillRule="evenodd"></path>
                </svg>
              </span>
              <span className='block font-semibold text-sm'>Settings</span>
            </span>
          </button>

          {/* <button
        onClick={onSettingsClick}
          className="  focus:outline-none  group items-center justify-center relative text-center py-3 flex-1 md:flex-none hidden md:flex after:absolute after:bg-black after:h-[1px] after:rounded-[4px] after:bottom-0 after:left-0 after:right-0 after:md:hidden"
          data-testid="Route">
          <span
            className="flex-col md:flex-row text-xs md:text-sm duration-75 ease-out font-semibold md:group-hover:bg-marble md:px-xs rounded-sm transition-background-color group-focus-visible:ring-2 group-focus-visible:ring-black -tracking-[0.35px] xl:tracking-[0px] flex items-center h-auto md:h-full text-black">
            <span aria-hidden="true" className="p-1 md:pr-2 md:pl-0">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" "
                role="img"
                aria-hidden="false"
                aria-labelledby="ltclid3_title ">
                <title id="ltclid3_title">Settings</title>
                <path
                  fillRule="evenodd"
                  // clip-rule="evenodd"
                  d="M11.4607 13.9951L4.53809 13.9951L1.07677 7.99995L4.53809 2.00476L11.4607 2.00476L14.9221 7.99995L11.4607 13.9951ZM0.0664062 8.24995L3.81641 14.7451L4.24942 14.9951L11.7494 14.9951L12.1824 14.7451L15.9324 8.24995V7.74995L12.1824 1.25476L11.7494 1.00476H4.24942L3.81641 1.25476L0.0664062 7.74995V8.24995ZM5.99923 7.99973C5.99923 6.89516 6.89466 5.99973 7.99923 5.99973C9.1038 5.99973 9.99923 6.89516 9.99923 7.99973C9.99923 9.1043 9.1038 9.99973 7.99923 9.99973C6.89466 9.99973 5.99923 9.1043 5.99923 7.99973ZM7.99923 4.99973C6.34238 4.99973 4.99923 6.34288 4.99923 7.99973C4.99923 9.65659 6.34238 10.9997 7.99923 10.9997C9.65609 10.9997 10.9992 9.65659 10.9992 7.99973C10.9992 6.34288 9.65609 4.99973 7.99923 4.99973Z"
                  fill="currentColor"></path>
              </svg>
            </span>
            <span className='block font-semibold text-sm'>Settings</span>
          </span>
        </button> */}
          <button
            className="inline-block  focus:outline-none  group items-center justify-center relative text-center py-3 flex-1 md:flex-none md:hidden"
            data-testid="Route">

            <span
              className="flex-col md:flex-row text-xs md:text-sm duration-75 ease-out font-semibold md:group-hover:bg-marble md:px-xs rounded-sm transition-background-color group-focus-visible:ring-2 group-focus-visible:ring-black -tracking-[0.35px] xl:tracking-[0px] flex items-center h-auto md:h-full text-concrete">
              <span aria-hidden="true" className="block rounded-full overflow-hidden w-6 h-6">
                <img
                  src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                  alt="Profile Avatar"
                  className="rounded-full border border-solid border-marble" />
              </span>
              <span className='block font-semibold text-sm'>More</span>
            </span>
          </button>
        </div>
        <div className="flex items-center justify-between border-b md:border-none border-marble h-14">
          <a aria-label="Admin" href="" className="inline-block flex-col justify-center items-center w-6 h-10 mx-4 md:hidden" data-testid="Route">
            < IoLogoTumblr className="text-2xl text-black" />
          </a>
          <div className="flex items-center mx-2 gap-x-2 md:mx-3 relative">
            {/* demo div */}
            <div className="flex h-10">
              <button
                className="relative transition duration-75 ease-out w-full h-2xl px-md rounded-xl outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black antialiased text-black px-2 max-h-10 border-none hover:bg-sand bg-marble active:bg-sand focus-visible:bg-sand focus-visible:outline-none  bg-slate-200 border border-sand hover:bg-chalk hover:border-chalk active:bg-chalk active:border-chalk"
                type="button">
                <span className="flex items-center justify-center">
                  <span className="block pr-xs">
                    {/* Demo Icon Goes Here */}
                    <MdOutlineNotificationsActive className="text-2xl text-black" />
                  </span>
                  <span className="block font-semibold text-sm pr-1 pl-1">Notification</span>
                </span>
              </button>
            </div>
            {/* share Button div */}
            <div>
              <button
                type="button"
                className="flex justify-center items-center">
                < BiShareAlt className="text-2xl text-black" />
                <span className='block font-semibold text-sm pr-1 pl-1'>share</span>
              </button>
            </div>
            {/* Account div */}
            <div className="relative hidden md:flex cursor-pointer" >
              <button
                className="hover:outline-sand hover:outline-2 hover:outline-offset-2 hover:outline rounded-full focus:outline-2 focus:outline-offset-2 focus:outline focus:outline-black focus-visible:outline-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline duration-75 ease-out  outline outline-2"
                type="button"
                aria-expanded="false"
                id="headlessui-popover-button-1">
                <span className="sr-only">Open user menu</span>
                <span className="relative w-10 rounded-full overflow-hidden flex">
                  <span className="sr-only">Account Menu</span>
                  <span aria-hidden="true">
                    <img
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                      alt="Profile Avatar"
                      className="rounded-full border border-solid border-marble" />

                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}