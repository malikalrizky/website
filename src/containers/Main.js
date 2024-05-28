import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Podcast from "./podcast/Podcast";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import SplashScreen from "./splashScreen/SplashScreen";
import EmptyPage from "./EmptyPage"; // make sure the path is correct
import {splashScreen} from "../portfolio";
import {StyleProvider} from "../contexts/StyleContext";
import {useLocalStorage} from "../hooks/useLocalStorage";
import "./Main.scss";

const Main = () => {
  const darkPref =
    typeof window !== "undefined"
      ? window.matchMedia("(prefers-color-scheme: dark)")
      : {matches: false};
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <Router>
      <div className={isDark ? "dark-mode" : null}>
        <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
          {isShowingSplashAnimation && splashScreen.enabled ? (
            <SplashScreen />
          ) : (
            <Routes>
              <Route path="/" element={
                <>
                  <Header />
                  <Greeting />
                  <Skills />
                  <StackProgress />
                  <WorkExperience />
                  {/* <Projects /> */}
                  {/* <StartupProject /> */}
                  <Achievement />
                  <Education />
                  {/* <Blogs /> */}
                  {/* <Talks /> */}
                  {/* <Twitter /> */}
                  {/* <Podcast /> */}
                  <Profile />
                  <Footer />
                  <ScrollToTopButton />
                </>
              } />
              <Route path="/empty" element={<EmptyPage />} />
            </Routes>
          )}
        </StyleProvider>
      </div>
    </Router>
  );
};

export default Main;
