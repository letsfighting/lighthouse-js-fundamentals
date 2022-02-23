let facebookProfile = {
  name: 'Olbap',
  friends: 200,
  messages: ['hello world', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  postMessage: function (message) {
    facebookProfile.messages.push(message);
  },
  deleteMessage: function (index) {
    facebookProfile.messages.splice(index, 1);
  },
  addFriend: function () {
    facebookProfile.friends++;
  },
  removeFriend: function () {
    this.friends--;
  }
}

facebookProfile.removeFriend();
console.log(facebookProfile.friends);