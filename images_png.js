// Toggle this flag before exporting your email HTML
const isEmailMode = false; // false = preview in browser, true = export for email

const images = {
  logo: isEmailMode ? "cid:logo.png" : "images/logo.png",
  logo_2: isEmailMode ? "cid:logo_2.png" : "images/logo_2.png",
  linkedin: isEmailMode ? "cid:linkedin.png" : "images/linkedin.png",
  twitter: isEmailMode ? "cid:twitter.png" : "images/twitter.png",
  facebook: isEmailMode ? "cid:facebook.png" : "images/facebook.png",
  instagram: isEmailMode ? "cid:instagram.png" : "images/instagram.png",
  youtube: isEmailMode ? "cid:youtube.png" : "images/youtube.png",
};
