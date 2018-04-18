var generateMessage = (from, message) => {
  return {
    from: from,
    text: message
  };
};

module.exports = {generateMessage};
