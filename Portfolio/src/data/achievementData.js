import hack from "../assets/svg/acheivements/hack.webp";
import nptel from "../assets/svg/acheivements/nptel.png";
import nptel1 from "../assets/svg/acheivements/nptel1.svg";



export const achievementData = {
  bio: "",
  achievements: [
    {
      id: 1,
      title: "KEC Hackathon 2024 - Software Edition",
      details:
      "Worked on a Students Activity Points Management System within 30 hours during the KEC Hackathon held at Kongu Engineering College.",
      date: "March, 2024",
      field:"Hackathon Project",
      image: hack,
    },
    {
    id: 2,  
     title: "MongoDB Certified Associate Developer",
     details: "Certified by MongoDB, Inc. for successfully completing the Associate Developer certification and demonstrating MongoDB development skills.",
     date: "February, 2025",
     field: "Database Development",

      image: nptel1,
    },
    {
      id: 3,
title: "Human Computer Interaction - NPTEL",
details: "Completed a 12-week NPTEL course with 86% score, including full marks in assignments and a strong performance in the proctored exam.",
date: "April, 2025",
field: "Human-Computer Interaction",
image: nptel,
    },
  ],
};

// Do not remove any fields.
// Leave it blank instead as shown below.

/*

export const achievementData = {
    bio : "",
    achievements : []
}

*/
