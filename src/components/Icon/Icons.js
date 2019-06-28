import React from "react";

const Icons = {
  Logo: (
    <React.Fragment>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.8387 19H6.51613C4.02194 19 2 16.9107 2 14.3333C2 11.9443 3.73724 9.97461 5.97753 9.69951C6.48823 7.02055 8.77383 5 11.5161 5C13.7698 5 15.7151 6.36471 16.6202 8.33803C16.6927 8.33491 16.7655 8.33333 16.8387 8.33333C19.6892 8.33333 22 10.7211 22 13.6667C22 16.6122 19.6892 19 16.8387 19Z"
          fill="#000000"
        />
      </svg>
    </React.Fragment>
  ),
  Arrow: (
    <React.Fragment>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="#000000"
      >
        <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        <path fill="none" d="M0 0h24v24H0V0z" />
      </svg>
    </React.Fragment>
  ),
  Close: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="#000000"
    >
      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  )
};

export default Icons;
