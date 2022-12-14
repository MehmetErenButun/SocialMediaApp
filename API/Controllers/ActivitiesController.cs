using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Application.Aktivites;
using Application.Dto;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Persistence;
using static Application.Aktivites.Create;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
       

        [HttpGet]

        public async Task<ActionResult<List<Activity>>> GetActivites()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]

        public async Task<ActionResult<Activity>> GetActivity(Guid id)
        {
            return await Mediator.Send(new Details.Query(){Id=id});
        }

        [HttpPost]

        public async Task<ActionResult> CreateActivity(Activity activity)
        {
            return Ok(await Mediator.Send(new Create.Command{Activity=activity}));
        }

        [HttpPut("{id}")]

        public async Task<ActionResult> EditActivity(Guid Id,Activity act)
        {
            act.Id = Id;
            return Ok(await Mediator.Send(new Edit.Command{Activity=act}));
        }

        [HttpDelete("{id}")]

        public async Task<ActionResult> DeleteActivity(Guid Id)
        {
            return Ok(await Mediator.Send(new Delete.Command(){Id=Id}));
        }
    }
}