using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Aktivites
{
    public class Details
    {

        public class Query : IRequest<Activity>
        {
            public Guid Id { get; set; }
        }

        public class QueryHandler : IRequestHandler<Query, Activity>
        {
        private readonly DataContext _context;
            public QueryHandler(DataContext context)
            {
            _context = context;
            }

            public async Task<Activity> Handle(Query request, CancellationToken cancellationToken)
            {
               return await _context.Activities.FindAsync(request.Id);
            }
        }

    }
}