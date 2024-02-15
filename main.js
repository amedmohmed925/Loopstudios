// let dark = document.getElementById("dark");
// let text = document.createTextNode("white mode")
// dark.onclick = function () {
//     document.body.classList.toggle("dark-mode")
    
// }
 
document.querySelector('.menu-icon').addEventListener('click', function() {
    document.querySelector('nav ul').classList.toggle('show');
});

function hideShow() {

    var cardsHide = document.getElementById("cards-hide");

    if (cardsHide.style.display === "none") {
        cardsHide.style.display = "flex"; 
        cardsHide.style.width= "100%";
        cardsHide.style.justifyContent= "center";
        cardsHide.style.alignItems = "center"
    } else {
        cardsHide.style.display = "none";
    }
}
//////////////////////////////

//////////////////////////////////////////////////////

// let data = {
//     	meta: {
//     		totalPages: 13,
//     	},
//     	data: [
//     		{
//     			type: "articles",
//     			id: "3",
//     			attributes: {
//     				title: "JSON:API paints my bikeshed!",
//     				body: "The shortest article. Ever.",
//     				created: "2015-05-22T14:56:29.000Z",
//     				updated: "2015-05-22T14:56:28.000Z",
//     			},
//     		},
//     		{
//     			type: "articles",
//     			id: "3",
//     			attributes: {
//     				title: "JSON:API paints my bikeshed!",
//     				body: "The shortest article. Ever.",
//     				created: "2015-05-22T14:56:29.000Z",
//     				updated: "2015-05-22T14:56:28.000Z",
//     			},
//     		},
//     		{
//     			type: "articles",
//     			id: "3",
//     			attributes: {
//     				title: "JSON:API paints my bikeshed!",
//     				body: "The shortest article. Ever.",
//     				created: "2015-05-22T14:56:29.000Z",
//     				updated: "2015-05-22T14:56:28.000Z",
//     			},
//     		},
//     		{
//     			type: "articles",
//     			id: "3",
//     			attributes: {
//     				title: "JSON:API paints my bikeshed!",
//     				body: "The shortest article. Ever.",
//     				created: "2015-05-22T14:56:29.000Z",
//     				updated: "2015-05-22T14:56:28.000Z",
//     			},
//     		},
//     		{
//     			type: "articles",
//     			id: "3",
//     			attributes: {
//     				title: "JSON:API paints my bikeshed!",
//     				body: "The shortest article. Ever.",
//     				created: "2015-05-22T14:56:29.000Z",
//     				updated: "2015-05-22T14:56:28.000Z",
//     			},
//     		},
//     	],
//     	links: {
//     		self: "http://example.com/articles?page[number]=3&page[size]=1",
//     		first: "http://example.com/articles?page[number]=1&page[size]=1",
//     		prev: "http://example.com/articles?page[number]=2&page[size]=1",
//     		next: "http://example.com/articles?page[number]=4&page[size]=1",
//     		last: "http://example.com/articles?page[number]=13&page[size]=1",
//     	},
//     };
    
//     let { meta: { totalPages } } = data;
//     console.log(totalPages);

// ////////////////////////////
// let { links: { self, first } } = data;
// console.log( `${self} ${first}`);

// ///////////////////////////
// let { data: [, , , { attributes: { title } }] } = data;
// console.log(title)
// //////////////////////////

// let { data: dataArray } = data;
// if (totalPages !== dataArray.length) {
//     console.log("Invalid Data");
// }
  
//   dataArray.forEach((item) => {
//     if (parseInt(item.id) < 3 && item.type === 'articles') {
//       console.log('Pinned Article');
//     }
//   });