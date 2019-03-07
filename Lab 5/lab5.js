window.onload = function()
{
    var bookJSON = {
        "title": "murach's JavaScript and jQuery 3rd edition",
        "author": "Mary Delamater, Zak Ruvalcaba",
        "pages": 610,
        "publisher": "Mike Murach & Associates, Inc.",
        "isbn": "978-1-943872-05-3"
    };

    var strJSON = JSON.stringify(bookJSON);
    console.log(strJSON);

    var objJSON = JSON.parse(strJSON);
    console.log(objJSON);
    console.log(objJSON.title + ", " + objJSON.isbn);
}
