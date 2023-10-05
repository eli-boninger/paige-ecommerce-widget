This is a demo app created as part of a job interview.

## Build & run

To run the development server use the following:

```bash
$ npm install # first install node modules
$ npm run dev
```

Then navigate to [http://localhost:3000](http://localhost:3000).

To create a production build and run it, the follow commands should do it:

```bash
$ npm run build
$ npm run start
```

The production build will also run on port 3000.

### Design choices

- Went with React context rather than going into something like a redux store or loading the json items into a database. For the scope the project, that seemed sufficient. As such, all changes are cleared on refresh but will persist otherwise
- As such, not too many Next features needed to be leveraged. All data is fetched on initial table load. No API calls are made on switching to a product-specific route.

### Liberties taken

- All fixture descriptions were truncated to be less than 56 characters.
- A fixture product with a duplicate SKU was deleted
- Filter functionality was placed at the top of the table to work in line with typical table filters
- Styling is barebones with some artistic liberties
