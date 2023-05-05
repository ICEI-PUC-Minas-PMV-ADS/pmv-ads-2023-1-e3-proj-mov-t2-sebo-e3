export function checkPass(pass: string, confirmPass: string) {
    const regex = /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/g;

    if (regex.test(pass)) {
      if (pass === confirmPass) {
        return true;
      }
      alert("As senhas fornecidas não são iguais.");
    } else {
      alert(
        "Senha muito fraca. Por favor, insira uma senha com no mínimo 8 caracteres, pelo menos uma letra maiuscula, pelo menos uma letra minúscula e que contenha pelo menos um caractere especial."
      );
    }
    return false;
  }