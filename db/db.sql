
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE users (
    user_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_email VARCHAR(255) NOT NULL,
    user_salt  VARCHAR(255) NOT NULL,
    user_pass  VARCHAR(255) NOT NULL
);

CREATE TABLE "boards" (
    board_id uuid PRIMARY KEY DEFAULT uuid_generate_v4(),
    user_id  uuid NOT NULL,
    board_name VARCHAR(255) NOT NULL,
    board_type SMALLINT NOT NULL,
    board_priority SMALLINT NOT NULL,
    date_created DATE NOT NULL DEFAULT CURRENT_DATE,
    date_last_modified DATE NOT NULL DEFAULT CURRENT_DATE
);

INSERT INTO users (user_email, user_salt, user_pass) VALUES ('q', 'q', 'q');

CREATE TABLE "session" (
  "sid" varchar NOT NULL COLLATE "default",
  "sess" json NOT NULL,
  "expire" timestamp(6) NOT NULL
)
WITH (OIDS=FALSE);

ALTER TABLE "session" ADD CONSTRAINT "session_pkey" PRIMARY KEY ("sid") NOT DEFERRABLE INITIALLY IMMEDIATE;

CREATE INDEX "IDX_session_expire" ON "session" ("expire");