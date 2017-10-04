# workshops

> vue rocks

## Build Setup


### install dependencies
> ```npm install```

### serve with hot reload at localhost:8080
> ```npm run dev```

### build for production with minification
> ``npm run build```

### build for production and view the bundle analyzer report
> ```npm run build --report```

### SCSS ( Not required, it is normally already in package.json )
> ```npm install sass-loader node-sass --save-dev```

###JSON SERVER ( Mocking system, not required )
> ```npm install -g json-server ```

#####Create a db.json file 

> ```json-server --watch db.json --port 8080```

### Axios
> ```npm install axios --save```

> ```import axios from 'axios'```

> ```export const HTTP = axios.create({ baseURL: http://url, headers: { Authorization: 'Bearer {token}' } })```

#------------------------
For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
