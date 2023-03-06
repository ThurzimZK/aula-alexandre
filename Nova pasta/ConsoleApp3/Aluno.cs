using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp3
{
    class Aluno
    {
        private int matricula;
        private String nome;
        private String celular;
        public readonly int ativo = 1;

        public Aluno(int matricula, String nome, String celular)
        {
            this.matricula = matricula;
            this.nome = nome;
            this.celular = celular;
            //Console.WriteLine("Método construtor do aluno");
        }

        public void criar()
        {
            Console.WriteLine("Aluno Criado com os dados: " +
                "\n Nome: " + nome +
                "\n Matrícula: " + matricula +
                "Celular: " + celular);
        }

        /*
        public void criar()
        {
            Console.WriteLine("Aluno Criado com os dados: " +
                "\n Nome: " + nome +
                "\n Matrícula: " + matricula +
                "Celular: " + celular);
        }
         */

        public double media(double n1, double n2)
        {
            return (n1 + n2) / 2;
        }

        public double media(double n1, double n2, double n3)
        {
            return (n1 + n2 + n3) / 3;
        }

        public int media(int n1, int n2)
        {
            return n1 + n2;
        }
    }

}
