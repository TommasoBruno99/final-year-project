CREATE TABLE user (
    id: varchar(40) not null primary key,
    first_name: varchar(30) not null,
    last_name: varchar(30) not null,
    email: varchar(50) not null,
    is_admin: boolean not null,
    last_login: date not null
)

CREATE TABLE team (
    id: varchar(40) not null primary key,
    description: varchar(50),
)

CREATE TABLE user_team (
    id: varchar(40) not null primary key,
    user_id: varchar(40) not null,
    team_id: varchar(40) not null,
    foreign key (user_id) references user(id),
    foreign key (team_id) references team(id)
)

CREATE TABLE project (
    id: varchar(40) not null primary key,
    name: varchar(30),
    priority: integer
)

CREATE TABLE user_project (
    id: varchar(40) not null primary key,
    user_id: varchar(40) not null,
    project_id: varchar(40) not null,
    foreign key (user_id) references user(id),
    foreign key (project_id) references project(id)
)