namespace Orarend
{
    internal class Program
    {
        public static string Cella()
        {
            string oraNev;
            string plusHtml = "";
            //Óranév
            Console.Write("Óranév: ");
            oraNev = Console.ReadLine();
            plusHtml += oraNev;
            //Terem
            if (oraNev != "")
            {
                Console.Write("Terem: ");
                plusHtml += $"<span>{Console.ReadLine()}</span>";
            }
            //Cellazáró tag
            plusHtml += "\n</td>\n";
            Console.Clear();

            return plusHtml;
        }
        static void Main()
        {
            Console.Write("Osztály: ");
            string html = $"<tbody id=\"{Console.ReadLine()}\" class=\"schedule\"\n>";
            Console.WriteLine();
            string[] nap = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek"];
            int oraHossz;
            //Napokon végigmegy
            foreach (string currentNap in nap)
            {
                html += $"<tr>\n<td>{currentNap}</td>\n";
                //Órákon végigmegy
                for (int ora = 0; ora < 10; ora++)
                {
                    Console.WriteLine($"{currentNap}\t{ora}. óra");
                    //Órahossz
                    Console.Write("Órahossz: ");
                    oraHossz = Convert.ToInt32(Console.ReadLine());
                    html += $"<td colspan ={oraHossz}>";
                    ora += oraHossz - 1;
                    if (oraHossz == 1)
                        html += Cella();
                    else if (oraHossz == 2)
                    {
                        html += "\n<table>\n";
                        Console.Write($"Csoportok óráinak száma: ");
                        int csoportOra = Convert.ToInt32(Console.ReadLine());
                        for (int i = 0; i < 2; i++)
                        {
                            html += "<tr>";
                            for (int j = 0; j < csoportOra; j++)
                            {
                                Console.Write($"{i}. csoport");
                                //Órahossz
                                Console.Write("Órahossz: ");
                                oraHossz = Convert.ToInt32(Console.ReadLine());
                                html += $"<td colspan ={oraHossz}>";
                                j += oraHossz - 1;
                                html += Cella();
                            }
                            html += "</tr>";
                        }
                        html += "</table>";
                    }
                    else
                    {
                        
                    }
                    //Sorzáró tag
                    if (ora >= 9)
                        html += "</tr>\n";
                    Console.Clear();
                }
            }
            html += "</tbody>";
            Console.Clear();
            Console.WriteLine(html);
        }
    }
}
