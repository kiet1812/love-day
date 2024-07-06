function star() {
    setTimeout(function () {
    }, 3000);
}
function show_date_time() {
    window.setTimeout("show_date_time()", 1000);
    BirthDay = new Date("2024/06/27"); //thay ngay bat dau yeu vao day
    today = new Date();
    timeold = (today.getTime() - BirthDay.getTime());
    sectimeold = timeold / 1000
    secondsold = Math.floor(sectimeold);
    msPerDay = 24 * 60 * 60 * 1000
    e_daysold = timeold / msPerDay
    daysold = Math.floor(e_daysold);
    e_hrsold = (daysold - e_daysold) * -24;
    hrsold = Math.floor(e_hrsold);
    e_minsold = (hrsold - e_hrsold) * -60;
    minsold = Math.floor((hrsold - e_hrsold) * -60);
    seconds = Math.floor((minsold - e_minsold) * -60);
    time__day.innerHTML = daysold + " ngày " + hrsold + " giờ " + minsold + " phút " + seconds + " giây";
}
show_date_time();

//music
document.addEventListener("DOMContentLoaded", function() {
    const audio = new Audio("https://musicptk2008.000webhostapp.com/music.mp3");

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.innerHTML = `
        <div class="confirmation-dialog">
            <p id="text-tb">Bạn có muốn nghe nhạc hay không?</p>
            <div class="buttons">
                <button id="yes-btn">Yes</button>
                <button id="no-btn">No</button>
            </div>
        </div>
    `;
    document.body.appendChild(overlay);

    const style = document.createElement("style");
    style.innerHTML = `
        .overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
        }

        .confirmation-dialog {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
            text-align: center;
            transition: 0.5s;
        }
        .confirmation-dialog:hover {
            box-shadow: 0 0 10px 10px rgba(36, 36, 36, 0.747);
        }
        .buttons button {
            margin: 10px;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        #text-tb {
            font-weight: bold;
        }
        #yes-btn, #no-btn {
            margin-top: 30px;
        }
        #yes-btn:hover {
            background-color: rgba(0, 0, 0, 0.5);
        }
        #no-btn:hover {
            background-color: rgba(0, 0, 0, 0.5);
        }
    `;
    document.head.appendChild(style);

    document.getElementById("yes-btn").addEventListener("click", function() {
        console.log("Yes button clicked");
        audio.play().catch(error => {
            console.error("Error playing audio:", error);
        });
        document.body.removeChild(overlay);
    });

    document.getElementById("no-btn").addEventListener("click", function() {
        console.log("No button clicked");
        audio.pause();
        audio.currentTime = 0;  // Reset audio to the beginning
        document.body.removeChild(overlay);
    });
});

var _0x4ed059=_0x146f;(function(_0x1da4ba,_0x438969){var _0x4c3835=_0x146f,_0x48ef18=_0x1da4ba();while(!![]){try{var _0x15a710=parseInt(_0x4c3835(0x16a))/0x1*(parseInt(_0x4c3835(0x17d))/0x2)+parseInt(_0x4c3835(0x167))/0x3+parseInt(_0x4c3835(0x176))/0x4*(-parseInt(_0x4c3835(0x17b))/0x5)+-parseInt(_0x4c3835(0x182))/0x6*(-parseInt(_0x4c3835(0x17e))/0x7)+-parseInt(_0x4c3835(0x172))/0x8*(-parseInt(_0x4c3835(0x181))/0x9)+-parseInt(_0x4c3835(0x170))/0xa*(-parseInt(_0x4c3835(0x17c))/0xb)+-parseInt(_0x4c3835(0x178))/0xc;if(_0x15a710===_0x438969)break;else _0x48ef18['push'](_0x48ef18['shift']());}catch(_0x1a0137){_0x48ef18['push'](_0x48ef18['shift']());}}}(_0x5609,0xf027b),document[_0x4ed059(0x174)](_0x4ed059(0x16b),function(){var _0x53751c=_0x4ed059,_0x1aff93=document[_0x53751c(0x17a)](_0x53751c(0x169));_0x1aff93['classList'][_0x53751c(0x179)](_0x53751c(0x177));var _0x94d6f8=document[_0x53751c(0x17a)]('p');_0x94d6f8['id']=_0x53751c(0x17f),_0x94d6f8[_0x53751c(0x173)][_0x53751c(0x179)](_0x53751c(0x16e)),_0x94d6f8[_0x53751c(0x180)]=_0x53751c(0x175),_0x94d6f8[_0x53751c(0x174)](_0x53751c(0x16c),function(){var _0x31e97b=_0x53751c;window[_0x31e97b(0x171)][_0x31e97b(0x16d)]=_0x31e97b(0x16f);}),_0x1aff93[_0x53751c(0x168)](_0x94d6f8),document['body'][_0x53751c(0x168)](_0x1aff93);}));function _0x146f(_0x2ed307,_0x525044){var _0x56095b=_0x5609();return _0x146f=function(_0x146f51,_0x906027){_0x146f51=_0x146f51-0x167;var _0x5ddf0b=_0x56095b[_0x146f51];return _0x5ddf0b;},_0x146f(_0x2ed307,_0x525044);}function _0x5609(){var _0x2e4646=['168kilfwD','21BhqfYA','text-footer','innerHTML','9YvQBWm','2408286ECyiWM','2770959iHwJBo','appendChild','div','18521jHCgVz','DOMContentLoaded','click','href','rainbow','https://www.facebook.com/kiet1812.dev','8278420uhedRs','location','5182408NggOMo','classList','addEventListener','Creater\x20By\x20PhamTuanKiet<br>Code\x20Nhà\x20Làm','144jFFmbH','box-footer','59681016RjNtiP','add','createElement','4160smswoD','22fGwyPb'];_0x5609=function(){return _0x2e4646;};return _0x5609();}