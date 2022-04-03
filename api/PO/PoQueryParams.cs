namespace api.PO
{
    public class PoQueryParams
    {
        public int Page { get; set; } = 1;
        public int PageSize { get; set; } = 10;
        public string? Search { get; set; }
        public string? Order { get; set; }
    }
}