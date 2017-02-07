var firstNameInput = document.getElementById('first_name')
var preview = document.getElementById('htmlPreview')
var actual = document.getElementById('htmlActual')
var lastNameInput = document.getElementById('lastName')
var describeYourself = document.getElementById('description')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')

var addCode = function () {
  var firstName = firstNameInput.value
  var lastName = lastNameInput.value
  var describe = describeYourself.value
  var email = emailInput.value
  var phone = phoneInput.value

  preview.innerHTML = '<h1>' + 'Hi, my name is: ' + firstName + lastName + '</h1>' + '<p>' + describe + '</p>' + '<p>' + 'If you are interested in a date, please email me at ' + '<a href="mailto:' + email + '" target="_blank">' + email +'</a>' + 'or give me a call at' +  '<a href="tel:' + phone +  '"target="_blank">' +  phone + '</a>' + '</p>'
  actual.textContent =  '<h1>' + 'Hi, my name is: ' + firstName + lastName + '</h1>' + '<p>' + describe + '</p>' + '<p>' + 'If you are interested in a date, please email me at ' + '<a href="mailto:' + email + '" target="_blank">' + email +'</a>' + 'or give me a call at' +  '<a href="tel:' + phone +  '"target="_blank">' +  phone + '</a>' + '</p>'

}

firstNameInput.addEventListener('input', addCode)
lastNameInput.addEventListener('input', addCode)
describeYourself.addEventListener('input', addCode)
emailInput.addEventListener('input', addCode)
phoneInput.addEventListener('input', addCode)
