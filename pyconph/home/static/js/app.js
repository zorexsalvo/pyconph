let scrollIcon=document.querySelector(".icon-scroll");function toggleTab(e,t){var l,o,s;for(o=document.getElementsByClassName("tabcontent"),l=0;l<o.length;l++)o[l].classList.remove("block"),o[l].classList.add("hidden");for(s=document.getElementsByClassName("tablinks"),l=0;l<s.length;l++)s[l].classList.remove("active");document.getElementById(t).classList.remove("hidden"),document.getElementById(t).classList.add("block"),e.currentTarget.classList.add("active")}scrollIcon.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}));var filters=document.querySelectorAll(".filter-sponsor");function debounce(e,t=100){let l;return function(...o){clearTimeout(l),l=setTimeout((()=>{e.apply(this,o)}),t)}}function handleScroll(){var e=document.querySelector(".tabs-scroller-wrapper"),t=document.getElementById("tab-scroller"),l=document.querySelectorAll(".scroller-btn"),o=document.getElementById("scroller-btn-left"),s=document.getElementById("scroller-btn-right"),c=document.querySelector(".nav-tabs-slider");let r=0;var n=e.offsetWidth,a=0;if(document.querySelectorAll("#tab-scroller li").forEach((function(e){a+=e.offsetWidth})),a>n)for(i=0;i<l.length;i++)l[i].classList.remove("inactive");else for(i=0;i<l.length;i++)l[i].classList.add("inactive");0==t.scrollLeft?o.classList.add("inactive"):o.classList.remove("inactive"),s.addEventListener("click",(function(){r+=180,scrollToLeft(c,0,r,300)})),o.addEventListener("click",(function(){r-=180,scrollToLeft(c,0,r,300)})),Math.easeInOutQuad=function(e,t,l,o){return(e/=o/2)<1?l/2*e*e+t:-l/2*(--e*(e-2)-1)+t},scrollerHide()}function scrollToLeft(e,t,l,o){var s=e.scrollTop,c=e.scrollLeft,r=t-s,n=l-c,i=(new Date).getTime(),a=function(){var d=(new Date).getTime()-i;e.scrollTop=Math.easeInOutQuad(d,s,r,o),e.scrollLeft=Math.easeInOutQuad(d,c,n,o),d<o?requestAnimationFrame(a):(e.scrollTop=t,e.scrollLeft=l)};a()}function scrollerHide(){var e=document.getElementById("tab-scroller"),t=document.getElementById("scroller-btn-left"),l=document.getElementById("scroller-btn-right");e.addEventListener("scroll",(function(){var o=e.scrollLeft,s=e.offsetWidth;e.scrollWidth-o==s?l.classList.add("inactive"):l.classList.remove("inactive"),0===o?t.classList.add("inactive"):t.classList.remove("inactive")}))}filters.forEach((e=>{e.addEventListener("click",(function(){document.querySelector(".filter-sponsor.active").classList.remove("active"),this.classList.add("active");let t=e.getAttribute("data-filter"),l=document.querySelectorAll(`.list-sponsor .item:not([data-filter='${t}'])`),o=document.querySelectorAll(`.list-sponsor [data-filter='${t}']`);"all"==t&&(l=[],o=document.querySelectorAll(".list-sponsor [data-filter]")),l.forEach((e=>{e.classList.add("hidden"),e.classList.remove("flex")})),o.forEach((e=>{e.classList.remove("hidden"),e.classList.add("flex")}))}))}));const debounced=debounce(handleScroll,500);window.addEventListener("resize",debounced),handleScroll();