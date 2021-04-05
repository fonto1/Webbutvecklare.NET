using Messenger.Models;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace Messenger.Hubs
{
    public class MessengerHub : Hub
    {
        public async Task sendWhiteboard(Point[] coordinates)
        {
            await Clients.All.SendAsync("whiteboard", coordinates);
        }

        public async Task clearboard(string clear)
        {
            await Clients.All.SendAsync("clear", clear);
        }
    }
}