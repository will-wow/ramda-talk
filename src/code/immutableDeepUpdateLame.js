// Mutation
state.employee.addresses[1].street = newWorkStreet;

// Slow
_.cloneDeep(state);

// Annoying
const address2 = { ...state.employee.addresses[1], street: newWorkStreet };
const addresses = [state.employee.addresses[0], address2];
state = { ...state, employee: { ...employee, addresses } };
