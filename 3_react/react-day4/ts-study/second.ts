interface User {
  id: number;
  username: string;
  email: string;
  age?: number;
  isActive: boolean;
}

const user1: User = {
  id: 1,
  username: "kim",
  email: "kim@example.com",
  isActive: true,
};

const user2: User = {
  id: 2,
  username: "park",
  email: "park@example.com",
  age: 55,
  isActive: true,
};

const users: User[] = [user1, user2];

function printUser(user: User): void {
  console.log(`id: ${user.id}`);
  console.log(`username: ${user.username}`);
  console.log(`email: ${user.email}`);
  console.log(`age: ${user.age || "미정"}`);
  console.log(`Actice: ${user.isActive ? "활성" : "미정"}`);
}

users.forEach(printUser);
