CREATE TABLE user (
    id varchar(40) not null,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    email varchar(50) not null,
    is_admin boolean not null,
    last_login date not null,
    primary key(id)
);

CREATE TABLE team (
    id varchar(40) not null,
    description varchar(50),
    primary key(id)
);

CREATE TABLE user_team (
    id varchar(40) not null,
    user_id varchar(40) not null,
    team_id varchar(40) not null,
    primary key(id),
    foreign key (user_id) references user(id),
    foreign key (team_id) references team(id)
);

CREATE TABLE project (
    id varchar(40) not null,
    name varchar(30),
    priority int,
    primary key(id)
);

CREATE TABLE user_project (
    id varchar(40) not null,
    user_id varchar(40) not null,
    project_id varchar(40) not null,
    primary key(id),
    foreign key (user_id) references user(id),
    foreign key (project_id) references project(id)
);