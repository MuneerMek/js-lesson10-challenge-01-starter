const topicElement = document.querySelector(".topic");
const countElement = document.querySelector(".count");

let learning = {};
learning.category = "Front-End Development";
learning.topic = "JS";
learning.topicImportance = "High";
learning.learningGoals = [
  "Build JS Programs",
  "Compile & Retain Knowledge with Obsidian Notes",
  "Complete my Skillcrush Certificate",
  "Create Daily Practice Sites",
];
console.log(learning);

learning.topic = "JavaScript";
learning.learningGoals.splice(1, 1);
console.log(learning.learningGoals);

topicElement.innerText = `✔️ I'm learning ${learning.topic}`;
topicElement.classList.remove("hide");
countElement.innerText = `✔️ I have ${learning.learningGoals.length} learning goals`;
countElement.classList.remove("hide");
