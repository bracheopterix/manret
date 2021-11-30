const counter = document.getElementById("counter");
const startButton = document.getElementById("strt");
const stopButton = document.getElementById("stp");
const resetButton = document.getElementById("rst");
const clock = document.getElementsByTagName("time")[0];
let intervalID;
let clockState = {
    h: 0,
    m: 0,
    s: 0,
    ms: 0,
};

function getNewState(oldState) {
    let result = {
        h: oldState.h,
        m: oldState.m,
        s: oldState.s,
        ms: oldState.ms + 100,
    };
    if (result.ms === 1000) {
        result.s++;
        result.ms = 0;
    }
    if (result.s === 60) {
        result.m++;
        result.s = 0;
    }
    if (result.m === 60) {
        result.h++;
        result.m = 0;
    }

    return result;
}

function onTick() {
    clockState = getNewState(clockState);
    renderState(clockState);
}

function renderState(state) {
    let seconds = state.s.toString().padStart(2, "0")
    let minutes = state.m.toString().padStart(2, "0")
    let hours = state.h.toString().padStart(2, "0")
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

function start() {
    if (intervalID) {
        return;
    }
    intervalID = setInterval(onTick, 100);
}

function stopIt() {
    clearInterval(intervalID);
    intervalID = null;
}

function reset() {
    clearInterval(intervalID);
    clockState = {
        h: 0,
        m: 0,
        s: 0,
        ms: 0,
    }
    renderState(clockState);
    intervalID = null;

}

startButton.onclick = start;
stopButton.onclick = stopIt;
resetButton.onclick = reset;