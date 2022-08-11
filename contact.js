$(window).on('load', function (event) {
    $('body').removeClass('preloading');
    $('.load').delay(1000).fadeOut('fast');
})

$(document).ready(function () {
    $("#gototop").hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 344)
            $("#gototop").show("slow");
        else
            $("#gototop").hide("slow");


    })
    $("#gototop").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, 1000)
    })
})


// form
const form = document.querySelector('form')
const nameUser = document.getElementById('name')
const email = document.getElementById('email')
const phoneNum = document.getElementById('phone-number')
const enterprise = document.getElementById('enterprise')
const businessType = document.getElementById('businesstype')
const province = document.getElementById('province')
const content = document.getElementById('content')

// Show input error message
function showError(input, message) {
	const formControl = input.parentElement
	formControl.className = 'form-control error'
	const small = formControl.querySelector('small')
	small.innerText = message
}

// Show success outline
function showSuccess(input) {
	const formControl = input.parentElement
	formControl.className = 'form-control success'
    const small = formControl.querySelector('small')
	small.innerText = ''
}

// Check email is valid
function checkEmail(input) {
	const re =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

	if (re.test(input.value.trim())) {
		showSuccess(input)
		return true
	} else {
		showError(input, 'Email is not valid')
		return false
	}
}

// Check required fields
function checkRequired(inputArr) {
	let isRequired = false
	inputArr.forEach(function (input) {
		if (input.value.trim() === '') {
			showError(input, `${getFieldName(input)} is required`)
			isRequired = true
		} else {
			showSuccess(input)
		}
	})

	return isRequired
}

function checkPhoneNumber(input){
    let num = /^0[0-9]*$/
    if (!input.value.match(num) || input.value.length != 10){
        showError(input," is not valid")
		return false
    }
    else{
        showSuccess(input)
		return true
    }
}

// Get fieldname
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

// Event listeners
form.addEventListener('submit', function (e) {
	e.preventDefault()

	if (!checkRequired([nameUser, email, phoneNum, enterprise,businessType,province,content])) {
		
		if(checkPhoneNumber(phoneNum) && checkEmail(email)){
			alert("Gửi thành công");
		}
	}
	
})

