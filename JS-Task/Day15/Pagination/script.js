const itemsPerPage = 5;
const data = [
        {
          "id": "1",
          "name": "Lura Senger",
          "email": "Xander_Collier@yahoo.com"
        },
        {
          "id": "2",
          "name": "Wilburn Weber",
          "email": "Bennett_Kreiger11@yahoo.com"
        },
        {
          "id": "3",
          "name": "Tyrique Hahn",
          "email": "Juston.Altenwerth@yahoo.com"
        },
        {
          "id": "4",
          "name": "Lenny Bailey",
          "email": "Guiseppe_Hegmann@yahoo.com"
        },
        {
          "id": "5",
          "name": "Vladimir Keeling",
          "email": "Louisa_Walsh18@hotmail.com"
        },
        {
          "id": "6",
          "name": "Kellie Crona",
          "email": "Chandler_Abernathy@yahoo.com"
        },
        {
          "id": "7",
          "name": "Carolina White",
          "email": "Royal50@hotmail.com"
        },
        {
          "id": "8",
          "name": "Alfredo Conn",
          "email": "Clarabelle34@hotmail.com"
        },
        {
          "id": "9",
          "name": "Stan Shanahan",
          "email": "Lamar.McClure@hotmail.com"
        },
        {
          "id": "10",
          "name": "Marvin Fay",
          "email": "Osbaldo58@hotmail.com"
        },
        {
          "id": "11",
          "name": "Torrance Rau",
          "email": "Orin45@gmail.com"
        },
        {
          "id": "12",
          "name": "Harold Gutmann MD",
          "email": "Alyce.Stracke37@yahoo.com"
        },
        {
          "id": "13",
          "name": "Taryn Torphy",
          "email": "Dean_Breitenberg71@hotmail.com"
        },
        {
          "id": "14",
          "name": "Bryana Lang",
          "email": "Tatum.Ullrich@yahoo.com"
        },
        {
          "id": "15",
          "name": "Nyasia Green DDS",
          "email": "Dino83@gmail.com"
        },
        {
          "id": "16",
          "name": "Nasir Gerhold",
          "email": "Lilian_Bashirian8@hotmail.com"
        },
        {
          "id": "17",
          "name": "Raymundo Ritchie PhD",
          "email": "Antwan.Schoen15@yahoo.com"
        },
        {
          "id": "18",
          "name": "Delmer Marvin",
          "email": "Kiera62@yahoo.com"
        },
        {
          "id": "19",
          "name": "Rachel Wilkinson",
          "email": "Foster_Conroy@gmail.com"
        },
        {
          "id": "20",
          "name": "Gladys Howell",
          "email": "Constance.Labadie10@yahoo.com"
        },
        {
          "id": "21",
          "name": "Ciara Klocko",
          "email": "Harvey76@yahoo.com"
        },
        {
          "id": "22",
          "name": "Quentin O'Kon",
          "email": "Amely_Cummings2@yahoo.com"
        },
        {
          "id": "23",
          "name": "Ms. Gabriella Kunde",
          "email": "Lorenza_Cummerata@hotmail.com"
        },
        {
          "id": "24",
          "name": "Gerald Reilly",
          "email": "Lia_Konopelski@gmail.com"
        },
        {
          "id": "25",
          "name": "Brody Carter I",
          "email": "Colten.Wilderman90@hotmail.com"
        },
        {
          "id": "26",
          "name": "Alanis Klocko",
          "email": "Johathan.Champlin69@gmail.com"
        },
        {
          "id": "27",
          "name": "Caroline Miller",
          "email": "Delaney.Kozey74@gmail.com"
        },
        {
          "id": "28",
          "name": "Ms. Merritt McClure",
          "email": "Wendy.Zieme@gmail.com"
        },
        {
          "id": "29",
          "name": "Jovani Schoen",
          "email": "Norval_Zieme@hotmail.com"
        },
        {
          "id": "30",
          "name": "Berniece Bradtke",
          "email": "Okey.Fisher39@hotmail.com"
        },
        {
          "id": "31",
          "name": "Hanna Gottlieb",
          "email": "Edna62@hotmail.com"
        },
        {
          "id": "32",
          "name": "Christiana Bergnaum",
          "email": "Donnie.Paucek22@gmail.com"
        },
        {
          "id": "33",
          "name": "Reid Stehr",
          "email": "Hiram69@gmail.com"
        },
        {
          "id": "34",
          "name": "Evans Ward",
          "email": "Liliane72@hotmail.com"
        },
        {
          "id": "35",
          "name": "Miss Enos Davis",
          "email": "Kolby.Grady@hotmail.com"
        },
        {
          "id": "36",
          "name": "Mathew Lueilwitz",
          "email": "Mariah.Hagenes@yahoo.com"
        },
        {
          "id": "37",
          "name": "Romaine Robel",
          "email": "Sheila19@yahoo.com"
        },
        {
          "id": "38",
          "name": "Immanuel Aufderhar",
          "email": "Aileen32@hotmail.com"
        },
        {
          "id": "39",
          "name": "Julius Reilly Jr.",
          "email": "Santa89@yahoo.com"
        },
        {
          "id": "40",
          "name": "Linnea Borer",
          "email": "Jarrett_Hegmann2@hotmail.com"
        }
];

function createPagination(pageNumber) {
  const container = document.getElementById("pagination-container");
  container.innerHTML = "";

  const startIndex = (pageNumber - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPageData = data.slice(startIndex, endIndex);

  const paginationList = document.createElement("ul");
  paginationList.classList.add("pagination");

  for (let i = 1; i <= data.length / itemsPerPage; i++) {
    const paginationItem = document.createElement("li");
    const paginationLink = document.createElement("a");
    paginationLink.textContent = i;
    paginationLink.addEventListener("click", () => createPagination(i));
    paginationItem.appendChild(paginationLink);
    paginationList.appendChild(paginationItem);
  }

  container.appendChild(paginationList);

  const contentDiv = document.createElement("div");
  contentDiv.classList.add("content");

  for (const item of currentPageData) {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("item");
    itemDiv.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.email}</p>
    `;
    contentDiv.appendChild(itemDiv);
  }

  container.appendChild(contentDiv);
}

createPagination(1);
