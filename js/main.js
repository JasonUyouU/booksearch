function bookSearch() {
	var search = document.getElementById("search").value
	document.getElementById("results").innerHTML = ""
	console.log(search)

	$.ajax({
		url: "https://www.googleapis.com/books/v1/volumes?q=" + search,
		dataType: "json",

		success: function(data) {
			for(i = 0; i < data.items.length; i++){
				var newDiv = document.createElement('div')
				newDiv.className = "col-md-4 animated fadeInDownBig"
				var newH2 = document.createElement('h3')
				var newP = document.createElement('h3')
				var newImg = document.createElement('img')
				var author = document.createTextNode(data.items[i].volumeInfo.authors[0])
				var title = document.createTextNode(data.items[i].volumeInfo.title)

				newH2.appendChild(title)
				newP.appendChild(author)
				newImg.setAttribute('src', data.items[i].volumeInfo.imageLinks.thumbnail)
				newDiv.appendChild(newH2)
				newDiv.appendChild(newP)
				newDiv.appendChild(newImg)

				document.getElementById('results').appendChild(newDiv)
			}
		},

		type: 'GET'
	})
}
document.getElementById('button').addEventListener('click', bookSearch, false)