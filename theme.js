/* HireMate theme: light / dark, remembered per browser. Loaded in <head> so there is no flash. */
(function(){
  var KEY = "hm-theme", root = document.documentElement;
  function saved(){ try { return localStorage.getItem(KEY); } catch(e){ return null; } }
  function current(){
    return root.getAttribute("data-theme") ||
      (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  }
  var s = saved(); if(s) root.setAttribute("data-theme", s);

  function apply(t){
    root.setAttribute("data-theme", t);
    try { localStorage.setItem(KEY, t); } catch(e){}
    document.querySelectorAll("iframe").forEach(function(f){
      try {
        f.contentDocument.documentElement.setAttribute("data-theme", t);
        if(f.contentWindow.hmSyncTheme) f.contentWindow.hmSyncTheme();
      } catch(e){}
    });
    sync();
  }
  function sync(){
    var dark = current() === "dark";
    document.querySelectorAll(".themebtn").forEach(function(b){
      b.textContent = dark ? "☀" : "☾";
      b.setAttribute("aria-label", dark ? "Switch to light mode" : "Switch to dark mode");
      b.title = b.getAttribute("aria-label");
    });
  }
  window.hmSyncTheme = sync;

  document.addEventListener("DOMContentLoaded", function(){
    var slot = document.querySelector("[data-theme-slot], .homebtn");
    if(!slot) return;
    var b = document.createElement("button");
    b.type = "button"; b.className = "themebtn";
    b.addEventListener("click", function(){ apply(current() === "dark" ? "light" : "dark"); });
    slot.insertAdjacentElement("afterend", b);
    sync();
  });
})();
