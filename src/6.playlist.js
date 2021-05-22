function Playlist() {
  this.allAlbum = []
  this.currentSong = 0
  this.isPlaying = false
  // Add all songs
  this.add = function (songs) {
    songs.forEach((el) => this.allAlbum.push(el))
    return this.allAlbum
  }
  // Starting play
  this.play = function () {
    if(this.isPlaying === false) {
      this.isPlaying = true
      return `${this.allAlbum[this.currentSong]} started to play`
    }  else {
      return `${this.allAlbum[this.currentSong]} already played`
    }
  }
  // Stop song
  this.stop = function () {
    if(this.isPlaying === true) {
      this.isPlaying = false
      return `${this.allAlbum[this.currentSong]} stopped`
    } else {
      return `${this.allAlbum[this.currentSong]} already stopped`
    }
  }
  // Next song
  this.next = function () {
    this.currentSong++
    this.isPlaying = true

    return `${this.allAlbum[this.currentSong - 1]} stopped, ${
      this.allAlbum[this.currentSong]
    } started`
  }
}

function Song(...songs) {
  this.songs = songs

  return this.songs
}

const playlist = new Playlist()
const heyJude = new Song('Hey Jude', 'The Beatles')
const jaded = new Song('Jaded', 'Aerosmith', 'Maroon 5')

console.log(playlist.add(heyJude))
console.log(playlist.add(jaded))

console.log(playlist.play()) // Hey Jude started to play
console.log(playlist.next()) // Hey Jude stopped, Jaded started
console.log(playlist.stop()) // Hey Jude stopped
console.log(playlist.next()) // Jaded stopped, Hey Jude started
console.log(playlist.play()) // Hey Jude started
