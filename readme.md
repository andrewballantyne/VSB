# Virtual ScrollBox

**Tag-line:** "A scroll box that can have tens of thousands of items with no/little performance hit"

A Virtual ScrollBox is a container that can have a large variant of items. Only a very small subset of items are visible in the
'viewport' and the remaining items are just sitting in memory. As the user scrolls, the items from memory will be transferred to one
of the visible squares, thus saving the vast time adding (and/or potentially removing) items to the DOM.

## Contents

1. [Version Notes](#version-notes)
1. [Goals](#goals)
1. [Known Issues](#known-issues)
1. [License]

### Version Notes

**v0.0.1**

- Added to GitHub
- Works, with limited data and functionality
- Needs optimization and continued features

### Goals

- A scroll box that can have tens of thousands if not more items in it without any performance issues
- A dynamic ability to accept any item height or a viable set of heights
- Library-less for easy inclusion and no conflicts with any existing libraries that one may already be using
- Addable via NPM and/or Bower

### Known Issues

- Classes of items are not supported (or rather won't change off the initial items added)
- All content is text only (desire is to support full HTML)
- Existing elements needs to be supported
- A refresh if elements change outside of the VSB
- Dynamic height (currently it must be provided in the constructor)
- I'm sure others, but none come to me right now

### License

The MIT License (MIT)

Copyright (c) 2015 Andrew Ballantyne

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

