$(function() {
  $("#sidebar").load("../../component/sidebar.html");
  $("#topbar-div").load("../../component/topbar.html");
});

// Menu Toggle

let navigation = document.querySelector(".navigation");
let toggle = document.querySelector(".toggle");
let main = document.querySelector(".main");

// add hovered classn selected list item

let list = document.querySelectorAll(".navigation li");

function activeLink() {
  list.forEach(item => item.classList.remove("hovered"));
  this.classList.add("hovered");
}
list.forEach(item => item.addEventListener("mouseover", activeLink));

// Table list

const tableBody = document.querySelector("#my-table tbody");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const currentPageSpan = document.querySelector(".current-page");
const totalPagesSpan = document.querySelector(".total-pages");

const data = [
  {
    project_name: "Wikizz",
    phone_number: "836-333-4858",
    email: "naxcel0@weebly.com"
  },
  {
    project_name: "Yakidoo",
    phone_number: "900-117-5969",
    email: "lhellcat1@umich.edu"
  },
  {
    project_name: "Skyba",
    phone_number: "550-519-7866",
    email: "hcarnilian2@squidoo.com"
  },
  {
    project_name: "Zoombeat",
    phone_number: "889-720-4339",
    email: "scomolli3@timesonline.co.uk"
  },
  {
    project_name: "LiveZ",
    phone_number: "774-413-8570",
    email: "lziebart4@walmart.com"
  },
  {
    project_name: "Tanoodle",
    phone_number: "233-591-3159",
    email: "medmondson5@google.cn"
  },
  {
    project_name: "Mybuzz",
    phone_number: "991-832-4058",
    email: "opickrill6@home.pl"
  },
  {
    project_name: "Eabox",
    phone_number: "426-298-6935",
    email: "bdominey7@dailymotion.com"
  },
  {
    project_name: "Twinte",
    phone_number: "831-382-8419",
    email: "krubinowitsch8@oaic.gov.au"
  },
  {
    project_name: "Wordpedia",
    phone_number: "567-221-4708",
    email: "mpeidro9@wordpress.org"
  },
  {
    project_name: "Babbleset",
    phone_number: "480-113-3076",
    email: "wgarnetta@opera.com"
  },
  {
    project_name: "Buzzshare",
    phone_number: "809-554-0137",
    email: "ltreadgallb@businesswire.com"
  },
  {
    project_name: "Linktype",
    phone_number: "466-236-0890",
    email: "edrillingcourtc@furl.net"
  }
];

const itemsPerPage = 5;
let currentPage = 1;

function displayData() {
  tableBody.innerHTML = "";
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = data.slice(startIndex, endIndex);

  paginatedData.forEach(item => {
    const row = `<tr>
        <td><a href="#">${item.project_name}</a></td>
        <td>
            <div class="uploads-option">
                <button onclick="fileUpload('image')" class="btn"><img src="assets/images/image.png" /></button>
                <button onclick="fileUpload('video')" class="btn"><img src="assets/images/video.png" /></button>
                <button onclick="fileUpload('pdf')" class="btn"><img src="assets/images/pdf-document.png" /></button>
                <button onclick="fileUpload('word')" class="btn"><img src="assets/images/word-document.png" /></button>
                <button onclick="fileUpload('time')" class="btn"><img src="assets/images/timer.png" /></button>
                <button onclick="fileUpload('fund')" class="btn"><img src="assets/images/fund.png" /></button>
            </div>
        </td>
        <td><button type="button" class="btn action-btn">Click Here</button></td>
        </tr>`;
    tableBody.innerHTML += row;
  });
}
displayData();

let pages = Math.ceil(data.length / 5);

document.getElementById("pagination").innerHTML = createPagination(pages, 1);

function createPagination(pages, page) {
  let str = "<ul>";
  let active;
  let pageCutLow = page - 1;
  let pageCutHigh = page + 1;
  currentPage = page;
  displayData();
  if (page > 1) {
    str +=
      '<li class="page-item previous no"><a onclick="createPagination(pages, ' +
      (page - 1) +
      ')"><i class="fa-solid fa-angle-left"></i></a></li>';
  }
  if (pages < 6) {
    for (let p = 1; p <= pages; p++) {
      active = page == p ? "active" : "no";
      str +=
        '<li class="' +
        active +
        '"><a onclick="createPagination(pages, ' +
        p +
        ')">' +
        p +
        "</a></li>";
    }
  } else {
    if (page > 2) {
      str +=
        '<li class="no page-item"><a onclick="createPagination(pages, 1)">1</a></li>';
      if (page > 3) {
        str +=
          '<li class="out-of-range"><a onclick="createPagination(pages,' +
          (page - 2) +
          ')">...</a></li>';
      }
    }
    if (page === 1) {
      pageCutHigh += 2;
    } else if (page === 2) {
      pageCutHigh += 1;
    }

    if (page === pages) {
      pageCutLow -= 2;
    } else if (page === pages - 1) {
      pageCutLow -= 1;
    }
    for (let p = pageCutLow; p <= pageCutHigh; p++) {
      if (p === 0) {
        p += 1;
      }
      if (p > pages) {
        continue;
      }
      active = page == p ? "active" : "no";
      str +=
        '<li class="page-item ' +
        active +
        '"><a onclick="createPagination(pages, ' +
        p +
        ')">' +
        p +
        "</a></li>";
    }

    if (page < pages - 1) {
      if (page < pages - 2) {
        str +=
          '<li class="out-of-range"><a onclick="createPagination(pages,' +
          (page + 2) +
          ')">...</a></li>';
      }
      str +=
        '<li class="page-item no"><a onclick="createPagination(pages, pages)">' +
        pages +
        "</a></li>";
    }
  }
  // Show the Next button only if you are on a page other than the last
  if (page < pages) {
    str +=
      '<li class="page-item next no"><a onclick="createPagination(pages, ' +
      (page + 1) +
      ')"><i class="fa-solid fa-angle-right"></i></a></li>';
  }
  str += "</ul>";
  // Return the pagination string to be outputted in the pug templates
  document.getElementById("pagination").innerHTML = str;
  return str;
}

