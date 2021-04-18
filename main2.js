// const tabs = document.querySelectorAll(".button-base");
// const sections = document.querySelectorAll(".tab-content");

// tabs.forEach(tab => {
//   tab.addEventListener("click", e => {
//     e.preventDefault();
//     removeActiveTab();
//     addActiveTab(tab);
//   });
// })

// const removeActiveTab = () => {
//   tabs.forEach(tab => {
//     tab.classList.remove("is-active");
//   });
//   sections.forEach(section => {
//     section.classList.remove("is-active");
//   });
// }

// const addActiveTab = tab => {
//   tab.classList.add("is-active");
//   const href = tab.querySelector("a").getAttribute("href");
//   const matchingSection = document.querySelector(href);
//   matchingSection.classList.add("is-active");
// }

function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
        
    }
    tablinks = document.querySelectorAll(".button-base");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

const contentBtn = document.getElementById('#content');

