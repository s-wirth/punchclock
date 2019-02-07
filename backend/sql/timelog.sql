CREATE TABLE TIMELOG
(
  id serial not null primary key,
	starttime timestamp,
	endtime timestamp,
	userid integer
);