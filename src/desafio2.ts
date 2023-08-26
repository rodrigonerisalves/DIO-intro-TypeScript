// Como podemos melhorar o esse código usando TS?

enum Profession {
  Atriz,
  Padeiro,
}

interface PersonalProps {
  nome: string;
  idade: number;
  profissao: Profession;
}

let pessoa1 = {} as PersonalProps;
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = Profession.Atriz;

let pessoa2 = {} as PersonalProps;
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = Profession.Padeiro;

let pessoa3: PersonalProps = {
  nome: "laura",
  idade: 32,
  profissao: Profession.Atriz,
};

let pessoa4: PersonalProps = {
  nome: "carlos",
  idade: 19,
  profissao: Profession.Padeiro,
};
