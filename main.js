const zoomImage = (e: any) => {
  let rect = e.target.getBoundingClientRect();
  let zoomer = e.currentTarget;
  let offsetX = e.clientX - rect.left;
  let offsetY = e.clientY - rect.top;

  if (e.touches) {
    let touch = e.touches[0];
    imageRef.current.style.opacity = 0;
    document.body.style.overflow = "hidden";
    offsetX = touch.clientX - e.target.offsetLeft;
    offsetY = touch.clientY - e.target.offsetTop;
  } else {
    e.offsetX ? (offsetX = e.offsetX) : null;
    e.offsetY ? (offsetY = e.offsetY) : null;
  }

  let x = (offsetX / zoomer.offsetWidth) * 100;
  let y = (offsetY / zoomer.offsetHeight) * 100;
  setPosition({ x, y });
};

const zoomRevers = () => {
  imageRef.current.style.opacity = 1;
  document.body.style.overflow = "auto";
};
