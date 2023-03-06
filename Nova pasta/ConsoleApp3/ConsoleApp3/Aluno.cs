using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    class Aluno
    {
        public int matricula;
        public string nome;
        public string celular;

        public void criar()
        {
            Console.WriteLine("Aluno Criado com os dados: " +
                "\n Nome: " + nome +
                "\n Matrícula: " + matricula +
                "Celular: " + celular);
        }
    }
}
