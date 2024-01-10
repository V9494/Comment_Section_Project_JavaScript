let button = document.querySelector(".contain-button");
let heart = document.querySelector("#line-heart");
let div = document.querySelector(".main-div");
let like = document.querySelector("#like");
let count = 0;
let like_increase = document.querySelector("#increase-like");


const inputBox = document.querySelector("#input-box");
const commentButton = document.querySelector("#Add");
const CommentsCount = document.querySelector("#CommentsCount");
const commentContainer = document.querySelector(".comment-container");
const container = document.querySelector(".container");
const commentBox = document.querySelector(".comment-box");
const comment_Count = document.querySelector("#CommentsCount");
let count2 = 2;
let storeComment;
const deleteComment = document.getElementById("deleteButton");
commentBox.style.backgroundColor = "white";
commentButton.addEventListener("click", function () {
  if (inputBox.value === "") {
    alert("Please Add The Comment");
  } else {
    storeComment = inputBox.value;
    const div1 = document.createElement("div");
    const button_div = document.createElement("div");
    commentBox.appendChild(div1);
    button_div.innerHTML = `
            <div class="buttons1">
                <button id="deleteButton">Delete</button>
                
            </div>`;

    commentBox.appendChild(button_div);
    div1.innerHTML = `
                <div class="tutor">
                    <img src="pic-1.jpg" alt="image">
                    <div class="profile1">
                        <div>
                            <h3>Jhonny</h3>
                        </div>
                        <span>Student</span>
                    </div>
                </div>
                <div class="comment-box">
                    <p>${storeComment}</p>
                </div>
                `;
    CommentsCount.innerHTML = `${++count2} `;

    button_div.addEventListener("click", function () {
      div1.remove();
      button_div.remove();
      CommentsCount.innerHTML = `${--count2} `;
    });
  }
  inputBox.value = "";
});

button.addEventListener("click", function () {
  if (count == 0) {
    heart.src = "/Svg/heart-3-fill.svg";
    count = 1;
    like.innerHTML = "dislike";
    like_increase.innerHTML = "45 likes";
  } else {
    heart.src = "/Svg/heart-line.svg";
    like.innerHTML = "like";
    count = 0;
    like_increase.innerHTML = "44 likes";
  }
});
