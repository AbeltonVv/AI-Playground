document.addEventListener("DOMContentLoaded", function () {
  html = "";
  for (let i = 0; i < history.length; i++) {
    let item = history[i];
    html += `<li><div class="result-img"><img src="${item.out_image}" /></div><ul class="params">`;
    for (let j = 0; j < item.params.length; j++) {
      let param = item.params[j];
      if (param.type == "image") {
        pos = param.value.lastIndexOf("/");
        filename = pos > -1 ? param.value.substring(pos + 1) : param.value;
        html += `<li><span class="param-name">${param.name}</span><span class="param-value"><a href='${param.value}' target='_blank'>${filename}</a></span></li>`;
      } else {
        html += `<li><span class="param-name">${param.name}</span><span class="param-value">${param.value}</span></li>`;
      }
    }
    html += "</ul></li>";
  }
  document.querySelector(".history-list").innerHTML = html;
});
