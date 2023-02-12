# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Case A) If we can use the existing database id for our db relation

Ticket 1) (priority: high)

	Need to update the Agent Schema to add new column to store custom id with unique constaint with NULL value 
	ETA : 0.5 day

Ticket 2) (priority: high)
	
	Need to create an API to upload excel file to map the db generated id with custom id these custom id will be provided from the facility side
	ETA: 1.5 Days

	** this ticket can be pick if we have custom ids for all of are entry in database from individual facility not mandating for all facility at same time

Ticket 3)(priority: low)

	Need to update the Agent Schema to add NOT NULL constraint for custom id 
	ETA : 0.5 day

	** Optional can be done in future if we reach to a point where we have no entry present without custom id data

Ticket 4) (priority: high)

	Ticket 4.1)
		create an api to add/update the custom id for each Agent 
			Or 
		Update the existing update Agent api to store or update the custom id in Agent Table
		ETA: 1 day

	Ticket 4.2)
		Add Validation to check duplicate custom id in function level and return appropriate message in response 
		ETA: 1 day

Ticket 5) (priority: high)

	Need to update getShiftsByFacility & generateReport APIs since we need to return custom agent id in response
	ETA: 2 Days


Ticket 6) (priority: high)

	Need to test the system thoroughly
	ETA: 3 days



Case B)
	If we can not use the existing database id for our db relation

Ticket 1)
	Need to perform db migration work 
	ETA 5 days (dev)

Ticket 2)
	Need to update both APIs since relation is updated
	ETA: 4 Days (dev)

Ticket 3)
	Need to test the system thoroughly
	ETA: 7 days 





*** Hey Team I'll prefer Case A since we are not breaking the existing feature also we can have the track of our past data 
	1) In case A if we will pick "Ticket 2)" then we don't have to worry about the "Ticket 4)" and
we can deprioritized but it would be better user wants to update the custom id at their end

In Case B) we have to restructure the system which is not an ideal case beacuse it can disrupt the existing functionality also can reopen the existing bugs that has been solved in past