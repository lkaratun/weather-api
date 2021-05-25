# Weather API

### Date

May 25, 2021

### Location of deployed application

<a href="https://weather.levkaratun.com">UI</a>, <a href="https://api.weather.levkaratun.com/weather?city=Vancouver">API</a>

### Time spent

6 hours

### Assumptions made

The user will click the "Get current weather" button after submitting the

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
