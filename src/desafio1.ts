// Como podemos rodar isso em um arquivo .ts sem causar erros?
interface EmployeeProps {
  code: number;
  name: string;
}

let employee = {} as EmployeeProps;
employee.code = 10;
employee.name = "John";
