using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Aktivites
{
    public class List
    {
        public class Query : IRequest<List<Activity>> {}

        public class QueryHandler : IRequestHandler<Query, List<Activity>>
        {
        private readonly DataContext _context;
            public QueryHandler(DataContext context)
            {
            _context = context;
            }

            public async Task<List<Activity>> Handle(Query request, CancellationToken cancellationToken)
            {
                    return await _context.Activities.ToListAsync();
            }
        }
    }
}