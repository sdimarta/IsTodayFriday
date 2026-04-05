(function () {
  var isFriday = new Date().getDay() === 5;

  var answerEl = document.getElementById("answer");
  var emojiFriday = document.getElementById("emoji-friday");
  var emojiNotFriday = document.getElementById("emoji-not-friday");

  if (isFriday) {
    answerEl.textContent = "Yes, today is Friday.";
    emojiFriday.removeAttribute("hidden");
    emojiNotFriday.setAttribute("hidden", "");
  } else {
    answerEl.textContent = "No, today is not Friday.";
    emojiFriday.setAttribute("hidden", "");
    emojiNotFriday.removeAttribute("hidden");
  }

  function scheduleMidnightRefresh() {
    var now = new Date();
    var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    var msUntilMidnight = tomorrow.getTime() - now.getTime();
    setTimeout(function () {
      location.reload();
    }, msUntilMidnight);
  }

  scheduleMidnightRefresh();
})();
