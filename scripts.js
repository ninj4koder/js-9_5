var button_class_name = document.getElementsByClassName('button');
var cycles = button_class_name.length;
for (var i = 0; i < cycles; i++) {
  console.log(button_class_name[i].innerText);
}
