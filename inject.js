// $(document).ready(() => {
window.onload = () => {
  console.log("my shit doesn't work");
  const head = document.querySelector("head");
  const script = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.src = chrome.extension.getURL("popup.js");
  head.appendChild(script);

  var link = document.createElement("link");
  link.href = chrome.extension.getURL("popup.css");
  link.type = "text/css";
  link.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(link);
};
