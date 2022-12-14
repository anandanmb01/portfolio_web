AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Eternity VPN",
    cardImage: "https://www.howtogeek.com/wp-content/uploads/2022/09/vpn.jpg?height=200p&trim=2,2,2,2",
    description: "Production ready VPN server hosted on amazon aws cloud developed with softether binaries Node Expresss Mongodb vpncmd .. ,user managment through web interface",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://eternityvpn.ddns.net",
    Githublink: "https://github.com/anandanmb01/eternity_vpn",
  },
  {
    title: "GTA5 Gaming server",
    cardImage: "https://img.gta5-mods.com/q95/images/los-santos-backup-server-room/076e8c-10.png",
    description: "GTA-5 Gaming server hosted on amazon aws developed by fivem with selfhosted MariyaDB database controlledby ssh rdp .. protocols",
    tagimg: "",
    Previewlink: "http://eternitygaming.ddns.net:40120",
    Githublink: "",
  },
    {
    title: "ROS controlled Drone",
    cardImage: "https://cdn.mos.cms.futurecdn.net/e633b3d54b8ec06bd4a26729dd8ea014.jpg",
    description: "Stm 32 Microcontroller based drone controlled by ROS linux library programmed using python. System is controlling through keyboard key trigger, webinterface etc",
    tagimg: "",
    Previewlink: "",
    Githublink: "",
  },
    {
    title: "RC controlled self-balanced bike",
    cardImage: "https://wevolver-project-images.s3.amazonaws.com/0.qeki7a2yuzpl.jpg",
    description: "Inspired from Cubli project, RC controlled self vertical balanced bike developed by stm 32 microcontroller programmed in C, Calibration and system interfacing is done using python serial monitor library and Matlab",
    tagimg: "",
    Previewlink: "",
    Githublink: "",
  },
  // {
  //   title: "Chess Engine",
  //   cardImage: "assets/images/project-page/chess.jpg",
  //   description: "A chess engine for a popular game dev engine.",
  //   tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
  //   Previewlink: "",
  //   Githublink: "",
  // },
  // {
  //   title: "",
  //   cardImage: "",
  //   description: "",
  //   tagimg: "",
  //   Previewlink: "",
  //   Githublink: "",
  // },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink,description }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
                <div class="data title-content">${description}</div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" target="_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
