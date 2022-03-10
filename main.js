const ageCalculator = () => {
  const userInput = document.getElementById("DOB").value;
  const dob = new Date(userInput);

  if (userInput == null || userInput == "") {
    document.getElementById("message").innerHTML = "**Choose a date please!";
    return false;
  } else {
    const mDate = userInput.toString();
    const dobYear = parseInt(mDate.substring(0, 4), 10);
    const dobMonth = parseInt(mDate.substring(5, 7), 10);
    const dobDate = parseInt(mDate.substring(8, 10), 10);

    const today = new Date();
    const birthday = new Date(dobYear, dobMonth - 1, dobDate);

    const diffInMillisecond = today.valueOf() - birthday.valueOf();
    const year_age = Math.floor(diffInMillisecond / 31536000000);
    const day_age = Math.floor((diffInMillisecond % 31536000000) / 86400000);

    if (
      today.getMonth() == birthday.getMonth() &&
      today.getDate() == birthday.getDate()
    ) {
      alert("Happy Birthday!");
    }

    const month_age = Math.floor(day_age / 30);
    day_ageday_age = day_age % 30;

    const tMnt = month_age + year_age * 12;
    const tDays = tMnt * 30 + day_age;
    if (dob > today) {
      document.getElementById("result").innerHTML =
        "Invalid date input - Please try again!";
    } else {
      document.getElementById("result").innerHTML =
        year_age + " years " + month_age + " months " + day_age + " days";
    }
  }
};
