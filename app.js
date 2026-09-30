function register(user) {
  users.push(user);
}

register({
  username: "Zen",
  email: "zen@frontendsimplified.com", 
  password: "zen123", 
  subscriptionStatus: "VIP", 
  discordId: "Zen#001", 
  lessonsCompleted: [0, 1]
});

console.log(users);