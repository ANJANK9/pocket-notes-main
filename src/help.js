export function randomKey() {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export function trimString(str) {
  if (str === null || str.trim() === "") {
    return null;
  } else {
    return str.trim();
  }
}

export function getCurrentDateTime() {
  const now = new Date();

  const formattedTime = now.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });

  const day = now.getDate();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[now.getMonth()];
  const year = now.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  return { date: formattedDate, time: formattedTime };
}

export function getInitials(str) {
  let words = str.split(" ");
  if (words.length === 1) {
    return words[0].substring(0, 2).toUpperCase();
  } else {
    return words[0][0].toUpperCase() + words[1][0].toUpperCase();
  }
}

export function checkPropertyInArray(property, value, arr) {
  let isCapital = value.toUpperCase();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i][property].toUpperCase() === isCapital) {
      return true;
    } else {
      return false;
    }
  }
}
