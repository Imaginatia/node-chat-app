var socket = io();

socket.on('connect', function () {
  console.log('Connected to server');

  socket.emit('createMessage', {
    from: 'jen@123.com',
    text: 'Hey'
  });

  socket.on('newMessage', function (message) {
    console.log(message);
  });
});

socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newEmail', function (email) {
  console.log('New email:', email);
});
