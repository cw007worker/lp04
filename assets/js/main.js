new ScrollHint('.js-scrollable', {});

//custom select javascript

var x, i, j, l, ll, selElmnt, a, b, c;
/* Look for any elements with the class "custom-select": */
x = document.getElementsByClassName("custom-select");
l = x.length;
for (i = 0; i < l; i++) {
  selElmnt = x[i].getElementsByTagName("select")[0];
  ll = selElmnt.length;
  /* For each element, create a new DIV that will act as the selected item: */
  a = document.createElement("DIV");
  a.setAttribute("class", "select-selected");
  a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
  x[i].appendChild(a);
  /* For each element, create a new DIV that will contain the option list: */
  b = document.createElement("DIV");
  b.setAttribute("class", "select-items select-hide");
  for (j = 1; j < ll; j++) {
    /* For each option in the original select element,
    create a new DIV that will act as an option item: */
    c = document.createElement("DIV");
    c.innerHTML = selElmnt.options[j].innerHTML;
    c.addEventListener("click", function(e) {
      /* When an item is clicked, update the original select box,
      and the selected item: */
      var y, i, k, s, h, sl, yl;
      s = this.parentNode.parentNode.getElementsByTagName("select")[0];
      sl = s.length;
      h = this.parentNode.previousSibling;
      for (i = 0; i < sl; i++) {
        if (s.options[i].innerHTML == this.innerHTML) {
          s.selectedIndex = i;
          h.innerHTML = this.innerHTML;
          y = this.parentNode.getElementsByClassName("same-as-selected");
          yl = y.length;
          for (k = 0; k < yl; k++) {
            y[k].removeAttribute("class");
          }
          this.setAttribute("class", "same-as-selected");
          break;
        }
      }
      h.click();
    });
    b.appendChild(c);
  }
  x[i].appendChild(b);
  a.addEventListener("click", function(e) {
    /* When the select box is clicked, close any other select boxes,
    and open/close the current select box: */
    e.stopPropagation();
    closeAllSelect(this);
    this.nextSibling.classList.toggle("select-hide");
    this.classList.toggle("select-arrow-active");
  });
}

function closeAllSelect(elmnt) {
  /* A function that will close all select boxes in the document,
  except the current select box: */
  var x, y, i, xl, yl, arrNo = [];
  x = document.getElementsByClassName("select-items");
  y = document.getElementsByClassName("select-selected");
  xl = x.length;
  yl = y.length;
  for (i = 0; i < yl; i++) {
    if (elmnt == y[i]) {
      arrNo.push(i)
    } else {
      y[i].classList.remove("select-arrow-active");
    }
  }
  for (i = 0; i < xl; i++) {
    if (arrNo.indexOf(i)) {
      x[i].classList.add("select-hide");
    }
  }
}

/* If the user clicks anywhere outside the select box,
then close all select boxes: */
document.addEventListener("click", closeAllSelect);

// Query for Preloader 

$("#preloader").delay(1800).fadeOut("slow");


//   Query For scroll back to top 
var back = $('.back-to-top');
back.on('click', function() {
  $('html, body').animate({
    scrollTop: 0,
  }, 900);
})
$(window).on('scroll', function() {
  var self = $(this),
    height = self.height(),
    top = self.scrollTop();
  if (top > height) {
    back.addClass('visible');
  } else {
    back.removeClass('visible');
  }
})

// Add smooth scrolling to all links
$("a").on('click', function(event) {

  // Make sure this.hash has a value before overriding default behavior
  if (this.hash !== "") {
    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    var hash = this.hash;

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 800, function() {

      // Add hash (#) to URL when done scrolling (default click behavior)
      window.location.hash = hash;
    });
  } // End if
});


//form validation jquery
var $flag1 = false;
var $flag2 = false;
var $flag3 = false;
var $flag4 = false;
var $flag5 = false;
var $flag6 = false;
var $flag7 = false;
var $flag8 = false;

$('.submit_btn').click(function() {
  $('#entry_form').attr('onsubmit', 'return false;');

  if ($('#parent_name').val() == "") {
    $("#parent_name").parent().find('.error_msg').show();
    $flag1 = false;
  } else {
    $("#parent_name").parent().find('.error_msg').hide();
    $flag1 = true;
  }

  if ($('#parent_name_furigana').val() == "") {
    $("#parent_name_furigana").parent().find('.error_msg').show();
    $flag2 = false;
  } else {
    $("#parent_name_furigana").parent().find('.error_msg').hide();
    $flag2 = true;
  }

  if ($('#child_name').val() == "") {
    $("#child_name").parent().find('.error_msg').show();
    $flag3 = false;
  } else {
    $("#child_name").parent().find('.error_msg').hide();
    $flag3 = true;
  }

  if ($('#child_name_furigana').val() == "") {
    $("#child_name_furigana").parent().find('.error_msg').show();
    $flag4 = false;
  } else {
    $("#child_name_furigana").parent().find('.error_msg').hide();
    $flag4 = true;
  }

  if ($('#age_select').val() == "default") {
    $("#age_select").parent().parent().find('.error_msg').show();
    $flag5 = false;
  } else {
    $("#age_select").parent().parent().find('.error_msg').hide();
    $flag5 = true;
  }

  var $regexp_mail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var $address = $('#address').val();
  if ($address == "" || !(String($address).match($regexp_mail))) {
    $('#address').parent().find('.error_msg').show();
    $flag6 = false;
  } else {
    $('#address').parent().find('.error_msg').hide();
    $flag6 = true;
  }

  var $regexp_phone = /^[0-9-+]+$/;
  if ($('#phone_number').val() == "" || !(String($('#phone_number').val()).match($regexp_phone))) {
    $("#phone_number").parent().find('.error_msg').show();
    $flag7 = false;
  } else {
    $("#phone_number").parent().find('.error_msg').hide();
    $flag7 = true;
  }

  if ($('#place_select').val() == "default") {
    $("#place_select").parent().parent().find('.error_msg').show();
    $flag8 = false;
  } else {
    $("#place_select").parent().parent().find('.error_msg').hide();
    $flag8 = true;
  }

  if (($flag1 == true) && ($flag2 == true) && ($flag3 == true) && ($flag4 == true) && ($flag5 == true) && ($flag6 == true) && ($flag7 == true) && ($flag8 == true)) {
    $('#entry_form').attr('onsubmit', 'return true;');
  }
});