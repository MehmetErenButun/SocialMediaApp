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
    public class Delete
    {
          public class Command : IRequest
        {
            public Guid Id { get; set; }
        }

        public class CommandHandler : IRequestHandler<Command>
        {
        private readonly DataContext _context;
            public CommandHandler(DataContext context)
            {
            _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
                var act = await _context.Activities.FindAsync(request.Id);
                _context.Activities.Remove(act);
                await _context.SaveChangesAsync();
                return Unit.Value;
            }
        }
    }
}