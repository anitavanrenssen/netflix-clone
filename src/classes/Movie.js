export class Movie {
  constructor(
    id,
    moviename,
    genre,
    duration,
    comingSoon,
    availDate,
    thumbnail,
    showByIndex,
    billboardTitle
  ) {
    this.id = id;
    this.name = moviename;
    this.genre = genre;
    this.duration = duration;
    this.comingSoon = comingSoon;
    this.availDate = availDate;
    this.thumbnail = thumbnail;
    this.showByIndex = showByIndex;
    this.billboardTitle = billboardTitle;
  }
}
