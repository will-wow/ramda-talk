const state = {
  updatedAt: "2018-06-01",
  position: {
    // title: "Developer",
    // roles: ["Lead", "Blogger"]
  },
  employee: {
    name: "Alice",
    isVerified: false,
    addresses: [
      { /* street: "123 Fake Street", city: "LA" */ },
      { street: "31 Work Ave", city: "Santa Monica" }
    ],
    skills: {
      // ruby: 5,
      // javascript: 7,
      // ramda: 11
    }
  }
};

R.assocPath(["employee", "addresses", 1, "street"], "525 Colorado", state);
