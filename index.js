const express = require('express');
const userRouter = require('./routes/user.router')
const itemRouter = require('./routes/item.router')

const PORT = 8080
const app = express()

const cors=require("cors");
const corsOptions ={
    origin:'*',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
}


app.use(cors(corsOptions)) // Use this after the variable declaration
app.use(express.json())
app.use('/api', userRouter);
app.use('/api', itemRouter);

app.listen(PORT, () => console.log('http://localhost:8080/'))





// create table items
// (
//     id          SERIAL  PRIMARY KEY,
//     name        varchar(30)            not null,
//     description varchar(100)           null,
//     category    varchar(30)            null,
//     cost        int default 0 null
// );
//
// -- auto-generated definition
// create table tasks
// (
//     id         SERIAL  PRIMARY KEY,
//     name       varchar(30) default 'Не указан'       null,
//     first_name varchar(30) default 'Не указан'       null,
//     phone      varchar(11)                           null,
//     email      varchar(60) default 'Не определён'    null,
//     price      int         default 0                 null,
//     type       varchar(20) default 'Не определён'    null,
//     product    varchar(30) default 'Не указан'       null,
//     comment    varchar(20) default 'Не указан'       null,
//     completed  smallint    default 0                 null,
//     checked    varchar(5)  default 'false'           null,
//     created_at timestamp   default CURRENT_TIMESTAMP not null
// );
//
// -- auto-generated definition
// create table users
// (
//     id            SERIAL  PRIMARY KEY,
//     name          varchar(30)                                 null,
//     money         int               default 0                 null,
//     weight        smallint  default 18                null,
//     age           SMALLINT           default 18                null,
//     energy        smallint  default 100               null,
//     health        SMALLINT   default 100               null,
//     hungry        SMALLINT   default 100               null,
//     power         SMALLINT   default 100               null,
//     intellect     SMALLINT   default 0                 null,
//     lucky         SMALLINT   default 0                 null,
//     dirty         SMALLINT   default 0                 null,
//     drivecategory varchar(12)       default 'отсутствуют'     null,
//     profession    varchar(30)       default 'Безработный'     null,
//     created_at    timestamp         default CURRENT_TIMESTAMP not null
// );
//
// -- auto-generated definition
// create table users_items
// (
//     user_id int default 0 not null,
//     item_id int default 0 not null,
//     primary key (user_id, item_id)
// );
//
