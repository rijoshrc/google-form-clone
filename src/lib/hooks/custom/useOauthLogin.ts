import { useState } from "react";

type ReturnProps = {
  login: (e: React.MouseEvent<HTMLButtonElement>) => void;
  loading: boolean;
};

const w = 600;
const h = 600;

const useOauthLogin = (
  url: string,
  redirect_uri: string,
  callback: (query: any) => void
): ReturnProps => {
  const [loading, setLoading] = useState(false);

  const login = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setLoading(true);
    let popup = popupCenter(url, "Podio Login", w, h);
    // focus on the window
    if (popup && popup.focus) {
      popup.focus();
    }
    // get the redirect uri path
    let redirectUriParser = document.createElement("a");
    redirectUriParser.href = redirect_uri;
    let redirectUriPath = getFullUrlPath(redirectUriParser);
    // watch for the redirect url
    let poolingInterval: any = setInterval(() => {
      // if the popup closed
      if (!popup || popup.closed || popup.closed === undefined) {
        clearInterval(poolingInterval);
        poolingInterval = null;
        setLoading(false);
      }

      try {
        // get the redirect url path
        let popupWindowPath = getFullUrlPath(popup.location);
        // if redirected successfully
        if (popupWindowPath === redirectUriPath) {
          if (popup.location.search || popup.location.hash) {
            // parse the query string from the redirected url
            let query = parseQueryString(
              popup.location.search.substring(1).replace(/\/$/, "")
            );
            // handle the query data
            setLoading(false);
            callback(query);
          } else {
            console.log(
              "OAuth redirect has occurred but no query or hash parameters were found."
            );
          }
          // clear the time interval
          clearInterval(poolingInterval);
          // close window
          poolingInterval = null;
          popup.close();
        }
      } catch (e) {
        console.log("Error on authentication");
      }
    }, 500);
  };

  /**
   * Generate full url path from given url
   * @param location
   * @returns {string}
   */
  const getFullUrlPath = (location: any) => {
    try {
      const isHttps = location.protocol === "https:";
      return (
        location.protocol +
        "//" +
        location.hostname +
        ":" +
        (location.port || (isHttps ? "443" : "80")) +
        (/^\//.test(location.pathname)
          ? location.pathname
          : "/" + location.pathname)
      );
    } catch (e) {
      return null;
    }
  };

  /**
   * Parse the query string from url to object
   * @param str
   */
  const parseQueryString = (str: string) => {
    let obj: any = {};
    let key;
    let value;
    (str || "").split("&").forEach((keyValue) => {
      if (keyValue) {
        value = keyValue.split("=");
        key = decodeURIComponent(value[0]);
        obj[key] = !!value[1] ? decodeURIComponent(value[1]) : true;
      }
    });
    return obj;
  };

  /**
   * Open login window at the center of the screen
   * @param pageURL
   * @param title
   * @param w
   * @param h
   */
  const popupCenter = (
    pageURL: string,
    title: string,
    w: number,
    h: number
  ): any => {
    const win = <any>window;
    const y = win.top.outerHeight / 2 + win.top.screenY - h / 2;
    const x = win.top.outerWidth / 2 + win.top.screenX - w / 2;
    return window.open(
      pageURL,
      title,
      "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" +
        w +
        ", height=" +
        h +
        ", top=" +
        y +
        ", left=" +
        x
    );
  };

  return { login, loading };
};

export default useOauthLogin;
