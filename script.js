const textarea = document.getElementById("text");
const occur = document.getElementById("ocurrence");
const replaceinput = document.getElementById("replace");
const text = document.getElementById("textareawords");
const checkbox = document.getElementById("check");
const replacebtn = document.getElementById("replace-btn");
const replaceallbtn = document.getElementById("replaceall");
let arr;
let count = 0;
textarea.addEventListener("input", () => {
  arr = textarea.value.split(" ");
});
replacebtn.addEventListener("click", () => {
  const text = textarea.value.trim();
  if (!text) {
    alert("enter word");
  }
  searchword();

});
function searchword() {

  if(checkbox.checked == 1){
    textarea.value = textarea.value.replace(text.value, replaceinput.value);
    arr = textarea.value.split(" ");
    if(count>0){
        --count;
        
    }
    occur.innerHTML = count;
    textarea.value = textarea.value;
} else {
    textarea.value = textarea.value.toLowerCase();
    text.value = text.value.toLowerCase();
    replaceinput.value = replaceinput.value.toLowerCase();
    textarea.value = textarea.value.replace(text.value, replaceinput.value);
    arr = textarea.value.split(" ");
    if(count>0){
        --count
    }
    occur.innerHTML = count;
    textarea.value = textarea.value;
}
}
replaceallbtn.addEventListener("click", () => {
    if(checkbox.checked == 1){
        textarea.value = textarea.value.replaceAll(text.value, replaceinput.value);
        arr = textarea.value.split(" ");
        count = 0;
        occur.innerHTML = count;
        textarea.value = textarea.value;
    } else {
        textarea.value = textarea.value.toLowerCase();
        text.value = text.value.toLowerCase();
        replaceinput.value = replaceinput.value.toLowerCase();
        textarea.value = textarea.value.replaceAll(text.value, replaceinput.value);
        arr = textarea.value.split(" ");
        count = 0;
        occur.innerHTML = count;
        textarea.value = textarea.value;
    }
});
function casesensitive(){
    let count = 0;
    let arr = textarea.value.split(" ");
    let searchText = text.value;
    
    if(checkbox.checked) {
        arr.forEach((split) => {
            if (split === searchText) {
                ++count;
            }
        });
    } else
        arr.forEach((split) => {
            if (split.toLowerCase() === searchText.toLowerCase()) {
                ++count;
            }
        });
    occur.innerHTML = count;
}

text.addEventListener("input", () => {
  arr.forEach((split) => {
    if (split == text.value) {
      ++count;
      occur.innerHTML = count;
    }
  });
});
