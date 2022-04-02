namespace api.TODO
{
    public class Task
    {
        public int Id { get; set; }
        public string? Name { get; set; }
        public string? ListName { get; set; }
        public bool Done { get; set; } = false;
    }
}