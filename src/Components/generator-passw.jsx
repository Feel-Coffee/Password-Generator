import React, { useState } from 'react';


const PasswordGenerator = () => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSpecialChars, setIncludeSpecialChars] = useState(true);
  const [copied, setCopied] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState('');
  

  const generatePassword = () => {
    if (length < 8 || length > 50) {
      alert('El largo de la contraseña debe ser de minimo 8 y maximo 50 caracteres.');
      return;
    }

    if (
      !includeUppercase &&
      !includeLowercase &&
      !includeNumbers &&
      !includeSpecialChars
    ) {
      alert('Debe seleccionar al menos una opción.');
      return;
    }    

    let charset = '';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumbers) charset += '0123456789';
    if (includeSpecialChars) charset += '!@#$%^&*()';

    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    setCopied(false);

    calculatePasswordStrength();
  };

  const calculatePasswordStrength = () => {
    if (length >= 8 && length <= 11) {
      setPasswordStrength('No Segura');
    } else if (length >= 12 && length <= 19) {
      setPasswordStrength('Segura');
    } else if (length >= 20) {
      setPasswordStrength('Muy Segura');
    }
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
  };

  

  return (
    <div className="container">
      <h1>Generador de Contraseñas</h1>
      <div>
        <label>Largo de Contraseña:</label>
        <input
          type="number"
          min="8"
          max="50"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
        />
      </div>
      <div>
        <label>Incluir Mayusculas:</label>
        <input
          type="checkbox"
          checked={includeUppercase}
          onChange={(e) => setIncludeUppercase(e.target.checked)}
        />
      </div>
      <div>
        <label>Incluir Minusculas:</label>
        <input
          type="checkbox"
          checked={includeLowercase}
          onChange={(e) => setIncludeLowercase(e.target.checked)}
        />
      </div>
      <div>
        <label>Incluir numeros:</label>
        <input
          type="checkbox"
          checked={includeNumbers}
          onChange={(e) => setIncludeNumbers(e.target.checked)}
        />
      </div>
      <div>
        <label>Incluir Caracteres Especiales:</label>
        <input
          type="checkbox"
          checked={includeSpecialChars}
          onChange={(e) => setIncludeSpecialChars(e.target.checked)}
        />
      </div>
      <button onClick={generatePassword}>Generar Contraseña</button>
      {password && (
        <div>
          <h2>Contraseña Generada:</h2>
          <p>{password}</p>
          <button onClick={copyToClipboard}>
            {copied ? 'Copiada!' : 'Copiar a portapapeles!'}
          </button>
          {passwordStrength && <p>{passwordStrength}</p>}
        </div>
      )}
    </div>
  );
};

export default PasswordGenerator