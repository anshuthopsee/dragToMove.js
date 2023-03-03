export function dragToMove(div, handle) {
    const isTouch = window.ontouchstart !== undefined;
    let mousedown = false;
    let offsetX;
    let offsetY;
    let startX;
    let startY;

    handle.addEventListener(isTouch ? "touchstart" : "mousedown", (e) => {
        mousedown = true;
        offsetX = e.touches ? e.touches[0].clientX - e.target.getBoundingClientRect().left: e.offsetX
        offsetY = e.touches ? e.touches[0].clientY - e.target.getBoundingClientRect().top : e.offsetY
    });

    document.addEventListener(isTouch ? "touchmove" : "mousemove", (e) => {
        e = e.touches ? e.touches[0] : e;
        startX = e.clientX-offsetX;
        startY = e.clientY-offsetY;

        if (mousedown) {
            div.style.left = (e.clientX-offsetX)+"px";
            div.style.top = (e.clientY-offsetY)+"px";
        };
    });

    window.addEventListener(isTouch ? "touchend" : "mouseup", () => {
        mousedown = false;
        if (startX < 0) div.style.left = 0+"px";
        if (startX > window.screen.width-div.clientWidth) div.style.left = window.screen.width-div.clientWidth+"px";
        if (startY < 0) div.style.top = 0+"px";
        if (startY > window.innerHeight-div.clientHeight) div.style.top = window.innerHeight-div.clientHeight+"px";
    });
};
