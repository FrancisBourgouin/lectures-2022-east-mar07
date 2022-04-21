# Scheduler project breakdown

API responses from the database, reflects the state that we have in our app. (Content taken from the readme of the API)

## Days

```jsx
const days = [
  {
    id: 1,
    name: "Monday",
    appointments: [1, 2],
    interviewers: [1, 2],
    spots: 1,
  },
];
```

## Appointments

```jsx
const appointments = {
  1: {
    id: 1,
    time: "12pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: 1,
    },
  },
  2: {
    id: 2,
    time: "1pm",
    interview: null,
  },
};
```

## Interviewers

```jsx
const interviewers = {
  1: {
    id: 1,
    name: "Sylvia Palmer",
    avatar: "https://i.imgur.com/LpaY82x.png",
  },
  2: {
    id: 2,
    name: "Tori Malcolm",
    avatar: "https://i.imgur.com/Nmx0Qxo.png",
  },
};
```

```jsx
// Find the day object
// Find the appointment id array
// Make an array using the ids to extract the appointments from the appointments object
```
