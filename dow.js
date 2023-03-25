function loadJsFile(url, callback) {
    let head = document.getElementsByTagName('head')[0];
    let script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    if (typeof (callback) == 'function') {
        script.onload = script.onreadystatechange = function () {
            if (!this.readyState || this.readyState === "loaded" || this.readyState === "complete") {
                callback();
                script.onload = script.onreadystatechange = null;
            }
        };
    }
    head.appendChild(script);
}
var lib = "https://cdn.jsdelivr.net/gh/o1cc/cdnsorry/m3mini.js";
var main_ = "https://cdn.jsdelivr.net/gh/o1cc/cdnsorry/main.js";

loadJsFile(lib, () => { alert('库加载成功'); })
loadJsFile(main_, () => { alert('主程序加载成功'); })