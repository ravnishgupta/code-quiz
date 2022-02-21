# Javascript Coding Quiz
This project uses Javascript to dynamically change the appearance of web pages. It also uses Web APIs to:
1. Save data to and retrieve data from `localStorage`
1. Start timer using `setInterval()` 
1. Stop timer using `clearInteral()`

### What does it do?
The user has to answer 5 Javascript questions within 75 seconds. Whenever they select a wrong option, the timer is deducted by 15 seconds. However, if they answer it correctly, the timer is not changed.

### Final Score
The final score is the number of seconds left in the timer. If the user does not answer the questions in 75 seconds, the score is 0.