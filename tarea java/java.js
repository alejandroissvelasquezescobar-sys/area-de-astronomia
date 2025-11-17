// 1. Clasificación de brillo estelar (IF)
function clasificarBrillo() {
    let m = parseFloat(document.getElementById("magnitud").value);
    let r = "";
  
    if (m <= 0) r = "Extremadamente brillante";
    else if (m <= 1) r = "Muy brillante";
    else if (m <= 2) r = "Brillante";
    else if (m <= 6) r = "Débil";
    else r = "No visible";
  
    document.getElementById("resultado1").innerText = r;
  }
  
  // 2. Registrar distancias de planetas (FOR)
  function registrarDistancias() {
    let n = parseInt(prompt("¿Cuántas distancias registrará?"));
    let suma = 0;
  
    for (let i = 1; i <= n; i++) {
      let d = parseFloat(prompt("Distancia " + i + " (millones km):"));
      suma += d;
    }
  
    let promedio = suma / n;
    document.getElementById("resultado2").innerText =
      "Promedio: " + promedio + " millones de km";
  }
  
  // 3. WHILE – Contar cráteres > 50 km
  function contarCraters() {
    let contador = 0;
    let d = parseFloat(prompt("Diámetro del cráter: "));
  
    while (d !== 0) {
      if (d > 50) contador++;
      d = parseFloat(prompt("Diámetro del cráter: "));
    }
  
    document.getElementById("resultado3").innerText =
      "Cráteres > 50 km: " + contador;
  }
  
  // 4. SWITCH – Identificar cuerpo celeste
  function identificar() {
    let c = parseInt(document.getElementById("codigo").value);
    let tipo = "";
  
    switch (c) {
      case 1: tipo = "Estrella"; break;
      case 2: tipo = "Planeta"; break;
      case 3: tipo = "Cometa"; break;
      case 4: tipo = "Asteroide"; break;
      case 5: tipo = "Galaxia"; break;
      default: tipo = "Código inválido";
    }
  
    document.getElementById("resultado4").innerText = tipo;
  }
  
  // 5. DO WHILE – Registro de niveles de luz
  function registrarLuz() {
    let nivel;
    let texto = "";
    let seguir;
  
    do {
      nivel = parseFloat(prompt("Nivel de luz (lux):"));
      if (nivel < 5) texto += nivel + " lux → Noche profunda\n";
      else texto += nivel + " lux → Noche normal\n";
  
      seguir = prompt("¿Registrar otro? (sí/no)").toLowerCase();
    } while (seguir !== "no");
  
    document.getElementById("resultado5").innerText = texto;
  }
  