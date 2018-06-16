// Single update
state = R.assocPath(["employee", "addresses", 1, "street"], newWorkStreet, state);

// Multi-update
state = R.mergeDeepRight(state, {
  updatedAt: "2018-06-08",
  user: {
    isVerified: true
  }
});
