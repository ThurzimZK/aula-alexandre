namespace ConsoleApp3
{
    internal class Program
    {
        static void Main(string[] args)
        {            
            Console.WriteLine("Valor PI " + Config.valorPI);

            Aluno lampiao = new Aluno(1,
                        "Virgulino Ferreira da Silva",
                        "17 1234.5678");

            double media1 = lampiao.media(5, 5);
            Console.WriteLine("Média 1: " + media1);

            double media2 = lampiao.media(5, 5, 4);
            Console.WriteLine("Média 2: " + media2);

            /*lampiao.matricula = 1;
            lampiao.nome = "Virgulino Ferreira da Silva";
            lampiao.celular = "17 1234.5678";*/
            lampiao.criar();

            Aluno maria = new Aluno(2, "Maria", "17 9000000");
            maria.criar();

            Aluno celia = new Aluno(3, "Celia", "17 9000000");
            celia.criar();

        }
    }
}