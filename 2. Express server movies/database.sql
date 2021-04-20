drop table if exists log;
create table log
(
    id bigint unsigned auto_increment,
    params text null,
    queryString text null,
    endpoint text not null,
    created_at datetime default current_timestamp null,
    constraint apiLog_pk
        primary key (id)
);

