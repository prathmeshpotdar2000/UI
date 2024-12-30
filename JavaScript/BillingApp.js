let q,r,t;
function acceptQty() {
    q = document.getElementById("q").value;
}
function acceptRate() {
    r = document.getElementById("r").value;
    t=parseInt(q)*parseInt(r);
    document.getElementById("t").value=t;
}