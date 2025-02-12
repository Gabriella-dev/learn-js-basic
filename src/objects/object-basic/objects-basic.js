const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 40 },
  { name: "Eve", age: 30 },
  { name: "Frank", age: 50 },
];

// Function to group objects by age
export function groupByAge(array) {
  const ageGroups = array.reduce((groups, person) => {
    const age = person.age;
    if (!groups[age]) {
      groups[age] = [];
    }
    groups[age].push(person);
    return groups;
  }, {});

  // Extract groups where there are multiple objects with the same age
  const result = [];
  for (const age in ageGroups) {
    if (ageGroups[age].length > 1) {
      result.push(...ageGroups[age]);
    }
  }

  return result;
}

// Get objects with the same age property
const sameAgePeople = groupByAge(people);

console.log(sameAgePeople);
