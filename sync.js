const sync = require("shopify-sync");

sync(
  "watch", // Resource type (upload, download, watch)
  {
    dir: "assets", // The directory of to watch
    target: "hive2work", // Your theme target
    concurrency: 20, // Number of parallel requests
    forceIgnore: false, // Apply ignores at chokidor instance
    ignore: [
      // Accepts an array of files and/or an anymatch `/*/**` wildcard
      // 'example/ignore-dir/**/**'
      // 'example/snippets/ignore.liquid'
    ],
  },
  function () {
    // Execute callback function
    // this.file will returns parsed file path object)
    // this.content will return the buffer content
    console.log(this);
  }
);
