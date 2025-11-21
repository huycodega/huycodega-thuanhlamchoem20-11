// Thay đổi nội dung búc thư ở đây
const letterContent = `Dear my love 🫶🏻🌷❤️,

Chúc 20/11 cô giáo tương lai của anh thật vui vẻ, hạnh phúc, lúc nào cũng phải cười nhìu lên và lunn mãi xinh đẹp như này nhaa 🥰. 

Anh xin lũi vì sự chậm trễ này nhưng anh muốn được tận tay anh đưa cho em ạ🥹

Anh mong những món quà này hợp với em và nó sẽ điền vào những đồ còn thiếu của em ạ. 

Mong em hiểu được tình cảm anh dành cho em và yêu anh thật nhiều hơn nữa nhé 🥹. 

Anh đi thực tập 3 tháng nhanh thui anh về với em ạ đừng cho thằng nào gần em nhé anh sợ mất em lắm huhu 😭.

Anh biết là em nhanh chán và anh cũng rất sợ không còn được yêu em nữa 🥹. Nhưng mong những lúc em chán em sẽ nghĩ những lúc anh và em bên cạnh nhau được hạnh phúc và happy mà nhiều người nhìn thấy họ sẽ ghen tị với mối quan hệ mà hiếm lắm mới có được như vậy hì🥰

Cảm ơn em đã cho anh bên cạnh em, hãy để anh bên cạnh em thật lâu hơn nữa nhé. 

Sun iu cucarot nhìuuu lắm hihi 🥰❤️.



                       Anh của em ❤️,
                           Sun`;

// Tốc độ viết chữ. Số càng nhỏ tốc độ càng nhanh. 50 là tốc độ khá phù hợp
let durationWrite = 50;
let isWriting = false; // Biến kiểm tra đang viết chữ

// Hiệu ứng gõ chữ
function effectWrite() {
  var boxLetter = document.querySelector(".letterContent");
  boxLetter.innerHTML = ""; // Xóa nội dung cũ
  isWriting = true; // Đánh dấu đang viết

  letterContentSplited = letterContent.split("");

  letterContentSplited.forEach((val, index) => {
    setTimeout(() => {
      boxLetter.innerHTML += val;

      // Khi viết xong
      if (index === letterContentSplited.length - 1) {
        isWriting = false;
      }
    }, durationWrite * index);
  });
}

window.addEventListener("load", () => {
  setTimeout(() => {
    document.querySelector(".container").classList.add("active");
  }, 500);
});

var openBtn = document.querySelector(".openBtn");
openBtn.addEventListener("click", () => {
  document.querySelector(".cardValentine").classList.add("active");
  document.querySelector(".container").classList.add("close");
});

var cardValentine = document.querySelector(".cardValentine");

cardValentine.addEventListener("click", () => {
  // Không cho click khi đang viết chữ
  if (isWriting) return;

  cardValentine.classList.toggle("open");

  if (cardValentine.className.indexOf("open") != -1) {
    setTimeout(effectWrite, 500);
  } else {
    setTimeout(() => {
      document.querySelector(".letterContent").innerHTML = "";
    }, 1000);
  }
});

// Xử lý nhạc nền
let music = document.getElementById("bgMusic");
let musicBtn = document.querySelector(".musicToggle");
let isMusicPlaying = false;
const START_TIME = 79; // 1 phút 19 giây = 79 giây
const PLAY_DURATION = 257000; // 30 giây

// Hàm toggle nhạc
function toggleMusic() {
  if (isMusicPlaying) {
    music.pause();
    musicBtn.classList.add("muted");
    isMusicPlaying = false;
  } else {
    music.currentTime = START_TIME; // Set vị trí bắt đầu
    music.play();
    musicBtn.classList.remove("muted");
    isMusicPlaying = true;
  }
}

// Tự động phát nhạc khi click nút "Chạm vào đây"
openBtn.addEventListener("click", () => {
  document.querySelector(".cardValentine").classList.add("active");
  document.querySelector(".container").classList.add("close");

  // Phát nhạc từ 1:19 khi mở thiệp
  music.currentTime = START_TIME; // Set vị trí bắt đầu là 1:19
  music.play().catch((err) => {
    console.log("Cần tương tác để phát nhạc");
  });
  isMusicPlaying = true;
  musicBtn.classList.remove("muted");
});

// Dừng nhạc sau 30 giây
music.addEventListener("play", () => {
  setTimeout(() => {
    music.pause();
    music.currentTime = START_TIME; // Reset về vị trí 1:19
    musicBtn.classList.add("muted");
    isMusicPlaying = false;
  }, PLAY_DURATION); // 30 giây = 30000ms
});
