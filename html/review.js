const formEl = document.getElementById("review-form");

formEl.addEventListener("submit", function (e) {
  e.preventDefault();

  const nameEl = document.getElementById("name");
  const commentEl = document.getElementById("comment");
  const ratingEl = document.getElementById("rating");

  const nameErrorEl = document.getElementById("name-error");
  const commentErrorEl = document.getElementById("comment-error");
  const ratingErrorEl = document.getElementById("rating-error");

  nameErrorEl.textContent = "";
  commentErrorEl.textContent = "";
  ratingErrorEl.textContent = "";

  let isValid = true;

  if (nameEl.value.trim() == "") {
    nameErrorEl.textContent = "Name Is Missing!";
    isValid = false;
  }

  if (commentEl.value.trim() == "") {
    commentErrorEl.textContent = "Comment Is Missing!";
    isValid = false;
  }

  const rating = ratingEl.value;
  console.log(rating);

  if (ratingEl.value.trim() == "") {
    ratingErrorEl.textContent = "Rating Is Missing!";
    isValid = false;
  } else if (!isNum(ratingEl.value)) {
    ratingErrorEl.textContent = "Must be a number!";
    isValid = false;
  }

  if (isValid) {
    formEl.submit();
  }
});

function isNum(value) {
  if (typeof value === "number") {
    return Number.isFinite(value);
  }

  if (typeof value === "string") {
    return value.trim() !== "" && !isNaN(value);
  }

  return false;
}
