namespace ConsoleApp3
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello, World!");

            Aluno lampiao = new Aluno();

            lampiao.matricula = 1;
            lampiao.nome = "Virgulino Ferreira da Silva";
            lampiao.celular = "17 1234.5678";

            lampiao.criar();
        }
    }
}