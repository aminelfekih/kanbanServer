const express = require('express');

const app = express();
const port = process.env.PORT || 5000;
const stories = [
    {
      name: 'Project 1',
      progression: "Story"
    },
    {
      name: 'Project 2',
      progression: "Done"
    },
    {
      name: 'Project 3',
      progression: "In Progress"
    },
    {
      name: 'Project 4',
      progression: "Story"
    },
    {
      name: 'Project 5',
      progression: "In Progress"
    },
    {
      name: 'Project 6',
      progression: "Not Started"
    },
    {
      name: 'Project 7',
      progression: "Story"
    },
  ]

app.get('/api/stories', function(req, res) {
    res.send(stories)
})

app.listen(port, () => console.log(`Listening on port ${port}`));
