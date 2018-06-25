// Mutation
state.employee.skills[2].level = 10;

// Slow
_.cloneDeep(state);

// Annoying
const ramdaSkill = { ...state.employee.skills[2], level: 10 };
const skills = [...state.employee.skills.slice(2), ramdaSkill];
state = { ...state, employee: { ...employee, skills } };
