var generateMessage = (from, message) => {
  return {
    from: from,
    text: message,
    createdAt: new Date().getTime()
  };
};

var generateLocationMessage = (from, latitude, longitude) => {
  return {
    from,
    url: `https://www.google.com/maps?q=${latitude},${longitude}`,
    createdAt: new Date().getTime()
  }
};

module.exports = {generateMessage, generateLocationMessage};
