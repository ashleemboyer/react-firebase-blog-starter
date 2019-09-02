# react-firebase-blog-starter

## Changelog

### Monday, September 2nd, 2019

After making it through part 2 ([repo](https://github.com/ashleemboyer/react-firebase-blog-starter-part-2); [blog post](https://ashleemboyer.com/react-firebase-blog-02)) of the blogging series, I saw a need to update the way dates are stored in the Firebase Realtime Database.

- `date` is being replaced by `datePretty`. This will be used for display purposes.
- `dateFormatted` is new. It's in the YYYY-MM-DD format and will be used for sorting posts in chronological order on the home page.

The [react-firebase-blog.json](https://github.com/ashleemboyer/react-firebase-blog-starter/blob/master/react-firebase-blog.json) file has been updated to reflect these changes. The [hardcoded `blogPosts` array](https://github.com/ashleemboyer/react-firebase-blog-starter/blob/master/src/pages/home.js#L5) in [src/pages/home.js](https://github.com/ashleemboyer/react-firebase-blog-starter/blob/master/src/pages/home.js) has also been updated.
