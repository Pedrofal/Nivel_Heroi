
let heroName = "pedro";
let heroXP;


if (!heroName || !heroXP) {
  console.log("Preencha todas as variáveis antes de determinar o nível do herói.");
} else {
  let level;

  if (heroXP < 1000) {
    level = "Ferro";
  } else if (heroXP >= 1001 && heroXP <= 2000) {
    level = "Bronze";
  } else if (heroXP >= 2001 && heroXP <= 5000) {
    level = "Prata";
  } else if (heroXP >= 6001 && heroXP <= 7000) {
    level = "Ouro";
  } else if (heroXP >= 7001 && heroXP <= 8000) {
    level = "Platina";
  } else if (heroXP >= 8001 && heroXP <= 9000) {
    level = "Ascendente";
  } else if (heroXP >= 9001 && heroXP <= 10000) {
    level = "Imortal";
  } else if (heroXP >= 10001) {
    level = "Radiante";
  } else {
    level = "Unknown Level";
  }

  console.log(`O Herói de nome ${heroName} está no nível de ${level}`);
}
