const isMobile = () => {
  return /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone|Opera Mini/i.test(navigator.userAgent);
};

export {isMobile};
