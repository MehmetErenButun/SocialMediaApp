using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using Application.Dto;
using AutoMapper;
using Domain;
using MediatR;
using Persistence;

namespace Application.Aktivites
{
    public class Edit
    {
        public class Command : IRequest
        {
            public Activity Activity { get; set; }
        }

        public class CommandHandler : IRequestHandler<Command>
        {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
            public CommandHandler(DataContext context,IMapper mapper)
            {
            _mapper = mapper;
            _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {
               var act = await _context.Activities.FindAsync(request.Activity.Id);

               var model = _mapper.Map(request.Activity,act);

               await _context.SaveChangesAsync();

               return Unit.Value;
               
            }
        }
    }
}