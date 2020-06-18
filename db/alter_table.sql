ALTER TABLE users
DROP COLUMN password;

ALTER TABLE users
ADD password TEXT;
