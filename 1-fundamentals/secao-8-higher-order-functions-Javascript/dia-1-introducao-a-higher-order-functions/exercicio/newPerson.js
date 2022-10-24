const returns = (nomeCompleto, email) => `Nome: ${nomeCompleto} e email: ${email}`;
const email = (name) => `${name}@trybe.com`;

const newEmployees = () => {
  const employees = {
    id1: returns('Pedro Guerra', email('Pedro_Guerra')), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: returns('Luiza Drumond', email('Luiza_Drumond')), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: returns('Carla Paiva', email('Carla_Paiva')), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees());