# Weather API

### Tech stack

I decided to go with a node.js + React stack for several reasons:

- I'm proficient in both of them
- JS is well set up to handle asynchronous data flow (e.g. waiting for a response from openweathermap API)
- node.js is performant and Express.js makes it easy to set up a simple web backend
- create-react-app allowed me to spin up a simple UI quickly without dealing with webpack and other configuration hurdles
- Since you use JS with both of them, it's easier to set up developer tooling and deployment since you can reuse some parts of it.
- Out of the box JSON support

The drawbacks of the tech stack:

- Potential security vulnerabilities given the huge number of sub-dependencies in an average-sized app
- Not the best performance for CPU-bound tasks (this wasn't applicable for the assignment)
- Significant amount of boiler-plate code needed to bootstrap a React app if not using create-react-app

### Date

May 25, 2021

### Location of deployed application

<a href="https://weather.levkaratun.com">UI</a>, <a href="https://api.weather.levkaratun.com/weather?city=Vancouver">API</a>

### Time spent

6 hours

### Assumptions made

User will click the "Get current weather" button after inserting a city name into the input box

### Shortcuts/Compromises made

Normally I'd make sure the app works with keyboard only and UI is responsive, but since UI wasn't the focus of the assignment, I skipped it.

### Stretch goals attempted

- Built a simple UI. I found that it made the assignment more complete and easier to test so was worth the extra effort.
- Used openweathermap.org API to return real data. Wasn't too hard to add and let me avoid generating mock data.
- Deployed front end to Netlify and back end to AWS EC2. This part took a solid 2 hours out of the total 6 mostly because I don't deploy apps from scratch often and DNS issues can be tricky to debug.

### Instructions to run assignment locally

N/A

### What did you not include in your solution that you want us to know about?

In a production setting, I'd write tests both for server-side and client-side code but I decided to spend time on stretch goals instead.
If I had more time I'd implement a better system for running the app in dev and prod modes (right now backend URL is hard-coded).
