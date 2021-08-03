# PUCMG-backend
## CONTEXT

This project is a part of the lato sensu post graduation degree in Full Stack Web Development, concluded in 2020 at Pontifícia Universidade Católica de Minas gerais (Put Minas).

The objective is to present the technical skills related to the completion of the course with a real case study. In this case, I present a tool to help food producers avoid waste in their business, offering greater control over the products available in stock and of course, all the waste that is being made due to expired items.

## Development

### Running with Docker

This project is ready for the usage with docker to avoid environment issues, such as dependencies and libraries.

To create a container with the image of this project and start it, use:

```docker-compose up```

### Database setup

To compleately clear database items, use: 

```npm run knex:clear```

Creates database structure

```yarn knex:migrate```

Seeds database with exemple data

```yarn knex:seed```