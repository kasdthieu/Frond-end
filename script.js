/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPass = (loginPass, loginEye) => {
   const input = document.getElementById(loginPass),
         iconEye = document.getElementById(loginEye)

   iconEye.addEventListener('click', () => {
       // Change password to text
       if(input.type === 'password'){
           // Switch to text
           input.type = 'text'

           // Icon change
           iconEye.classList.add('ri-eye-line')
           iconEye.classList.remove('ri-eye-off-line')
       } else {
           // Change to password
           input.type = 'password'

           // Icon change
           iconEye.classList.remove('ri-eye-line')
           iconEye.classList.add('ri-eye-off-line')
       }
   })
}
showHiddenPass('login-pass','login-eye');
/*==========SIGN - IN==========*/
document.querySelector('.login__form').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-pass').value;
    
    try {
        const response = await fetch('API_URL_HERE', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });
        
        const result = await response.json();
        
        if (result.success) {
            // Xử lý khi đăng nhập thành công
            window.location.href = '.html'; // điều hướng đến trang khác
        } else {
            // Xử lý khi đăng nhập thất bại
            alert('Đăng nhập thất bại: ' + result.message);
        }
    } catch (error) {
        console.error('Lỗi:', error);
        alert('Có lỗi xảy ra. Vui lòng thử lại.');
    }
});
