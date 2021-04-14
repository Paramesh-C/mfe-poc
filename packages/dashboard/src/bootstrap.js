import './my-app';

// Mount function to start up the app
var myAppEl = document.createElement("My-App");

const mount = (el) => {
  el.appendChild(myAppEl);
};

// We are running through container
// and we should export the mount function
export { mount };
