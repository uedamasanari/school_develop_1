import { useEffect, useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import MyHeader from "@/components/MyHeader";
import MyFooter from "@/components/MyFooter";
import Styles from "@/styles/App.module.css";
import "@/styles/globals.css"

const GlobalStyle = createGlobalStyle`
  // ここにグローバルなCSSを記述
`;

export default function App({ Component, pageProps }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const onResize = () => {
      const targetScale = Math.min(
        window.innerWidth / 414,
        window.innerHeight / 896
      );
      setScale(targetScale);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  });

  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      <div className={Styles.body}>
        <div className={Styles.container} style={{ transform: `scale(${scale}) translate(-50%,-50%)` }}>
          <Component {...pageProps} />
          <MyFooter />
        </div>
      </div>
    </ThemeProvider>
  );
}
