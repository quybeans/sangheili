#sangheili

Front-end application for Sanghelios.

## Prerequisites

Install Vue CLI (version >3.0.0) globally

```sh
> npm install -g @vue/cli
```

## Development

Run development server

```sh
> npm run serve
```

## Configuration

This project using `vue-resource` as the main http client. Http client default root can be config at `src/main.ts`

ex: 
```vue
Vue.http.options.root = 'http://localhost:3012';
```

Within project, http call using vue resouces should not have the slash at the begining or else the client won't apply the root.

ex: 
This is WRONG. Doing this will cause the http client called to `[dev-server-root]/page`.
```js
  this.$http.post('/page').then(function(response) ...
```

This is RIGHT
```js
  this.$http.post('page').then(function(response) ...
```
Happy coding.