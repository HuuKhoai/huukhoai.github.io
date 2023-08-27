/*Ẩn thông tin cá nhân*/
const submitBtn = document.getElementById('submitBtn');
const emailInput = document.getElementById('email');
const emailForm = document.getElementById('emailForm');
const personalInfo = document.getElementById('personalInfo');

submitBtn.addEventListener('click', function () {
    const email = emailInput.value;
    if (validateEmail(email)) {
        emailForm.style.display = 'none';
        personalInfo.style.display = 'block';
    } else {
        alert('Bạn đã nhập chưa đúng định dạnh của email ');
    }
});

function validateEmail(email) {
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regex.test(email);
}
/*Ẩn thông tin cá nhân*/


/*Ẩn thông tin nghề nghiệp */
function handleShowHide(element) {
    let content = element.parentNode.parentNode.childNodes[7];/*Lấy ra phần nội dung */
    /*Kiểm tra nội dung đang ẩn hay hiện */
    if (window.getComputedStyle(content).display === "none") {
        content.style.display = "block";
        element.textContent = "View less"
    } else {
        content.style.display = "none";
        element.textContent = "View more"
    }
}
/*Ẩn thông tin nghề nghiệp */
