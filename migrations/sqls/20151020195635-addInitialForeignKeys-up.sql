ALTER TABLE calendars
  ADD CONSTRAINT calendars_user_fk FOREIGN KEY (user_id)
      REFERENCES users (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE events
  ADD CONSTRAINT events_calendar_fk FOREIGN KEY (calendar_id)
      REFERENCES calendars (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE;

ALTER TABLE notifications
  ADD CONSTRAINT notifications_event_fk FOREIGN KEY (event_id)
      REFERENCES events (id) MATCH SIMPLE
      ON UPDATE CASCADE ON DELETE CASCADE;
