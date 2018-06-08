// Mutation
deep.user.addresses[1].street = newWorkStreet;

// Slow
_.cloneDeep(deep);

// Annoying
const address2 = { ...deep.user.addresses[1], street: newWorkStreet };
const addresses = [deep.user.addresses[0], address2];
deep = { ...deep, user: { ...user, addresses } };
