import { getDatabase, ref, set, onValue } from "firebase/database";

function generate(length) {
  for (
    var s = "";
    s.length < length;
    s +=
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(
        (Math.random() * 62) | 0
      )
  );
  return s;
}

export function writeUserData(name, email, roll, batch) {
  const db = getDatabase();
  set(ref(db, "users/" + generate(10)), {
    name,
    email,
    batch,
    roll,
    isStudent: true,
  });
}

export function writeTeacherData(name, email, batch, roll) {
  const db = getDatabase();
  set(ref(db, "users/" + generate(10)), {
    name,
    email,
    isStudent: false,
  });
}

export function writeAssignMentData(
  teacher,
  student,
  roll,
  batch,
  assignmentUrl,
  topic
) {
  const db = getDatabase();
  set(
    ref(
      db,
      `assignment/${teacher.trim()}/${batch.trim()}/${topic.trim()}/${roll.trim()}`
    ),
    {
      teacher,
      student,
      roll,
      batch,
      assignmentUrl,
      topic,
    }
  );
}

export function getAllUser() {
  const db = getDatabase();
  let temp;
  const starCountRef = ref(db, "users/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    temp = Object.keys(data).map((item) => {
      return {
        name: data[item].name,
        roll: data[item].roll,
        batch: data[item].batch,
        email: data[item].email,
        isStudent: data[item].isStudent,
      };
    });
  });
  return temp;
}

export function getAllTeacher() {
  const db = getDatabase();
  let temp;
  const starCountRef = ref(db, "teachers/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    temp = Object.keys(data).map((item) => {
      return {
        name: data[item].name,
        id: data[item].id,
      };
    });
  });
  return temp;
}

export function getAllAssignment() {
  const db = getDatabase();
  let temp;
  const starCountRef = ref(db, "teachers/");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    temp = Object.keys(data).map((item) => {
      return {
        name: data[item].name,
        id: data[item].id,
      };
    });
  });
  return temp;
}

export function readData(email) {
  const allUser = getAllUser();
  console.log(allUser, "alluser");
  return allUser.filter((item) => item.email === email)[0];
}
