RSS ripper
===

This little library uses streams to fetch data from RSS endpoints and saves the transformed data to a [levelDB](https://github.com/google/leveldb) database for further use (did anyone said [ML](https://en.wikipedia.org/wiki/Machine_learning)?)

Setup
---

```bash
cd repository
nvm use
npm i -g yarn
yarn
```

Usage
---

`RssRipper` is an exposed class that receives an optional "transformer" parameter and has a single method called `rip`.

```javascript
const defaultRipper = new RssRipper();
defaultRipper.rip('http://my-feed-url.com');
```

#### Transformers
A `transformer` is a simple method that can be plugged when we initialize the `RssRipper` that extracts the data as we prefer.

The default transformer is called `pass-through`:

```javascript
export default (item, index) => Rx.Observable.of([index, item])
```

It returns an 2-dimensional array that will be stored in level db as `key` and `value` respectively.

You can extract and transform data from `item` as you please, leveraging the power of Rx.js to manipulate the stream (e.g. doing an AJAX call per every item, or buffering results and doing a batch call every N items...)


Examples
---

I've bundled this with a small example that reads paged ATOM rss feeds from the wordpress blog, [firing a call every 500 ms to fetch 100 pages in total](https://github.com/vshjxyz/rss-ripper/blob/master/examples/wordpress/constants/shared.js).

You can run it out-of-the-box using `yarn run examples:wordpress`.

