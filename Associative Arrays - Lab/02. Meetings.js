function checkMeetings(array) {
  let meetings = {};

  for (let currMeeting of array) {
    let [dayOfWeek, name] = currMeeting.split(" ");

    if (!meetings.hasOwnProperty(dayOfWeek)) {
      meetings[dayOfWeek] = name;
      console.log(`Scheduled for ${dayOfWeek}`);
    }else {
      console.log(`Conflict on ${dayOfWeek}!`);
    }
  }

  Object.entries(meetings).forEach(day => console.log(`${day[0]} -> ${day[1]}`));
}

checkMeetings(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'])