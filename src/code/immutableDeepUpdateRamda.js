// Single update
state = R.assocPath(
  ["employee", "skills", 2, "level"],
  10,
  state
);

// Multi-update
state = R.mergeDeepRight(state, {
  position: {
    title: "Senior Developer"
  },
  employee: {
    isVerified: true
  }
});
