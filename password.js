const passwordCategories = {
    'alpha-lower-upper': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
    'alpha-lower-upper-num': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    'num-sym': '0123456789!@#$%^&*()_+-=[]{}|;:,.<>/?`~',
    'alpha-lower-upper-sym': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+-=[]{}|;:,.<>/?`~',
    'alpha-lower-upper-num-sym': 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>/?`~',
  };
  
  function generatePassword() {
    const category = document.getElementById('password-category').value;
    const length = document.getElementById('password-length').value;
    const strength = document.getElementById('password-strength').value;
  
    let password = '';
    let passwordChars = passwordCategories[category];
  
    for (let i = 0; i < length; i++) {
      password += passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
    }
  
    if (strength === 'medium') {
      password = password.replace(/[a-zA-Z]/g, (match) => {
        return Math.floor(Math.random() * 2) ? match.toLowerCase() : match.toUpperCase();
      });
    } else if (strength === 'strong') {
      password = password.replace(/[a-zA-Z]/g, (match) => {
        return Math.floor(Math.random() * 2) ? match.toLowerCase() : match.toUpperCase();
      });
      password = password.replace(/[0-9]/g, () => {
        return Math.floor(Math.random() * 10);
      });
      password = password.replace("/[!@#$%^&*()_+-=[]{}|;:,.<>/?`~]/g", () => {
        return passwordChars.charAt(Math.floor(Math.random() * passwordChars.length));
      });
       }
  
    document.getElementById('generated-password').value = password;
  }
  
  document.getElementById('generate-button').addEventListener('click', generatePassword);