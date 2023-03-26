

var hold = false;
var girl = false;
var auto = false;
para = {
    yAlign: 'top',
    xAlign: 'right'

}
// !button
// addToolBtn("btn_script", "click", test, para);
addToolBtn("btn_check", "begin", change, para);
addToolBtn("btn_sex", "only girl: false", change_g, para);
addToolBtn("btn_auto_report", "auto_report: false", change_r, para);

// !button end
function work() {
    obsSleep(0)
        .then(() => obsSleep(2))
        //监测存在元素然后点击
        .then(() => obsClick('#ButtonRandom'))
        .then(() => obsSleep(0.5))
        .then(() => {
            obsTrueFunc(checkSex())
                .then(() => { change() }) //设为停止
        })
}

function test() {
    obsTrue(hold)
        .then(() => obsFunc(work))
        .then(() => obsSleep(1))
        .then(() => obsFunc(test))
}

function checkSex() {
    if (document.querySelector("#randomSelInfo > div:nth-child(3) > span").textContent == "女" && girl) { return true };
    if (auto) {

    }
    return false;
}

function change() {
    hold = !hold;
    console.log("now hold is " + hold);
    document.getElementsByClassName(" monkeyToolBtn btn_check").item(0).textContent = hold ? "stop" : "begin";
    if (hold) {
        obsFunc(test)
    }
}

function change_g() {
    girl = !girl;
    document.getElementsByClassName(" monkeyToolBtn btn_sex").item(0).textContent = girl ? "only girl: false" : "only girl: true";
}

function change_r() {
    auti = !auto;
    document.getElementsByClassName(" monkeyToolBtn btn_auto_report").item(0).textContent = auto ? "auto_report: true" : "auto_report: false";
}

function report() {
    obsSleep(0)
        .then(() => obsClick("#doBlack"))
        .then(() => obsSleep(0.3))
        .then(() => obsClick("#layui-layer100005 > div.layui-layer-btn.layui-layer-btn- > a.layui-layer-btn0"))
}
