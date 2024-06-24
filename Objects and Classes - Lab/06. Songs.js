function songs(array) {
  let songsCount = array.shift();
  let typeList = array.pop();

  for (let command of array) {
    let [currType, currName, currTime] = command.split("_");

    class Song{
      constructor(type, name, time) {
        this.type = currType;
        this.name = currName;
        this.time = currTime;
      }

      sing() {
        if (typeList === "all") {
          console.log(this.name);
        }else {
          if (currType === typeList) {
            console.log(this.name);
          }
        }
      }
    }

    let currSong = new Song(currType, currName, currTime);
    currSong.sing();
  }
}

// songs([3,
//   'favourite_DownTown_3:14',
//   'favourite_Kiss_4:16',
//   'favourite_Smooth Criminal_4:01',
//   'favourite'])

// songs([4,
//   'favourite_DownTown_3:14',
//   'listenLater_Andalouse_3:24',
//   'favourite_In To The Night_3:58',
//   'favourite_Live It Up_3:48',
//   'listenLater'])

songs([2,
  'like_Replay_3:15',
  'ban_Photoshop_3:48',
  'all'])