const state = {
  updatedAt: "2018-06-01",
  position: {
    title: "Developer",
    roles: ["Lead", "Blogger"]
  },
  employee: {
    name: "Alice",
    isVerified: false,
    address: { 
      street: "525 Colorado", city: "Santa Monica"
    },
    skills: [
      { name: "ruby", level: 5 },
      { name: "javascript", level: 7 },
      // We want to change level here
      { name: "ramda", level: 1 }
    ]
  }
};
