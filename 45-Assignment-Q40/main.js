function make_album(artist, title, tracks) {
    var album = {
        artist: artist,
        title: title,
    };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
var album1 = make_album("The Beatles", "Abbey Road");
console.log(album1);
var album2 = make_album("Michael Jackson", "Thriller");
console.log(album2);
var album3 = make_album("Queen", "A Night at the Opera", 14);
console.log(album3);
