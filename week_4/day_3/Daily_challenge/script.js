// Video Class

class Video {
  constructor(title, uploader, time) {
    this.title = title;
    this.uploader = uploader;
    this.time = time;
  }

  watch() {
    console.log(
      `${this.uploader} watched all ${this.time} seconds of ${this.title}!`
    );
  }
}

// Instantiate 1
const firstVideo = new Video("JavaScript Basics", "John Doe", 1200);
firstVideo.watch();

// Instantiate 2
const secondVideo = new Video("Advanced CSS", "Jane Smith", 2500);
secondVideo.watch();

// Bonus: 1
const videoArrayData = [
  { title: "HTML Full Course", uploader: "soufiane", time: 7200 },
  { title: "React in 100 Seconds", uploader: "osama", time: 100 },
  { title: "Python for Everybody", uploader: "id brahim", time: 4800 },
  { title: "Git Tutorial", uploader: "hicham", time: 1800 },
  { title: "SQL Explained", uploader: "sara", time: 950 },
];

// Bonus: 2
console.log("\n--- Bonus Videos ---");
videoArrayData.forEach((videoInfo) => {
  const video = new Video(videoInfo.title, videoInfo.uploader, videoInfo.time);
  video.watch();
});
