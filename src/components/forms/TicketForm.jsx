import { useState } from "react";
import "./Form.css";

export const TicketForm = () => {
    const [ticket, setTicket] = useState({ description: "", emergency: false })


  return (
    <form>
      <h2>New Service Ticket</h2>
      <fieldset>
        <div className="form-group">
          <label>Description</label>
          <input
            type="text"
            className="form-control"
            placeholder="Brief description of problem"
            onChange={(event) => {
                const ticketCopy = {...ticket}
                ticketCopy.description = event.target.value
                setTicket(ticketCopy)
            }}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label>
            Emergency:
            <input type="checkbox" onChange={(event) => {
                const ticketCopy = {...ticket}
                ticketCopy.emergency = event.target.checked
                setTicket(ticketCopy)
            }}/>
          </label>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <button className="form-btn btn-info">Submit Ticket</button>
        </div>
      </fieldset>
    </form>
  );
};
