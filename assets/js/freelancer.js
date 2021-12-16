
var scrollToTop = document.querySelector('.scroll-to-top');

if (scrollToTop) {

  // Scroll to top button appear
  window.addEventListener('scroll', function () {
    var scrollDistance = window.pageYOffset;

    if (scrollDistance > 100) {
      scrollToTop.style.display = 'block';
    } else {
      scrollToTop.style.display = 'none';
    }
  });
}

var mainNav = document.querySelector('#mainNav');

if (mainNav) {

  var navbarCollapse = mainNav.querySelector('.navbar-collapse');

  if (navbarCollapse) {

    var collapse = new bootstrap.Collapse(navbarCollapse, {
      toggle: false
    });

    var navbarItems = navbarCollapse.querySelectorAll('a');

    // Closes responsive menu when a scroll trigger link is clicked
    for (var item of navbarItems) {
      item.addEventListener('click', function (event) {
        collapse.hide();
      });
    }
  }

  // Collapse Navbar
  var collapseNavbar = function () {

    var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;

    if (scrollTop > 100) {
      mainNav.classList.add("navbar-shrink");
    } else {
      mainNav.classList.remove("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  collapseNavbar();
  // Collapse the navbar when page is scrolled
  document.addEventListener("scroll", collapseNavbar);
}

const mail_button = document.getElementById("sendMessageButton");

mail_button.addEventListener("click", function () {
  const sender = document.getElementById("sender_name");
  const subject = document.getElementById("message_subject");
  const context = document.getElementById("message_context");

  Email.send({
    SecureToken: "0426273e-8b03-47c0-8da9-ea64731694b7",
    To: "kenan.github6210@gmail.com",
    From: "kenanxs.116@gmail.com",
    Subject: `${sender.value} - ${subject.value}`,
    Body: context.value
  }).then(message => {
    //All fields cleared after the sending email
    sender.textContent = "";
    subject.textContent = "";
    context.textContent = "";
    alert(message);
  });



})

