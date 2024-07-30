// Lista de filmes:

// idade 18 anos:
// comédia >>> todo mundo em panico 1 
// romance >>> 50 tons de cinza
// acao >>> bastardos inglorios


// idade 14 anos:
// comédia >>> Ela é demais
// romance >>> Depois do Universo
// acao >>> Maze Runner


// idade de 10 anos:
// comédia >>> Alvins e os esquilos
// romance >>> Diário de uma princesa
// acao >>> Karate Kid 

  let filme;
  let campoIdade;
  let campoAcao;
  let campoRomance;
  let campoComédia;

function setup() {
  createCanvas(600, 400);
  createElement('h2' , 'Recomendador de Filmes');
  createSpan("Idade; ")
  campoIdade = createInput();
  createElement('h3', 'Selecione somente um gênero de filme');
  campoAcao = createCheckbox('Acao')
  campoRomance = createCheckbox('Romance');
  campoComédia = createCheckbox('Comédia');
}

function draw() {
  background(0);
  textSize(40);
  textAlign( CENTER, CENTER);
  fill("white")
  
  let idade = campoIdade.value();
  let acao = campoAcao.checked();
  let romance = campoRomance.checked();
  let comedia = campoComédia.checked();
  
  filme = geraRecomendação(idade, acao, romance, comedia);
  
  text(filme, width/2, height/2);
}

function geraRecomendação(idade, acao, romance, comedia){
  if(idade >= 18){
    if(acao){
    return 'Bastardos Inglorios';
  }else if(romance){
    return '50 tons de cinza';
  }else if(comedia){
    return 'Todo mundo em pânico'
  }else{
    return 'Bastardos Inglórios';
  }
  }else if(idade >= 14){
    if(acao){
      return 'Maze Runner';
    }else if(romance){
      return 'Depois do Universo'
    }else if(comedia){
      return 'Ela é Demais'
    }else{
    return 'Maze Runner'
  }
  }else{
    if(acao){
      return 'Karatê Kid';
    }else if(romance){
      return 'Diário de uma princesa';
    }else if(comedia){
      return 'Alvins e os Esquilos'
    }else{
      return 'Karatê Kid';
    }
    }
  }
