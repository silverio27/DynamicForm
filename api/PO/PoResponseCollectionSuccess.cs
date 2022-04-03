namespace api.PO
{
    public class PoResponseCollectionSuccess<T>
    {
        public bool HasNext { get; set; }= false;
        public IEnumerable<T>? Items { get; set; }
    }

    public static class PoResponseCollectionExtensions
    {
        public static PoResponseCollectionSuccess<T> ToPoResponseCollection<T>(this IEnumerable<T> list)
        {
            return new(){
                HasNext = false,
                Items = list
            };
        }
    }
}