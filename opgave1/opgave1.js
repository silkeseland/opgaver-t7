const snaps = document.querySelector("#snaps");
snaps.addEventListener("click", tjek);

document.querySelector("#soda").addEventListener("click", tjek);
document.querySelector("#cola").addEventListener("click", tjek);
document.querySelector("#ol").addEventListener("click", tjek);
document.querySelector("#snaps").addEventListener("click", tjek);

function tjek() {
  console.log(this.alt);
  if ((this.alt = "ol" || this.alt == "snaps")) {
    console.log("indeholder alkohol");
  } else {
    console.log("alkoholfri");
  }
}
