import {
  movieID,
  Estore,
  JobSearch,
  EstoreOne,
  BackendJobs,
  StoreApi
} from "../assets";

export const navLinks = [
  {
    id: "contact",
    title: "Three JS | React JS",
  },
  {
    id: "work",
    title: "okwudilionyido@icloud.com",
  },

];





const projects = [
  {
    name: "Movie ID",
    description:
      "Front-End Movie ID created with React App, which is a popular tool for creating React applications",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "bootsrap",
        color: "pink-text-gradient",
      },
    ],
    image: movieID,
    source_code_link: "https://github.com/qubesmagazine/movieid",
  },
  {
    name: "Back-End JobPosting",
    description:
      "Node.js, MongoDB, and Postman can be used to create a Jobs API backend, which allows users to create, read, update, and delete job postings.",
    tags: [
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: BackendJobs,
    source_code_link: "https://github.com/qubesmagazine/JOBS-API-APP",
  },
  {
    name: "Job Search",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "React-Native",
        color: "blue-text-gradient",
      },
      {
        name: "rapidApi",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: JobSearch,
    source_code_link: "https://github.com/qubesmagazine/Expo-Job-Application-App",
  },
  {
    name: "E-Commerce",
    description:
      "E-Commerce shopping site using React Context and various hooks. The project focuses on implementing features like useFetch, useHistory, useState, and other essential hooks.",
    tags: [
      {
        name: "React Js",
        color: "blue-text-gradient",
      },
      {
        name: "restApi",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Estore,
    source_code_link: "https://github.com/qubesmagazine/OK-eCommerce-store",
  },
  {
    name: "E-Store",
    description:
      "Explore the process of building an eStore using React and Bootstrap, along with the integration of several npm dependencies",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
    ],
    image: EstoreOne,
    source_code_link: "https://github.com/qubesmagazine/E-STORE",
  },
  {
    name: "Back-End StoreApi",
    description:
      "Backend store API built with Node.js, MongoDB, and tested with Postman is a powerful combination for developing and testing robust and scalable web applications. Node.j",
    tags: [
      {
        name: "NodeJs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "NodeJs",
        color: "pink-text-gradient",
      },
    ],
    image: StoreApi,
    source_code_link: "https://github.com/qubesmagazine/store-Api-Backend",
  },
];

export { projects };
