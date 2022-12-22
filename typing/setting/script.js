window.onload = function(){
  const texts = window.localStorage.getItem('texts')
  const textarea = document.getElementById("input");
  textarea.innerText = texts
}
function setting() {
  const textarea = document.getElementById("input").value;
  const arr = textarea.split('\n');
  console.log(arr)
  window.localStorage.setItem('texts', arr.join(','));
}
function set_texts(type) {
  const textarea = document.getElementById("input");

  if (type == 'Initial') {
    textarea.value = `a,b,c,d,e`
  }
}