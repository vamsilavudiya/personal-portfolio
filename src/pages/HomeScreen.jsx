import React from "react";
import "./homescreen.css";
import {
  Button,
  Drawer,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Main from "./main/Main";

function HomeScreen() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <div className="navbar">
        <a href="/">VamsiLavudiya.Dev</a>
        <div>
        <Button ref={btnRef} className="drawer-btn" onClick={onOpen}> 
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="menu"><g data-name="Layer 2"><g data-name="menu"><rect width="18" height="2" x="3" y="11" rx=".95" ry=".95"></rect><rect width="18" height="2" x="3" y="16" rx=".95" ry=".95"></rect><rect width="18" height="2" x="3" y="6" rx=".95" ry=".95"></rect></g></g></svg>
        </Button>
        </div>
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          className="drawer">
          <DrawerCloseButton
          backgroundColor="#000"
          border="none"
            maxW="fit-content"
            alignSelf="flex-end"
            padding="10"
            cursor="pointer"
          />
          <div className="links-drawer">
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" id="projects"><path fill="#000" d="M10.489 25.495h-6a.5.5 0 0 1-.5-.5v-4.006c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5v4.006a.5.5 0 0 1-.5.5zm-5.5-1h5v-3.506c0-1.378-1.121-2.5-2.5-2.5s-2.5 1.122-2.5 2.5v3.506z"></path><path fill="#000" d="M19.489 45.495h-9a.5.5 0 0 1-.5-.5V23.989a.5.5 0 0 1 1 0v20.506h8.5a.5.5 0 0 1 0 1zm11-11.99a.5.5 0 0 1-.5-.5V20.989c0-1.378-1.121-2.5-2.5-2.5h-20a.5.5 0 0 1 0-1h20c1.93 0 3.5 1.57 3.5 3.5v12.016a.5.5 0 0 1-.5.5zm27.022 14.99h-23a.5.5 0 0 1 0-1h22.5v-31h-22v11.49a.5.5 0 0 1-1 0v-11.99a.5.5 0 0 1 .5-.5h23a.5.5 0 0 1 .5.5v32a.5.5 0 0 1-.5.5z"></path><path fill="#000" d="M50.511 48.495a.5.5 0 0 1-.5-.5v-10c0-.167.084-.323.223-.416l2.777-1.852V15.995a.5.5 0 0 1 1 0v20a.501.501 0 0 1-.223.416l-2.777 1.852v9.732a.5.5 0 0 1-.5.5zm9-27.006h-2a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5zm-1.5-1h1v-2h-1v2zm1.5 6h-2a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5zm-1.5-1h1v-2h-1v2zm1.5 6h-2a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5zm-1.5-1h1v-2h-1v2zM16.989 48.485c-1.654 0-3-1.346-3-3v-.49h1v.49c0 1.103.897 2 2 2v1zm28-9.5h-1v-8.5c0-1.103-.897-2-2-2h-11.25v-1h11.25c1.654 0 3 1.346 3 3v8.5z"></path><path fill="#000" d="M41.989 48.505h-25v-1c1.103 0 2-.897 2-2v-10c0-1.654 1.346-3 3-3h20c1.654 0 3 1.346 3 3v10c0 1.654-1.345 3-3 3zm-22.765-1H41.99c1.103 0 2-.897 2-2v-10c0-1.103-.897-2-2-2h-20c-1.103 0-2 .897-2 2v10a2.999 2.999 0 0 1-.766 2z"></path><path fill="#000" d="M24.489 21.489h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1zm3 3h-14a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1zm0 3h-14a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1zm0 3h-14a.5.5 0 0 1 0-1h14a.5.5 0 0 1 0 1zm-6 3h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1zm-2 3h-6a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1zm0 3h-6a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1zm0 3h-6a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1zm30.022-18.994h-8a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5zm-7.5-1h7v-2h-7v2z"></path></svg>Projects</a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" data-name="line expand" viewBox="0 0 48 48" id="education"><path fill="#000" d="M12.633 38.824H2.245c-.558 0-.745 0-.745-1.011V35.408a.75.75 0 0 0-1.5 0v2.405a2.142 2.142 0 0 0 2.245 2.511H12.633a.75.75 0 0 0 0-1.5zM.75 33.047a.75.75 0 0 0 .75-.75V7.505l22.7.039V20.049a.75.75 0 0 0 1.5 0V7.544A1.53 1.53 0 0 0 24.185 6H2.136l3.43-2.9h21.8a1.2 1.2 0 0 1 1.2 1.2V19.52a.75.75 0 0 0 1.5 0V4.3a2.7 2.7 0 0 0-2.7-2.7H5.292a.749.749 0 0 0-.484.177L.353 5.551a1.116 1.116 0 0 0-.242.377A.736.736 0 0 0 0 6.3v26A.75.75 0 0 0 .75 33.047z"></path><path fill="#000" d="M27.142 19.781a.75.75 0 0 0 .75-.75V6.04a2.234 2.234 0 0 0-2.227-2.231L6.919 3.77h0a.75.75 0 0 0 0 1.5l18.747.039a.732.732 0 0 1 .73.731V19.031A.75.75 0 0 0 27.142 19.781zM37.472 34.059a.75.75 0 0 0-.75.75v6.236a.9.9 0 0 1-.1.421C36.2 42.271 34.2 44.9 26.2 44.9s-10-2.626-10.427-3.432a.9.9 0 0 1-.1-.42V35.127a.75.75 0 0 0-1.5 0v5.918a2.416 2.416 0 0 0 .268 1.119C15.115 43.437 17.6 46.4 26.2 46.4s11.084-2.96 11.753-4.232a2.4 2.4 0 0 0 .27-1.12V34.809A.75.75 0 0 0 37.472 34.059z"></path><path fill="#000" d="M47.487,27.639,27.645,21.011a.732.732,0,0,0-.467,0L4.827,28.177A.751.751,0,0,0,4.816,29.6l20.9,7.064a.76.76,0,0,0,.24.04.751.751,0,0,0,.252-.044l15.341-5.478v3.6a2.522,2.522,0,0,0-1.793,2.406V38.7a2.528,2.528,0,0,0,5.056,0V37.186a2.524,2.524,0,0,0-1.763-2.4v-4.14L47.5,29.057a.75.75,0,0,0-.015-1.418ZM43.308,38.7a1.028,1.028,0,0,1-2.056,0V37.186a1.028,1.028,0,1,1,2.056,0ZM42.192,29.36,26.279,27.643a.75.75,0,1,0-.16,1.491l12.829,1.384-13,4.644L7.454,28.91l19.948-6.4,17.551,5.863Z"></path></svg>Education</a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 64 64" id="contact-info"><circle cx="14.5" cy="24.5" r="9.5" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="4"></circle><path fill="none" stroke="#030303" stroke-miterlimit="10" stroke-width="4" d="M1 49A14.74 14.74 0 0 1 15.48 34M29 49A14.74 14.74 0 0 0 14.52 34"></path><line x1="35" x2="63" y1="15" y2="15" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="4"></line><line x1="35" x2="63" y1="31" y2="31" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="4"></line><line x1="35" x2="63" y1="47" y2="47" fill="none" stroke="#000" stroke-miterlimit="10" stroke-width="4"></line></svg>About</a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 144 144" id="contact"><path fill="#000" d="M124.36 129.055h-94V74.441c-1-1.31-3.5-3.598-4.215-3.741-1.072-.214-1.785 1.838-1.785 3.741v53.944c0 1.509.698 3.016 2.053 3.485 1.71 1.493 4.234 2.609 5.921 2.609l90.504-.02c1.903 0 3.435-1.245 4.785-2.604l.757.696" opacity=".3"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M26.045 70.16a7.988 7.988 0 0 0-2.251 5.556v50.749c0 4.408 3.607 8.015 8.015 8.015h90.442c4.408 0 8.015-3.607 8.015-8.015v-50.75a7.986 7.986 0 0 0-2.251-5.555M91.621 100.892l36.367-30.753M26.069 70.136l36.272 30.674M32.608 63.599l-6.539 6.537M99.073 41.227 77.03 19.186 54.965 41.247M127.988 70.139l-6.495-6.495M77.028 88.9l-51.207 42.878M77.028 88.9l50.96 42.944"></path><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="m121.453 75.666.115-34.439h-88.96v34.439"></path><g transform="rotate(-6.76 59.482 66.906)"><circle cx="59.468" cy="66.892" r="4.479"  opacity=".3"></circle><circle cx="59.468" cy="66.892" r="4.479" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></circle></g><g transform="rotate(-6.76 77.857 66.906)"><circle cx="77.838" cy="66.892" r="4.479" fill="#000" opacity=".3"></circle><circle cx="77.838" cy="66.892" r="4.479" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></circle></g><g transform="rotate(-6.76 96.231 66.906)"><circle cx="96.209" cy="66.892" r="4.479" fill="#000" opacity=".3"></circle><circle cx="96.209" cy="66.892" r="4.479" fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></circle></g><path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M115.727 11.498v11.845M121.649 17.421h-11.844M8.967 47.564v11.844M3.045 53.486h11.844M136.994 51.95v7.091M140.539 55.496h-7.091"></path></svg>Contact</a>
            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="external-link"><path fill="none" fill-rule="evenodd" stroke="#000" stroke-linecap="round" d="M19 13.012V19.4a1.6 1.6 0 0 1-1.6 1.6H4.6A1.6 1.6 0 0 1 3 19.4V6.6A1.6 1.6 0 0 1 4.6 5h6.452M14 3h6a1 1 0 0 1 1 1v6M20.5 3.5l-9.618 9.618"></path></svg>Follow Me</a>
          </div>

          <DrawerFooter>
            <span className="copyright">@ Copyright - 2022</span>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Main />
    </>
  );
}


export default HomeScreen