import {
  about,
  addUser,
  dashboard,
  upload,
} from "@/public/assets";

export const navlinks = [
  {
    name: "Home",
    imgUrl: dashboard,
    link: "/",
  },
  {
    name: "Upload",
    imgUrl: upload,
    link: "/",
  },
  {
    name: "About Us",
    imgUrl: about,
    link: "/support/about",
  },
  {
    name: "invite friends",
    imgUrl: addUser,
    link: "/support/invite",
  },
];
