// emplyment witsh interface

// emplyment with oop interface 

//idea 
// implementation pre korbo 

// interface MediaPlayer {
//     play():void;
//     pause():void;
//     stop():void;
// }
// //implementation
// class musicPlayer implements MediaPlayer{
// play()  {
//     console.log('playing music.....')
// }
// pause()  {
//     console.log('music paused...')
// }
// stop()  {
//     console.log('music stop.....')
// }
// }

// const myPlayer = new musicPlayer() //instance creat kore korchi 
// myPlayer.pause()


abstract class MediaPlayer{
 abstract play():void;
 abstract pause():void;
 abstract stop():void;
}

class tanjilPlayer extends MediaPlayer{
    play(){
        console.log('playing music')
    }
    pause() {
        console.log('pause music player...')
    }
    stop() {
        console.log('stop music player ')
    }
}

const tanjilPlayer1 = new tanjilPlayer()
tanjilPlayer1.pause()