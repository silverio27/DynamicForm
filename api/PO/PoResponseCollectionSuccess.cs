using Microsoft.EntityFrameworkCore;

namespace api.PO
{
    public class PoResponseCollectionSuccess<T>
    {
        public bool HasNext { get; set; } = false;
        public IEnumerable<T>? Items { get; set; }
    }

    public static class PoResponseCollectionExtensions
    {
        public static async Task<PoResponseCollectionSuccess<T>> ToPoResponseCollectionAsync<T>(
            this IQueryable<T> query,
            PoQueryParams queryParams)
        {
            int count = await query.CountAsync();
            var totalPages = (int)Math.Ceiling(count / (double)queryParams.PageSize);
            int skip = (queryParams.Page - 1) * queryParams.PageSize;
            var items = await query
                .Skip(skip)
                .Take(queryParams.PageSize)
                .ToListAsync();

            return new()
            {
                HasNext = queryParams.Page < totalPages,
                Items = items
            };
        }
    }
}