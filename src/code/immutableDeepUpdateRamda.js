// Single update
deep = R.assocPath(["user", "addresses", 1, "street"], newWorkStreet, deep);

// Multi-update
deep = R.mergeDeepRight(deep, {
  updatedAt: "2018-06-08",
  user: {
    isVerified: true
  }
});
