// Single update
state = R.assocPath(
  ["employee", "addresses", 1, "street"],
  newWorkStreet,
  state
);

// Multi-update
state = R.mergeDeepRight(state, {
  position: {
    title: "Senior Developer"
  },
  employee: {
    skills: {
      ruby: 10
    }
  }
});
