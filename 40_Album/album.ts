function make_album(artist:string, title:string, tracks?:number) {
    const album: {artist:string, title:string, tracks?:number} ={
        artist : artist,
        title : title
    }
    if(tracks !== undefined){
        album.tracks = tracks;
    }
    return album;    
}
const album1 = make_album('Artist One', 'Title one');
console.log(album1);
const album2 = make_album('Artist Two', 'Title two');
console.log(album2);
const album3 = make_album('Artist Three', 'Title three', 8);
console.log(album3);
