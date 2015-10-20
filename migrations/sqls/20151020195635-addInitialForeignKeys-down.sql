ALTER TABLE calendars DROP CONSTRAINT calendars_user_fk;
ALTER TABLE events DROP CONSTRAINT events_calendar_fk;
ALTER TABLE notifications DROP CONSTRAINT notifications_event_fk;
