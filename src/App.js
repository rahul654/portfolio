import React, { useEffect, useRef } from "react";
import Preloader from "../src/components/Pre";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector, useDispatch } from 'react-redux';
import { loadingAction, setStateAction } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  const globalState = useSelector(state => state);
  useEffect(() => {
    // dispatch(setStateAction({
    //   "home2": {
    //     "detailsAboutMe": [
    //       "I fell in love with programming, and I have at least learned something, I think… 🤷‍♂️",
    //       "I am fluent in classics like JavaScript and Java.",
    //       "My fields of interest are building new web technologies and products. I am also skilled in DevOps.",
    //       "Whenever possible, I apply my passion for developing products using Node.js or Spring, as well as modern JavaScript libraries and frameworks like React.js and Next.js."
    //     ]
    //   },
    //   "documentTitle": "Rahul's portfolio",
    //   "titles": [
    //     "Senior Software Engineer",
    //     "Freelancer",
    //     "Open Source Contributor"
    //   ],
    //   "aboutCard": {
    //     "name": "Rahul",
    //     "fullname": "Rahul Gupta ",
    //     "location": "Mumbai, India ",
    //     "education": "I have completed B.Tech from Atharva College of Engineering, Mumbai, India ",
    //     "hobbieslist": [
    //       "Playing Games",
    //       "Learning new techs",
    //       "Travelling"
    //     ],
    //     "quote": "\"Strive to build things that make a difference!\""
    //   },
    //   "skillsetIconName": [
    //     "DiAndroid",
    //     "DiJavascript1",
    //     "DiReact",
    //     "DiNodejs",
    //     "DiMongodb",
    //     "DiPython",
    //     "DiGit",
    //     "DiJava",
    //     "SiRedis",
    //     "SiFirebase",
    //     "SiNextdotjs",
    //     "SiPostgresql"
    //   ],
    //   "toolsSkillsetIconName": [
    //     "SiVisualstudiocode",
    //     "SiPostman",
    //     "SiSlack",
    //     "SiVercel",
    //     "SiMacos"
    //   ],
    //   "githubUserName": "rahulgupta654",
    //   "showGithubProfile": false,
    //   "footer": {
    //     "footerText": "Designed and Developed by Rahul Gupta",
    //     "copyrightText": "Copyright © ",
    //     "footerSocialDetails": [
    //       {
    //         "socialLink": "https://github.com/rahul654",
    //         "socialIconType": "AiFillGithub"
    //       },
    //       {
    //         "socialLink": "",
    //         "socialIconType": "AiOutlineTwitter"
    //       },
    //       {
    //         "socialLink": "",
    //         "socialIconType": "AiFillInstagram"
    //       },
    //       {
    //         "socialLink": "https://www.linkedin.com/in/rahul-gupta-developer/",
    //         "socialIconType": "FaLinkedinIn"
    //       }
    //     ]
    //   },
    //   "projects": [
    //     {
    //       "title": "Sales Assist 3.0",
    //       "description": "An insurance app where I implemented paperless, anytime login with Device Lock for security, integrated DigiLocker for document retrieval and KYC, implemented NSDL verification and OCR-based data extraction, enabled EPFO data fetching, ITR pull, Account Aggregator, and Credit Report Pull, engineered reverse geocoding and location-based attendance tracking, and integrated Firebase for real-time push notifications.",
    //       "githubLink": "",
    //       "demoLink": "https://play.google.com/store/apps/details?id=com.reliancenippon.salesassist&pcampaignid=web_share"
    //     }
    //   ],
    //   "githubProfile": "https://github.com/rahul654"
    // }));
    // dispatch(loadingAction(false));
  }, [])

  /*
    Why useRef is Not Recreated on Re-renders?
    useRef Returns the Same Object Every Time

    When React re-renders the component, it does not reset the useRef object.
    The .current property persists between renders.
    Unlike useState, Changing useRef.current Does Not Trigger a Re-render

    If you update useState, React will re-render the component.
    If you update useRef.current, React does not trigger a re-render.
  */
  const isFetched = useRef(false); // Prevents multiple fetch calls

  /*
    useCallback --> cached function, prevents expensive function reconstruction
    useMemo --> memoized component, prevents expensive calculation rerender
  */

  useEffect(() => {
    if (isFetched.current) return; // Ensures fetch happens only once
    isFetched.current = true;
    try {
      /*
      fetchData function is called twice because the useEffect hook with an empty dependency array ([]) is running twice. In React, this usually happens due to:
        Strict Mode in Development: If you're using React's Strict Mode, useEffect runs twice on mount in development but only once in production.

        Re-rendering due to Redux State Updates: If dispatch(setStateAction(...)) updates the global state, the component re-renders, potentially triggering another useEffect.
      */
      const fetchData = async () => {
        const GOOGLE_SHEET_ID = "12pRGfIy6SgFxpHr32dtdqgaRUeZh_5h4Y77BZHIOdfY";
        const API_KEY = "AIzaSyDV-XgyDl4AaNJio4csbI2lnTjmtRcZj3Q";
        const RANGE = "Sheet1!A1:C10";
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${GOOGLE_SHEET_ID}/values/${RANGE}?key=${API_KEY}`;
        try {
          dispatch(loadingAction(true));
          const response = await fetch(url);
          const result = await response.json();
          if (result?.values) {
            dispatch(setStateAction(JSON.parse(result?.values?.[0]?.[0] || `{1:1}`)));
          } else {
            console.error("No data found");
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        } finally {
          dispatch(loadingAction(false));
        }
      };

      fetchData();
    } catch (error) {
      console.log('error::: ', error);
    }
  }, []);

  useEffect(() => {
    document.title = globalState?.data?.documentTitle || "Rahul's portfolio";
  });
  return (
    <Router>
      <Preloader />
      <div className="App" id={globalState?.loading ? "no-scroll" : "scroll"}>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
