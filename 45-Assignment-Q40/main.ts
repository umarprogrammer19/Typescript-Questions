// 40. Album: Write a function called make_album() that builds a Object
// describing a music album. The function should take in an artist name and an
// album title, and it should return a Object containing these two pieces of
// information. Use the function to make three dictionaries representing different
// albums. Print each return value to show that Objects are storing the
// album information correctly.
// Add an optional parameter to make_album() that allows you to store the
// number of tracks on an album. If the calling line includes a value for the number
// of tracks, add that value to the album’s Object. Make at least one new
// function call that includes the number of tracks on an album.
interface Album {
    artist: string;
    title: string;
    tracks?: number;
}

function make_album(artist: string, title: string, tracks?: number): Album {
    const album: Album = {
        artist: artist,
        title: title,
    };

    if (tracks) {
        album.tracks = tracks;
    }

    return album;
}
const album1 = make_album("The Beatles", "Abbey Road");
console.log(album1);
const album2 = make_album("Michael Jackson", "Thriller");
console.log(album2);
const album3 = make_album("Queen", "A Night at the Opera", 14);
console.log(album3);