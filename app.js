//init Github

const github = new GitHub;

//Init UI

const ui = new UI;

//Search Inputs

const searchUser = document.querySelector("#searchUser");

//serach Input Event Listener
searchUser.addEventListener("keyup",(e) => {
//get input text
const userText = e.target.value;

if(userText !== ""){
  ///Make Http Call
  github.getUsers(userText)
  .then(data => {
      if(data.profile.message === "Not Found"){
        ui.showAlert("User not Found!", "alert alert-danger")
      }else{
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
  })
}else{
  ui.clearProfile();
}
});
