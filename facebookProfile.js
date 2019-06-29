// Create an object called facebookProfile. The object should have 3 properties:

// your name
// the number of friends you have, and
// an array of messages you've posted (as strings)
// The object should also have 4 methods:

// postMessage(message) - adds a new message string to the array
// deleteMessage(index) - removes the message corresponding to the index provided
// addFriend() - increases the friend count by 1
// removeFriend() - decreases the friend count by 1

let facebookProfile = {
  name: 'Max Wong',
  numOfFriends: 1,
  postedMessages: ['#Coding', 'I am using Facebook', 'I love Macbook'],
  postMessage: (message) => {
    facebookProfile.postedMessages.push(message);
    return 'Your message was post!';
  },
  deleteMessage: (index) => {
    facebookProfile.postedMessages.splice(index, 1);
    return 'your message was deleted!';
  },
  addFriend: () => {
    facebookProfile.numOfFriends++;
    return `You just made a new friend! You now have ${facebookProfile.numOfFriends} friends!`;
  },
  removeFriend: () => {
    facebookProfile.numOfFriends--;
    return `You just lost a friend :(, you now have ${facebookProfile.numOfFriends} friends.`;
  }
}