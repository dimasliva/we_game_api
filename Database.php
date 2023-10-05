<?php

class Database
{
  public function __construct($host, $name, $user, $password) {
    $this->host = $host;
    $this->name = $name;
    $this->user = $user;
    $this->password = $password;
  }
  public  function  getConnection(): PDO {
    $dsn = "pgsql:host={$this->host};dbname={$this->name}";
    return new PDO($dsn, $this->user, $this->password);
  }
}